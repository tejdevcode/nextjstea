"use client"
import WOW from 'react-wow';


const Contactform = ({ data }) => {
   return (
      <div className="row g-5">
         <WOW animation='fadeInUp' delay="0.1s">
            <div className="col-lg-6 ">
               <h3 className="mb-4">{data.formtitle}</h3>
               <p className="mb-4">{data.formdisc}.</p>
               <form>
                  <div className="row g-3">
                     <div className="col-md-6">
                        <div className="form-floating">
                           <input type="text" className="form-control" id="name" placeholder="Your Name" />
                           <label htmlFor="name">Your Name</label>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-floating">
                           <input type="email" className="form-control" id="email" placeholder="Your Email" />
                           <label htmlFor="email">Your Email</label>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="form-floating">
                           <input type="text" className="form-control" id="subject" placeholder="Subject" />
                           <label htmlFor="subject">Subject</label>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="form-floating">
                           <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "120px" }}></textarea>
                           <label htmlFor="message">Message</label>
                        </div>
                     </div>
                     <div className="col-12">
                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                     </div>
                  </div>
               </form>
            </div>
         </WOW>
         <WOW animation='fadeInUp' delay="0.5s">
            <div className="col-lg-6 ">
               <div className="h-100">
                  <iframe className="w-100 rounded"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                     frameBorder="0" style={{ height: "100%", minHeight: "300px", border: 0 }} allowFullScreen="" aria-hidden="false"
                     tabIndex="0"></iframe>
               </div>
            </div>
         </WOW>
      </div>
   )
}

export default Contactform