import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:4001/user/signup', formData);
      console.log(res.data);
      if (res.data) {
        toast.success("Signup Successfull");
        navigate(from, {replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className='modal-box'>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> <a href='/'> X </a></button>
          <h3 className='font-bold text-lg'>Signup</h3>
          <div className='mt-4 space-y-2'>
            <span> Fullname </span>
            <br />
            <input
              type='text'
              name='fullname'
              value={formData.fullname}
              onChange={handleChange}
              placeholder='Enter your fullname'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>

          <div className='mt-4 space-y-2'>
            <span> Email </span>
            <br />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>

          <div className='mt-4 space-y-2'>
            <span> Password </span>
            <br />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>

          <div className='flex justify-around mt-4'>
            <button
              className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              onClick={onSubmit}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
