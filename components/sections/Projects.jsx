import Image from 'next/image';
import React,{ useState,useEffect,useRef } from 'react'
import { motion,useTransform,useScroll } from "framer-motion"
import { useSpring,animated } from "react-spring"
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { FaGithub } from "react-icons/fa";
import portfolio from '../../public/media/lotties/Portfolio(Project).json'
import blindcoding from '../../public/media/lotties/BlindCoding(Projects).json'
import optistock from '../../public/media/lotties/Optistock(Project).json'
import sketch from '../../public/media/lotties/AnimatedMarker(Projects).json'

const Projects = () => {
  const [ view,setView ] = useState(false);
  const numRef = useRef(null)
  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){ 
      setView(true)
      console.log("visible"+view)  
    }
  }
  const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.5
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(toggleAnimation,options)
    if(numRef.current){
      observer.observe(numRef.current)
    }
    return () => {
      if(numRef.current){
        observer.unobserve(numRef.current)
      }
    }
  },[])    
  const { scrollYProgress } = useScroll()
  const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
  const toLeft = useTransform(scrollYProgress,[0,1],[-100,-2000])  
  
  const NumberFloat = ({ n }) => {
    const { number } = useSpring({
      from : { number:0.1 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(1)) }</animated.div>
      ) 
    )        
  }
  const NumberInt = ({ n }) => {
    const { number } = useSpring({
      from : { number:0 },
      number:n,
      delay:0,
      config:{mass:1,tension:30,friction:10},
    });
    return(
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">{ number.to((n)=> n.toFixed(0)) }</animated.div>
      ) 
    ) 
  }
  
  return (
    <div className='text-white bg-[#000] border-0 border-red-400'>  
      <motion.div 
        className="font-extrabold tracking-tighter text-white border-0 border-red-500 font-mine2 md:text-10xl sm1:text-8xl"
        style={{x:toRight}}
      >
        <span className='font-mine2'>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
          <span>FEATURED</span>
          <span className="font-stencil-scrollnew">FEATURED</span>
        </span>
      </motion.div>      
      <motion.div 
        style={{x:toLeft}}
        className="tracking-tighter text-white border-0 border-red-500 sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
      >
        <span className='font-mine2'>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          <span className="font-stencil-scrollnew">WORK</span>
          <span>WORK</span>
          
        </span>
      </motion.div>
      <div className='m-auto mt-4 font-bold border-0 border-red-500 md:text-lg sm1:w-3/5 md:w-2/5 lg:w-1/5 sm1:text-md'>
        <div className='ml-auto text-xl text-center text-blue-400 border-0 border-red-500 xl:w-full sm1:w-full'>
          Projects
        </div>
      </div>
      {/* 1st proj */}
      <div className='relative mt-20 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/portfolio/portfolio2.png" alt="" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/portfolio/portfolio3.png" alt="" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          {/* <div className='absolute top-0 w-full border-2 border-red-500 h-[40rem]'></div> */}
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56 md:-left-[10rem] lg:left-1/2'>01.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale left-1/2'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={portfolio} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Portfolio <span className='text-blue-400'>Website</span></p>
                <div className='flex gap-3 items-start pt-2'>
                  <a href={'https://atulraj-portfolio.vercel.app/'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300 text-blue-400 text-sm font-bold border border-blue-400 rounded-lg px-3 py-2'>Live ↗</a>
                  <a href={'https://github.com/Atulraj37/Portfolio'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                    <span className="text-4xl"><FaGithub /></span>
                  </a>
                </div>
              </div>
              <p className='mt-12'>
                This is a full-stack app—my portfolio website designed to showcase my skills and projects. Developed using Next.js and styled with TailwindCSS, the site boasts a seamless and visually appealing interface. The design, crafted in Figma, incorporates engaging animations and mockups with Jitter, Framer Motion, GSAP, and Lottie files. Scroll effects, driven by the Intersection Observer API, add a dynamic touch to the user experience.Delve into the about section to learn about my academic journey and college life. The project section details the technologies used in my various endeavors, providing insights into my technical expertise. Additionally, a contact form, powered by Nodemailer, facilitates direct communication, ensuring a straightforward way for users to reach out.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>Next.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Framer Motion</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Lottie</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Figma</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Jitter</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Nodemailer</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Intersection Observer API</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Greensock animation (GSAP)</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>react-confetti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd proj — SyncVerse */}
      <div className='relative mt-8 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/syncverse/syncverse1.png" alt="SyncVerse" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/syncverse/syncverse2.png" alt="SyncVerse" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56'>02.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Sync<span className='text-blue-400'>Verse&nbsp;</span></p>
                <div className='flex gap-3 items-start pt-2'>
                  <a href={'https://sync-verse.vercel.app'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300 text-blue-400 text-sm font-bold border border-blue-400 rounded-lg px-3 py-2'>Live ↗</a>
                  <a href={'https://github.com/AtulRaj37/SyncVerse'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                    <span className="text-4xl"><FaGithub /></span>
                  </a>
                </div>
              </div>
              <p className='mt-12'>
                SyncVerse is a full-stack real-time social media platform that allows users to create shared media rooms and enjoy synchronized video or music playback with friends. The system ensures all participants remain perfectly in sync through a server-authoritative playback architecture and drift-correction algorithm. Users can create or join rooms using invite links, chat live with emoji and GIF reactions, share playlists, and stream their screen using WebRTC. Supports YouTube, SoundCloud, local files, and screen sharing — built on Socket.IO with Redis Pub/Sub for real-time scalability across multiple server instances.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>Next.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>TypeScript</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind CSS</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Framer Motion</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Zustand</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>React Player</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Node.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Express.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Socket.IO</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>WebRTC</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Redis Pub/Sub</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>PostgreSQL</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Prisma ORM</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Giphy API</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Vercel</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Render</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Upstash Redis</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Neon PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={blindcoding} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div>
        </div>
      </div>
      {/* 3rd proj — JournEaze */}
      <div className='relative mt-8 border-0 border-red-500'>
        <div className='relative border-0 border-blue-400'>
          <Image src="/media/projects/journeaze/journeaze1.png" alt="JournEaze" width={300} height={200} className='relative z-30 transition duration-300 ease-in-out -translate-x-1/2 border-0 border-red-500 cursor-pointer left-1/2 lg:hover:opacity-0' />
          <Image src="/media/projects/journeaze/journeaze2.png" alt="JournEaze" width={300} height={200} className='absolute top-0 z-20 -translate-x-1/2 border-0 border-red-500 sm1:hidden lg:block left-1/2'/>
          <div className='absolute top-0 z-40 whitespace-nowrap overflow-hidden font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter border-0 border-red-500 w-fit h-fit p-0 leading-[24rem] mt-56 md:-left-[10rem] lg:left-1/2'>03.</div>
          <Lottie animationData={sketch} className='absolute top-0 mt-64 -rotate-45 md:block sm1:hidden invert grayscale left-1/2'/>
        </div>
        <div className='relative flex mt-0 border-0 border-green-500 sm1:flex-col lg:flex-row'>
          <div className='mt-8 border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <Lottie animationData={optistock} className="overflow-hidden border-0 border-red-500 pt-36 sm1:hidden lg:flex h-fit rounded-3xl invert-0" loop={true}/>
          </div> 
          <div className='bg-cover border-0 border-red-500 sm1:w-full lg:w-1/2'>
            <div className='m-auto mt-16 mb-16 text-white border-0 border-blue-400 sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm'>
              <div className='flex justify-between'>
                <p className='text-5xl font-extrabold underline underline-offset-8'>Journ<span className='text-blue-400'>Eaze</span></p>
                <div className='flex gap-3 items-start pt-2'>
                  <a href={'https://journ-eaze-web.vercel.app'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300 text-blue-400 text-sm font-bold border border-blue-400 rounded-lg px-3 py-2'>Live ↗</a>
                  <a href={'https://github.com/AtulRaj37/JournEaze'} target="_blank" className='hover:scale-[1.2] transition ease-in-out duration-300'>
                    <span className="text-4xl"><FaGithub /></span>
                  </a>
                </div>
              </div>
              <p className='mt-12'>
                Introducing an intelligent, full-stack travel planning platform built with a highly scalable Next.js and NestJS monorepo architecture—enabling seamless, secure user authentication through JWT. This application empowers travelers to effortlessly generate highly detailed, AI-curated day-by-day itineraries while efficiently tracking group expenses and collaborating on interactive destination maps. Leveraging the power of PostgreSQL and a beautifully crafted custom design system, the app ensures streamlined data management and an exceptionally smooth, visually stunning user experience. Experience a sophisticated solution for modern trip coordination, fully equipped with live weather forecasts, native offline PWA access, and one-click PDF exports tailored for flawless adventures.
              </p>
              <p className='mt-10 text-2xl font-extrabold text-blue-400'>Tech stack used :</p>
              <div className='flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2'>
                <p className='p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl'>Next.js</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>NestJS</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>TypeScript</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Tailwind CSS</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>PostgreSQL</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Prisma</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>JWT</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Groq AI</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Docker</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Framer Motion</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>Leaflet Maps</p>
                <p className='p-2 text-white bg-white/20 rounded-xl'>PWA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects