// import Signin from "../signincomponents/signin";
const FormComponent = ({type, name, DisplayName})=>{
    return(
        <div className="form-control">
            <label htmlFor={name} className="input-text-label">{DisplayName}</label>
            <input type={type} className="input-text" id={name} name={name}/>
        </div>
    )
}
export default FormComponent;