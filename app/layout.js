import './globals.css'
import styles from './page.module.css'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FetchData from './components/Fetchdata'
import Image from 'next/image'
import portfoliothimb from "../public/portfolio-thumbnail.jpg";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A Nextjs approurer project-The history of tea leaf in the world',
  description: 'Built with Next.js App Router, this project offers a seamless and dynamic experience. Explore the history of tea through an interactive, modern web application',
  openGraph: {
    title: "A Nextjs approurer project-The history of tea leaf in the world",
    description: "Built with Next.js App Router, this project offers a seamless and dynamic experience. Explore the history of tea through an interactive, modern web application",
    type: 'website',
    url: "https://nextjstea.vercel.app/",
    siteName: "teahouse -Nextjs app",
    images: [
      {
        url: portfoliothimb.src,
        width: 1200,
        height: 630,
        alt: "Tej R Portfolio Thumbnail",
      },
    ]
  }
}

export default async function RootLayout({ children }) {
  const Footerinfo = await FetchData('footer');
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer data={Footerinfo} />
        <div className='container'>
          <div className="nextlogocenter">
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>
      </body>
    </html>
  )
}
