import CredentialInput from '../ui-elements/inputs/CredentialInput';
import Button from '../ui-elements/buttons/PrimaryButton';
import classes from '../../assets/css/Loginpage.module.css';
export default function LoginForm(){
    ;
    return(
        <div className={classes.LoginWrapper} >    
                <form className={classes.Loginform} id="login-form">
                    <CredentialInput 
                    placeholderText="Email or username" 
                    inputType="text"/>
                    <CredentialInput 
                    placeholderText="Password" 
                    inputType="password"/>
                </form>

                <div className={classes.RememberAndForgot}>
                    <div className={classes.left}>
                        <input type="checkbox" id="remember"/>
                        <p>Remember me</p>
                    </div>
                    <div className={classes.right}>
                        <p>Forgot password</p>
                    </div>
                </div>
                <Button long={true} form="login-form">Login</Button>
                <p>or</p>
                <Button long={true} buttonRed={true}>Register</Button>
            
            
        </div>
    );
}