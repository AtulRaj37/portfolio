import Head from 'next/head'
import { useState,useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
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
  const seoHead = (
    <Head>
      <title>Atul Raj | Full Stack Developer Portfolio</title>
      <meta name="description" content="Atul Raj — Full Stack Developer specializing in Next.js, TypeScript, React, Node.js, PostgreSQL, and real-time systems. Explore my projects including SyncVerse, JournEaze, PitchPulse, and more." />
      <meta name="keywords" content="Atul Raj, Full Stack Developer, Portfolio, Next.js, React, Node.js, TypeScript, BITS Pilani, SyncVerse, JournEaze, PitchPulse, Web Developer, Software Engineer" />
      <meta name="author" content="Atul Raj" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://atulraj-portfolio.vercel.app" />

      {/* Open Graph / Facebook / LinkedIn / Discord */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://atulraj-portfolio.vercel.app" />
      <meta property="og:title" content="Atul Raj | Full Stack Developer" />
      <meta property="og:description" content="Full Stack Developer specializing in Next.js, TypeScript, React, and real-time systems. Building scalable, production-ready web applications." />
      <meta property="og:image" content="https://atulraj-portfolio.vercel.app/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Atul Raj Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Atul Raj | Full Stack Developer" />
      <meta name="twitter:description" content="Full Stack Developer specializing in Next.js, TypeScript, React, and real-time systems." />
      <meta name="twitter:image" content="https://atulraj-portfolio.vercel.app/og-image.png" />

      {/* Favicons */}
      <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/icons/icon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/icons/icon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Atul Raj",
            url: "https://atulraj-portfolio.vercel.app",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://github.com/AtulRaj37",
              "https://www.linkedin.com/in/atulraj7",
            ],
          }),
        }}
      />
    </Head>
  )

  if(Component.getLayout){
    return(
      <>
        {seoHead}
        <Component {...pageProps } className="overflow-hidden" />
        <Analytics />
      </>
    ) 
  }

  return(
        <>
          {seoHead}
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
                <Analytics />
              </>
          }
        </> 
  )}

  export default MyApp