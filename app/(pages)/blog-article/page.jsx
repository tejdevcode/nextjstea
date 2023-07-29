import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Articleinfo from '/app/components/home/Article'

const  Acticle = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Article =            await FetchData('home/article');
  //console.log(Pagetitlesec.articlepage)
  return (
    <>
    <Headname data={Pagetitlesec.articlepage}/>
    <div className="my-5"><Articleinfo data={Article} /></div>
    </>
  )
}

export default Acticle 