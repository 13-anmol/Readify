import React, {useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [formData, setFormData] = useState({
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
      const res = await axios.post('http://localhost:4001/user/login', formData);
      console.log(res.data);
      if (res.data) {
        toast.success("Logged In Succesfully");
        onSubmit;
        setTimeout(() => {  
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000);  
      }
      
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
        setTimeout(() => {}, 2000);
      }
    }
  };

  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg dark:text-white">Login</h3>
    <div className='mt-4 space-y-2'>
        <span className='grow outline-none dark:bg-slate-900 dark:text-white'> Email </span>
        <br/>
        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    <div className='mt-4 space-y-2'>
        <span className='grow outline-none dark:bg-slate-900 dark:text-white'> Password </span>
        <br/>
        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' onClick={onSubmit}> Login </button>
        <p> Not registered?{" "}
          <span className='underline text-blue-500 cursor-pointer'> <a href='/signup'>Signup</a>
          </span>
        </p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login