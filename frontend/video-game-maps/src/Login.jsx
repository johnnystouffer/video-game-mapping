import React from 'react'
import "./Login.css"

const Login = () => {

    


  return (
    <>
    <div className='background'>
        <div className='savestate-box'>
            <div className='login-screen'>
                <h3>  Enter Save State Here </h3>
                <input className='sign-in' type="text" /> <br />
                <button id='sign-in-button'> Submit Save State</button>
                <div className='privacy-text'>
                <h3> PLEASE READ BELOW</h3>
                <p> To protect the privacy of our users we do not take in any emails or passwords, instead we ask a couple questions about you then create you a save state that YOU SHOULD SAVE (if not then we have the "forgot save" button , just fill out the questions and we will return you save state key IF it exists)</p>
                </div>
            </div>
            <div className='sign-up'>
                <h3> Create a Save State </h3>
                <p> Enter your username in any game</p>
                <input className='first-name-user' type="text" />
                <p> What was your first video game? </p>
                <input className='fav-job' type="text" />
                <p> Enter Your Favorite Video Game: </p>
                <input className='fav-game' type="text" />
                <p> What is your dream job in the future? </p>
                <input className='fav-job' type="text" /> <br />
                <button id='make-state-button'> Create a Save State</button>
                <button id='forgot-state-button'> Forgot My Save Key</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login