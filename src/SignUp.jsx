import React, { useState } from 'react'
import './SignUp.css'


const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <section className="main_signUp_container">
    <div className='signUp'>
        <h1>Sign Up </h1>
        <div className="input">
        <input type="text" className='inputValues' placeholder="input name" value={name} onChange = {(e) => setName(e.target.value)} />
        <input type="email" className='inputValues' placeholder="example@email" value={email} onChange = {(e) => setEmail(e.target.value)} />
        <input type="password" className='inputValues' placeholder="input password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Sign up" />
    </div>
    Already have an account?<a href="/Login">Login</a>
    </section>
  )
}

export default SignUp