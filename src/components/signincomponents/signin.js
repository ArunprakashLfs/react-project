import './signin.scss'
import Login from '../login/login';
import FormComponent from '../formComponent/formComponent';

const Signin =()=>{
    return(
        <section className="loginpage">
            <div className="signin">
                <h2>SignIn page</h2>
                <button>Add to signin</button>
                <h3>Sign in Manually</h3>
                <form>
                    <FormComponent DisplayName={"EnterName"} name={"inputText"} type={"text"}/>
                    <FormComponent DisplayName={"Enter Email"} name={"inputEmail"} type={"email"}/>
                    <FormComponent DisplayName={"EnterPassword"} name={"inputPassword"} type={"password"}/>
                    <FormComponent DisplayName={"Confirm Password"} name={"ConfirmPassword"} type={"password"}/>
                    <button type='submit'>submit</button>
                </form>

            </div>
            <div className="login">
                <h2>Login </h2>
                <button>Add to Login</button>
                <Login/>
            </div>
        </section>    
    )
}
export default Signin;