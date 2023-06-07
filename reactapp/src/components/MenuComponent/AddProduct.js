import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../../firebase';

function AddProduct() {
    
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image,setImage] = useState('');

  const [imageError, setImageError] = useState('');

  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

  const types =['image/jpg','image/jpeg','image/png','image/PNG'];
  const handleProductImg=(e)=>{
      let selectedFile = e.target.files[0];
      if(selectedFile){
          if(selectedFile&&types.includes(selectedFile.type)){
              setImage(selectedFile);
              setImageError('');
          }
          else{
              setImage(null);
              setImageError('please select a valid image file type (png or jpg)')
          }
      }
      else{
          console.log('please select your file');
      }
  }

  const handleAddProducts=(e)=>{
    e.preventDefault();
    // console.log(title, description, price);
    // console.log(image);
    const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
    uploadTask.on('state_changed',snapshot=>{}
    ,error=>setUploadError(error.message),()=>{
        storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
            db.collection('Products').add({
                title,
                description,
                price: Number(price),
                url,
            })
            .then(function (docRef) {
              console.log("ID del documento: ", docRef.id);
            })
            .then(()=>{
                setSuccessMsg('Product added successfully');
                setTitle('');
                setDescription('');
                setPrice('');
                document.getElementById('file').value='';
                setImageError('');
                setUploadError('');
                setTimeout(()=>{
                    setSuccessMsg('');
                },3000)
            }).catch(error=>setUploadError(error.message));
        })
    })
}

return (
  <div className="container">
    <br></br>
    <br></br>
    <h1>Add Products</h1>
    <hr></hr>
    {successMsg && (
      <>
        <div className="alert alert-success">{successMsg} </div>
        <br></br>
      </>
    )}
    <form
      autoComplete="off"
      className="form-group"
      onSubmit={handleAddProducts}
    >
      <label>Product Title</label>
      <input
        type="text"
        className="form-control"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br></br>
      <label>Product Description</label>
      <input
        type="text"
        className="form-control"
        required
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />
      <br></br>
      <label>Product Price</label>
      <input
        type="number"
        className="form-control"
        required
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />
      <br></br>
      <label>Upload Product Image</label>
      <input
        type="file"
        id="file"
        className="form-control"
        required
        onChange={handleProductImg}
        />

      {imageError && (
        <>
          <br></br>
          <div className="error-msg">{imageError}</div>
        </>
      )}
      <br></br>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button type="submit" className="btn btn-success btn-md">
          SUBMIT
        </button>
      </div>
    </form>
    {uploadError && (
      <>
        <br></br>
        <div className="error-msg">{uploadError}</div>
      </>
    )}
  </div>
);
};
export default AddProduct;
