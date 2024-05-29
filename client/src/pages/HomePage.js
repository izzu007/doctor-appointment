import React, {useEffect} from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const HomePage = () => {
  
  const getUserDate = async () => {
    try{
      const res = await axios.post('/api/v1/user/getUserData', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") 
        }
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDate()
  }, []);
  return(
    <Layout>
        <h1>Izharul Haque</h1>
    </Layout>
  )
}

export default HomePage