import Headname from '../../components/page/Pageheader'
import FetchData from '../../components/Fetchdata'

const Contactpage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  return (
    <Headname data={Pagetitlesec.contactpage}/>  
  )
}

export default Contactpage