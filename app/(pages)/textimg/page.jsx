import TextToBase64Image from '/app/components/page/TextToBase64Image'
import Texttoimg from '/app/components/page/Textimgdata'
const Textimg = async () => {
      const imgtxt = await Texttoimg();

  return (
    <div className='text-center mt-5'>
      <h1>Text to Base64 Image</h1>
      <TextToBase64Image text={imgtxt} />
    </div>
  ); 
}

export default Textimg 