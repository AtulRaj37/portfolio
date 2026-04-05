import Link from 'next/link'
import { motion,AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import { Twirl as Hamburger } from 'hamburger-react'

const sliderVariants = {
  initial:{
    scaleY:0,
    opacity:0,
  },
  animate:{
    scaleY:1,
    opacity:1,
    transition:{
      duration:0.2,
      ease:[0.12,0,0.39,0]
    }
  },
  exit:{
    scaleY:0,
    opacity:0,
    transition:{
      delay:1,
      duration:0.5,
      ease:[0.22,1,0.36,1]
    }
  }
}

const Header = ({ isOpen,toggleClose,toggleOpen }) => { 
  
  return (
    <div className=''>
      <div className='fixed z-50 flex justify-between text-white bg-red-400 sm1:hidden md:block'>
        <div className='fixed right-0 flex justify-between mt-12 mr-20 border-0 border-red-500 w-fit'>
          <div className='text-sm border-0 border-blue-500'>
            <div><Link href='#about' className="hover:text-blue-400">About</Link></div>
            <div><Link href='#skills' className="hover:text-blue-400">Skills</Link></div>
            <div><Link href='#projects' className="hover:text-blue-400">Projects</Link></div>
            <div><Link href='#experience' className="hover:text-blue-400">Experience</Link></div>
            <div><Link scroll={false} href='#contact' className="hover:text-blue-400">Contact</Link></div>
          </div>
          <div className='text-sm border-0 border-green-500 ml-28'>
            <div><Link href="/atul updated.pdf" target="_blank" alt="" className="hover:text-blue-400">Resume</Link></div>
            <div><Link href="https://github.com/AtulRaj37" target="_blank" rel="noreferrer" className="hover:text-blue-400">Github</Link></div>
            <div><Link href="https://www.linkedin.com/in/atulraj7" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</Link></div>
          </div>
        </div>
      </div>
      <div className=''>
        <Link href="/" className='fixed z-50 mt-8 text-white border-0 border-red-500 sm1:ml-4 md:ml-16 w-fit group'>
          <div className='flex items-center gap-3'>
            <img src="/icons/icon-96x96.png" alt="logo" className='w-10 h-10 rounded-lg brightness-110 group-hover:brightness-125 transition-all duration-200' />
            <div className='leading-snug'>
              <div className='text-base font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors duration-200'>Atul Raj</div>
              <div className='text-[11px] text-white/60 tracking-widest uppercase'>Full Stack Developer</div>
            </div>
          </div>
        </Link>
        <div className='fixed right-0 z-50 mt-12 mr-2 text-white'>
          <div className="sm1:block md:hidden">
            <div className='p-0 -mt-2 bg-[#fff] border-0 border-red-500 w-fit rounded-4xl'>
              <Hamburger color={'#0D0D0D'} toggled={isOpen} toggle={isOpen ? toggleClose : toggleOpen} size={20} className=''/>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div 
              variants={sliderVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className='origin-top bg-black border-0 border-red-500'
            >
              <Navbar toggleOpen={toggleOpen} toggleClose={toggleClose} isOpen={isOpen} />
            </motion.div>  
          )  
        }
      </AnimatePresence>
    </div>
  )
}

export default Header