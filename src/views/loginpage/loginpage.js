import {useState, useEffect} from 'react'; 
import LoginForm from "../../components/loginpage/LoginForm"
import classes from "../../assets/css/Loginpage.module.css";

export default function LoginPage()
{
    const style = {
        fontSize: '3rem',
        color: '#403865',
        marginBottom: '50px'
        };
    return(
        <div className={classes.LoginForm}>
            
            <h1 style={style}>LOGIN</h1>
            <LoginForm  />
        </div>
        
    );
}