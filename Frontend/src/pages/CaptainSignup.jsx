import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [captainData, setCaptainData] = useState('');
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');


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
        <div className='py-5 px-5 h-screen flex flex-col justify-between '>
          <div>
            <img className='w-20 mb-3' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FUber-Emblem.png&f=1&nofb=1&ipt=cbf0ecfcd51cae31d742d699bf3a07137980972e70f0282b237899d43526941c&ipo=images"></img>
            <form onSubmit={(e) => {
              e.preventDefault()
              setUserData({
                fullName: {
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

              <h3 className='text-base font-medium mb-2'> Let’s start with your name, Captain.</h3>
              <div className='flex gap-4 mb-5'>
                <input required
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }

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
              <h3 className='text-base font-medium mb-2'>What’s your email address, Captain?</h3>
              <input required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}

                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email" placeholder='Siddhant@Rai.com'>

              </input>

              <h3 className='text-base font-medium mb-2'>
              Choose a strong password, Captain!</h3>
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

            <p className='text-center'>Have an account already? <Link to="/captain-login" className='text-blue-600'>Login Here</Link></p>

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