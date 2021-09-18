import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { Row, Col, Form, Button } from 'antd';
import styles from './forms.module.css';
import logo from '../../assets/img/logo2.png';
import HeaderStatus  from '../../containers/settings/headerStatus';
import { AdminLoggedIn } from '../../actions/actions';

  

const loginItems = [
   {
     type: "input",
     name: "username",
     label: "Username",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid SKU"
 
   },
   {
     type: "password",
     name: "password",
     label: "Password",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid product name"
 
   }
]

const Login = (props) => {

const dispatch = useDispatch();
   

HeaderStatus(false) ;

const {  register, handleSubmit, errors } = useForm();



const onSubmit = data => {
   console.log(data);
   dispatch(AdminLoggedIn(data))
     localStorage.setItem('citizenMicroFrontend-token', JSON.stringify({
       loggedIn: true,
       token: data,
       username: data.username
     }));
     props.history.push('/home')
}


return (
<div className={styles.loginContainer}>
<Row>
<Col md={9} className={styles.loginInfo}>
</Col>
<Col md={6} className={styles.loginForm}>

<Link to='/home'><img src={logo} className={styles.formLogo} /></Link>

<form  onSubmit={handleSubmit(onSubmit)}>
{ loginItems.map((item, i) =>(
 <>
<div className={styles.formLabel}>{item.label}</div>
    <Form.Item>
    {errors.name && errors.message}
<input
        name={item.name}
        type={item.type}
        style={{fontSize:"16px"}}
        className={styles.formText}
        ref={register({
          validate: value => value === "admin",
          required: item.required,
          pattern: {
            value: item.value,
            message: item.message
          }
        })}
      />
    </Form.Item>
</>

))
}

<Button variant="primary"  htmlType="submit" className={styles.formBtn} >
Submit
</Button>

</form>

</Col>
</Row>
</div>
);
};

export default Login;