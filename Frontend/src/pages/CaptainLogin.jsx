
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import UberEmblem from "../assets/img/Uber-Emblem.png";
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();



  const submitHandler = async (e) => {
    e.preventDefault()

    const captain = ({
      email: email,
      password: password
    })
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }
    // console.log(userData)
    setEmail('');
    setPassword('');

  }
  return (

    <div className='p-5 h-screen flex flex-col justify-between mb-20' >
      <div>
        <img className="w-20 mb-3" src={UberEmblem} alt="Uber Emblem" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What’s your email address, Captain?</h3>
          <input required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" placeholder='John@Doe.com'>
          </input>

          <h3 className='text-lg font-medium mb-2'>
            Captain! Enter your password</h3>
          <input required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'>
          </input>

          <button
            className='bg-[#111] text-white fond-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

        </form>

        <p className='text-center'>Join Us! <Link to="/captain-signup" className='text-blue-600'> Register as a Captain</Link></p>

      </div>
      <div>
        <Link to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white fond-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}
export default CaptainLogin;