import React from 'react'
import './login.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const login = () => {
  return (
    < div className = 'container'>
        <div className = "header">
        <div className="text"> Sign up </div>
                <div className="underline"></div>
    </div>
        <div className = "inputs">
        <div className ="input"></div>
        <img src= {user_icon }alt=""/>
        <input type ="text"/>
        </div>

        <div className = "inputs">
        <div className ="input"></div>
        <img src={email_icon}alt=""/>
        <input type ="email"/>
        </div>

        <div className = "inputs">
        <div className ="input"></div>
        <img src={password_icon}alt=""/>
        <input type ="password"/>
        </div>
        
        </div>
  )
}
