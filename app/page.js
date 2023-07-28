import Abouthome from './components/home/Abouthome'
import Homeslider from './components/home/Carousel'
import ProductsInfo from './components/home/ProductsInfo'
import Articleinfo from './components/home/Article'
import Teamodel from './components/home/Teamodel'
import Onlinestore from './components/home/Onlinestore'
import Testimonial from './components/home/Testimonial'
import Contact from './components/home/Contact'
import FetchData from './components/Fetchdata'

export const metadata = {
  title: 'Nextjs Demo By Tej R',
}


 export default async function Home() {
  const Topsliderdata =      await FetchData('home/corosual');
  const Productitems =       await FetchData('home/products');
  const Article =            await FetchData('home/article');
  const Teamodalinfo =       await FetchData('home/teamodel');
  const Onlinestoreinfo =    await FetchData('home/store');
  const Testimonialdata =    await FetchData('home/testimonial');
  const Contactinfo =        await FetchData('home/contact');
  

  return (
    <main>
      
      <Homeslider data={Topsliderdata} />
      <Abouthome />
      <div className="my-5"><ProductsInfo data={Productitems}/></div>
      <Articleinfo data={Article} />
      <Teamodel data={Teamodalinfo} />
      <Onlinestore data={Onlinestoreinfo} />
      <div className="testimonial">
      <div className="py-5 my-5"><Testimonial data={Testimonialdata}/></div></div>
      <div className="mb-5"><Contact data={Contactinfo} /></div>
       
      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      
    </main>
  )
}
