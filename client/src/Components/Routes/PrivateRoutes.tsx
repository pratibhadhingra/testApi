import{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserService } from '../../Services/UserServices';

const PrivateRoutes = (props: any) => {

      const { Component } = props;
      const navigate = useNavigate();
      const LoginData = async () => {
        const r̥es = await getUserService();
        console.log("🚀 ~ file: PrivateRoutes.tsx:11 ~ LoginData ~ r̥es:", r̥es)
        
      }
      
    
      useEffect(() => {    
        LoginData()
        // if () {
        //   navigate("/");
        // }
      });

  return (
    <div>
      <Component />
    </div>
  )
}

export default PrivateRoutes
