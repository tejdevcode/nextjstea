"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Mrs_Saint_Delafield } from 'next/font/google'
const mrsfont = Mrs_Saint_Delafield({ weight: ['400'], subsets: ['latin'] });

const TextToBase64Image = () => {
  let text = 'Hi Tej, this is a base64 image!';
  const [baseimg , SetBadeimg] = useState(); 
  // const textToBase64 = (text) => {
  //   return btoa(text);
  // };
  // const base64Image = textToBase64(text);
  //  return (
  //    <div>
  //      {/* <img src={`data:image/png;base64,${base64Image}`} alt="Base64 Image" /> */}
  //      <Image
  //       src={`data:image/png;base64,${base64Image}`}
  //       alt="Base64 Image"
  //       width={300} // Adjust the width as per your requirements
  //       height={200} // Adjust the height as per your requirements
  //     />
  //      <div>{base64Image + ' aiaiai'}</div>
  //    </div>
  //  );

  useEffect(()=>{
    const canvas = document.createElement('canvas');
  canvas.width = 350;
  canvas.height = 100;

  const ctx = canvas.getContext('2d');
  const fontadd = '50px' + mrsfont.style.fontFamily;
  //ctx.font = '20px Mrs Saint Delafield';
  ctx.font = fontadd;
  ctx.fillText(text, 10, 60);

  const dataURL = canvas.toDataURL('image/png');
  const base64Image = dataURL.split(',')[1];
  //console.log(text.text)
  SetBadeimg(base64Image)
  },[])
  
  return <Image src={`data:image/png;base64,${baseimg}`} alt="Base64 Image" width={300} height={100}/>;
 };
 
 
 export default TextToBase64Image;