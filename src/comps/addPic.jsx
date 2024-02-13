import { useContext, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase/config'; // ייתכן שתצטרך להתאים את הנתיב לקובץ firebase.js שלך
import { v4 } from 'uuid';
import { AppContext } from './context/context';

const UpImage = () => {
    const { thisUser, setThisUser ,thisCV,setThisCV} = useContext(AppContext)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setimageUrl] = useState(null);

  const uploadImage = async () => {
    try {
      if (imageUpload === null) return;

      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload);
      const imageUrl = await getDownloadURL(imageRef);
      setimageUrl(imageUrl)
      console.log(imageUrl)
      alert(`Image uploaded successfully! URL: ${imageUrl}`);
      console.log(thisUser)
      setThisUser({...thisUser,img_url:imageUrls})
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    
    
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImageUpload(selectedImage);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button  className='btn btn-info' onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default UpImage;

