
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainLogin = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [captainData, setCaptainData] = useState('');


  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("Hello");
    //console.log(email,password);
    setCaptainData({
      email: email,
      password: password
    })
    // console.log(userData)
    setEmail('');
    setPassword('');

  }
  return (

    <div className='p-5 h-screen flex flex-col justify-between mb-20' >
      <div>
        <img className='w-20 mb-3' src=
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FUber-Emblem.png&f=1&nofb=1&ipt=cbf0ecfcd51cae31d742d699bf3a07137980972e70f0282b237899d43526941c&ipo=images"></img>
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