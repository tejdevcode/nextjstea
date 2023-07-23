
"use client"
import Link from 'next/link'
import WOW from 'react-wow';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Article = ({ data }) => {
   const contactinfo = data.contact;
   return (
      <div className="container-xxl contact py-5">
         <div className="container">
            <WOW animation='fadeInUp' delay="0.1s">
               <div className="section-title text-center mx-auto " style={{ maxWidth: "500px" }}>
                  <p className="fs-5 fst-italic text-primary">{contactinfo.secname}</p>
                  <h1 className="display-6">{contactinfo.sectitle}</h1>
               </div>
            </WOW>
            <WOW animation='fadeInUp' delay="0.1s">
               <div className="row justify-content-center ">
                  <div className="col-lg-8">
                     <p className="text-center mb-5">{contactinfo.secsubtitle}</p>
                     <div className="row g-5">
                        {contactinfo.channel.map((item, i) =>
                           <WOW animation='fadeInUp' delay={`0.${i + 3}s`}>
                              <div className="col-md-4 text-center " key={i}>
                                 <div className="btn-square mx-auto mb-3">
                                    {i == 0 ? <FaEnvelope className='contactico fa-2x text-white' /> : i == 1 ? <FaPhone className='contactico fa-2x text-white' /> :
                                       i == 2 ? <FaMapMarkerAlt className='contactico fa-2x text-white' /> : ""}
                                 </div>
                                 {item.onelink ?
                                    <p className="mb-2"><Link className="text-dark" href={item.onelink}>{item.first}</Link></p> :
                                    <p className="mb-2">{item.first}</p>
                                 }
                                 {item.twolink ? <p className="mb-0"><Link className="text-dark" href={item.twolink}>{item.second}</Link></p> :
                                    <p className="mb-0">{item.second}</p>
                                 }
                              </div>
                           </WOW>
                        )}

                     </div>
                  </div>
               </div>
            </WOW>
         </div>
      </div>
   )
}

export default Article