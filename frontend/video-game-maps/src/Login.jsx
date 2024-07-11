import React from 'react'
import "./Login.css"
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [firstGame, setFirstGame] = useState('');
    const [favoriteGame, setFavoriteGame] = useState('');
    const [dreamJob, setDreamJob] = useState('');
    
    const createSaveState = () => {
      const userData = {
        user: username,
        first_game: firstGame,
        favorite_game: favoriteGame,
        dream_job: dreamJob
      }

      
    }

    const forgotSaveState = () => {

    }

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
                <form>
                  <p> Enter your username in any game</p>
                  <input className='first-name-user' type="text" onChange={(e) => { setUsername(e.target.value)}}/>
                  <p> What was your first video game? </p>
                  <input className='first-job' type="text" onChange={(e) => { setFirstGame(e.target.value)}}/>
                  <p> Enter Your Favorite Video Game: </p>
                  <input className='fav-game' type="text" onChange={(e) => { setFavoriteGame(e.target.value)}}/>
                  <p> What is your dream job in the future? </p>
                  <input className='fav-job' type="text" onChange={(e) => { setDreamJob(e.target.value)}}/> <br />
                  <button id='make-state-button' onClick={createSaveState}> Create a Save State</button>
                  <button id='forgot-state-button' onClick={forgotSaveState}> Forgot My Save Key</button>
                </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login