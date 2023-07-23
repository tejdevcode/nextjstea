
import Image from 'next/image'
import styles from './page.module.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homeslider from './components/home/Carousel';
import Topslider from './components/home/Corosualdata';
import Abouthome from './components/home/Abouthome';
import ProductsInfo from './components/home/ProductsInfo';
import ProductsInfodata from './components/home/ProductsInfodata';
import Articledata from './components/home/Articledata';
import Articleinfo from './components/home/Article';
import Teamodel from './components/home/Teamodel'
import Teamodeldata from './components/home/Teamodeldata'
import Onlinestore from './components/home/Onlinestore'
import Onlinestoredata from './components/home/Onlinestoredata'
import Testimonial from './components/home/Testimonial'
import TestimonialData from './components/home/Testimonialdata'
import Contact from './components/home/Contact'
import ContactData from './components/home/Contactdata'


 export default async function Home() {
  const Topsliderdata = await Topslider();
  const Productitems = await ProductsInfodata();
  const Article = await Articledata();
  const Teamodalinfo = await Teamodeldata();
  const Onlinestoreinfo = await Onlinestoredata();
  const Testimonialdata = await TestimonialData();
  const Contactinfo = await ContactData();
  return (
    <main>
      <Header />
      <Homeslider data={Topsliderdata} />
      <Abouthome />
      <ProductsInfo data={Productitems}/>
      <Articleinfo data={Article} />
      <Teamodel data={Teamodalinfo} />
      <Onlinestore data={Onlinestoreinfo} />
      <Testimonial data={Testimonialdata} />
      <Contact data={Contactinfo} />
      <Footer />
      <h1> update 5</h1>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
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
      </div>
    </main>
  )
}
