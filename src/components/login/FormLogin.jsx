import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";

const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        .then(res => {
            localStorage.setItem('token',res.data.data.token)
        })
        
        .catch(err => console.log(err)) 

        // console.log(data);
        // reset({
        //     email:'',
        //     password:''
        // })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>

        <div className='login__div'>
            <label className='login__label' htmlFor="">Email</label>
            <input {...register('email')} type="email" id="email"/>
        </div>

        <div className='login__div-password'>
        <label className='login__label' htmlFor="">Password</label>
            <input {...register('password')}className='login__input' type="password" id="password"/>
        </div>

    <NavLink to="/">
        <button className='login__btn'>Login</button>
    </NavLink>

    </form>
  )
}

export default FormLogin