"use client"
import { useRef , useState } from 'react'

const Contactfields = () => {

   const [isSubmitted, setIsSubmitted] = useState(false);
   const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const[namefield, setNamefield] = useState("");
  const[mailfield, setMailfield] = useState("");
  const[msgfield, setMsgfield] = useState("");

  const handleChange= e => {
   //validator.isEmpty(nameRef.current.value) ? console.log('field is empty') : "";
   //namefield = validator.isEmpty(nameRef.current.value) ? 'Name is required' : '';
   //console.log(namefield)

   

  }
   
   const Handlesubmit = e =>{
      e.preventDefault();
      // For simplicity, we'll just check if all fields are filled
    if (!nameRef.current.value || !emailRef.current.value || !subjectRef.current.value || !messageRef.current.value) {
      alert('Please fill all fields.');      
    }

   //  if (!nameRef.current.value) {
   //    setNamefield('Name is required');
   //  }

   // validator.isEmpty(nameRef.current.value) ? setNamefield('Name is required') : "";
   // validator.isEmail(emailRef.current.value) ? setMailfield('Email is required') : "";
   // validator.isEmpty(messageRef.current.value) ? setMsgfield('Message is required') : "";

    //console.log({nameRef.current.value,emailRef.current.value,messageRef.current.value,subjectRef.current.value})
    console.log({
      "name" : nameRef.current.value,
      "Email" : emailRef.current.value,
      "subject" : subjectRef.current.value,
      "massage" : messageRef.current.value
   })

    // Mark the form as submitted
    setIsSubmitted(true);

      
   }
  return (
   <form onSubmit={Handlesubmit}>
   <div className="row g-3">
      <div className="col-md-6">
         <div className="form-floating">
            <input type="text" className="form-control" id="name" placeholder="Your Name" 
            onChange={handleChange} ref={nameRef}/>
            <label htmlFor="name">Your Name</label>
            {<div style={{ color: 'red' }}>{namefield}</div>}
         </div>
      </div>
      <div className="col-md-6">
         <div className="form-floating">
            <input type="email" className="form-control" id="email" placeholder="Your Email" 
            onChange={e => e.target.current } ref={emailRef}/>
            <label htmlFor="email">Your Email</label>
            {<div style={{ color: 'red' }}>{mailfield}</div>}
         </div>
      </div>
      <div className="col-12">
         <div className="form-floating">
            <input type="text" className="form-control" id="subject" placeholder="Subject" 
            onChange={e => e.target.current } ref={subjectRef}/>
            <label htmlFor="subject">Subject</label>
         </div>
      </div>
      <div className="col-12">
         <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "120px" }} ref={messageRef}></textarea>
            <label htmlFor="message">Message</label>
            {<div style={{ color: 'red' }}>{msgfield}</div>}
         </div>
      </div>
      <div className="col-12">
         <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
      </div>
   </div>
</form>
  )
}

export default Contactfields