import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const compressedImage = await compressImage(image);
      const imageUrl = await uploadImage(compressedImage);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 1, // Maximum file size in megabytes
      maxWidthOrHeight: 1000, // Maximum width or height of the image
      useWebWorker: true, // Use web worker for faster compression
    };

    return await imageCompression(file, options);
  };

  const uploadImage = async (compressedImage) => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${image.name}`);
    const snapshot = await imageRef.put(compressedImage);
    return await snapshot.ref.getDownloadURL();
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default UploadForm;
