import React from 'react'
import { Form, Input, message} from 'antd';
import '../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const RegisterPage = () => {
  const navigate = useNavigate();
  // Form Handler
  const onFinishHandler = async (values) =>{
    try{
      const res = await axios.post('/api/v1/user/register', values);
      console.log(res);
      if(res.data.success){
        message.success('Register Successfully!');
        navigate('/login')
      } else{
        message.error('User Already Exist!');
      }
    } catch(error){
      console.log(error);
      message.error('Something went wrong');
    }
    
  }
  return (
    <>
    <div className='form-container'>
      <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='email' required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <button className='btn btn-primary' type='submit'>Register</button>
          <Link to="/login" className='m-2'>Already a user login here</Link>
        </Form>
    </div>
    </>
  )
}

export default RegisterPage