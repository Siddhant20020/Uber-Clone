import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
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
    <div>
      <div>
        <div className='p-7 h-screen flex flex-col justify-between '>
          <div>
            <img className='w-20 mb-3' src="https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png"></img>
            <form onSubmit={(e) => {
              e.preventDefault()
              setUserData({
                username: {
                  firstName: firstName,
                  lastName: lastName
                },
                password: password,
                email: email,
              })
              setEmail('');
              setPassword('');
              setFirstName('');
              setLastName('');
            }}>

              <h3 className='text-base font-medium mb-2'>Whats your name?</h3>
              <div className='flex gap-4 mb-5'>
                <input required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}

                  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                  type="text" placeholder='Siddhant '>


                </input>
                <input required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}

                  className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm'
                  type="text" placeholder='Rai'>

                </input>
              </div>
              <h3 className='text-base font-medium mb-2'>Whats your Email ?</h3>
              <input required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}

                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email" placeholder='Siddhant@Rai.com'>

              </input>

              <h3 className='text-base font-medium mb-2'>
                Enter Password</h3>
              <input required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'>

              </input>

              <button
                className='bg-[#111] text-white fond-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

            </form>

            <p className='text-center'>Have an account already? <Link to="/login" className='text-blue-600'>SignIn</Link></p>

          </div>
          <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
              Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
          {/* <div>
          <Link to='/captain-login'
            className='bg-[#10b461] flex items-center justify-center text-white fond-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div> */}
        </div>
      </div>

    </div>
  )
}
export default CaptainSignup;