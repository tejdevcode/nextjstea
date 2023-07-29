import { useState } from 'react'

const FormInput = (props) => {
   const [focused, setFocused] = useState(false);
   const { label, errorMessage, onChange, id, ...inputProps } = props;
   const handleFocus = (e) => {
      setFocused(true);
    };
   return (
      
         <div className="form-floating" key={props.id}> 
            <input
               {...inputProps}
               onChange={onChange}
               onBlur={handleFocus}
               focused={focused.toString()}
               className="form-control"
               placeholder={props.placeholder}
            />
            <label>{label}</label>
            <span>{errorMessage}</span>
         </div>
      
   )
}

export default FormInput