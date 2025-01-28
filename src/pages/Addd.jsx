import React, { useState } from 'react';
import { assets } from '../assets/admin_assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });

      console.log(response.data);
      toast.success('Product added successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add the product');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* File upload section */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {/* Image upload fields */}
          {/* Similar for image2, image3, image4 */}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Other input fields... */}

      {/* Sizes Section */}
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {/* Size selection code */}
        </div>
      </div>

      <button type="submit" className="bg-black text-white w-28 mt-4 px-10 py-3 rounded-full">
        ADD
      </button>
    </form>
  );
};

export default Add;
