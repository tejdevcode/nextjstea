"use client"
import { useRef , useState } from 'react'
import FormInput from './FormInput'

const Contactfields = () => {
   
   const [values, setValues] = useState({
      yourname: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "yourname",
        type: "text",
        placeholder: "Your Name",
        errorMessage:
          "Your Name should be 3-16 characters and shouldn't include any special character!",
        label: "Your Name",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "subject",
        type: "text",
        placeholder: "Subject",
        label: "Subject",
      },
      {
        id: 4,
        name: "message",
        type: "message",
        placeholder: "Message",
        errorMessage:
          "Message should be 8-20 characters!",
        label: "Message",
        pattern: `^[a-zA-Z0-9!@#$%^&*]{5,20}$`,
        required: true,
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    
  return (
     <form onSubmit={handleSubmit}>
        <div className="row g-3">
           {inputs.map((inputdata) => (
              <div className={(inputdata.id == 1 || inputdata.id == 2 ? "col-md-6" : "col-12")} key={inputdata.id}>
                 <FormInput
                    {...inputdata}
                    value={values[inputdata.name]}
                    onChange={onChange}
                 />
              </div>
           ))}
         
           <div className="col-12">
              <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
           </div>
        </div>
     </form>
  )
}

export default Contactfields