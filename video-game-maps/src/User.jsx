import React from 'react'
import LoginButton from './LoginButton'

const User = (props) => {

    if (props.user) {
        return (<div>
            <h3> Hello {props.user}!</h3>
        </div>)
    } else {
        return (
            <LoginButton/>
        )
    }
  
}

export default User