import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Articleinfo from '/app/components/home/Article'

const  Acticle = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Article =            await FetchData('home/article');
  return (
    <>
    <Headname data={Pagetitlesec.acticlepage}/>
    <div className="my-5"><Articleinfo data={Article} /></div>
    </>
  )
}

export default Acticle 