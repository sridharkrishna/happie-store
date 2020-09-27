import React from 'react';
import { login } from '../utils/xhr';

const mLogin = {
  minWidth:'100px',
  position:'absolute',
  textAlign:'center',
  top:'50%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  fontSize:'1.5rem'
}

const LoginPage = ({ history }) => (
  <>
      
        <button className="btn btn-primary btn-sm" style={mLogin} onClick={
          () => {
            login().then(() => {
            history.push('/')
          })
        }}>Login</button>
      
  </>
);

export default LoginPage;