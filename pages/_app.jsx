import Head from 'next/head'
import { useState,useEffect } from 'react'
import '../styles/globals.css'
import { Noto_Sans } from 'next/font/google' 
import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import Loader from '../components/layout/Loader'

const notoSans = Noto_Sans({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin-ext']
})

const MyApp = ({ Component, pageProps }) => {
  const [ loading,setLoading ] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 8000)
  }, [])
  if(Component.getLayout){
    return(
      <>
        <Head>
          <title>Atul Raj | Portfolio</title>
          <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
          <link rel="icon" href="/icons/icon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/icons/icon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        </Head>
        <Component {...pageProps } className="overflow-hidden" />
      </>
    ) 
  }

  return(
        <>
          <Head>
              <title>Atul Raj | Portfolio</title>
              <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
              <link rel="icon" href="/icons/icon-32x32.png" sizes="32x32" type="image/png" />
              <link rel="icon" href="/icons/icon-16x16.png" sizes="16x16" type="image/png" />
              <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          </Head>
          {
            loading ? 
              <>
                <Loader />
              </>
              : 
              <>
                <Layout>
                  <motion.div 
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1,transition:{ type:'spring',duration:1 } }}
                    className={`${notoSans.className} overflow-hidden bg-[#000] relative`}
                  >
                    <Component {...pageProps}/>
                  </motion.div>
                </Layout>
              </>
          }
        </> 
  )}

  export default MyApp