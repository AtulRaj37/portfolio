import Image from 'next/image';
import React from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import Marquee from "react-fast-marquee";
import { Skills, SkillCategories } from '../../public/data/Skills'

const SkillsCarousel = () => {
    const { scrollYProgress } = useScroll()
    const toRight = useTransform(scrollYProgress,[0,1],[-500,100])
    const toLeft = useTransform(scrollYProgress,[0,1],[10,-1000]) 
  return (
    <div>
      <motion.div 
            className="font-extrabold tracking-tighter text-white border-0 border-red-500 font-mine2 md:text-10xl sm1:text-8xl"
            style={{x:toRight}}
          >
            <span className='font-mine2'>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
              <span>LANGUAGES</span>
              <span className="font-stencil-scrollnew">LANGUAGES</span>
            </span>
          </motion.div>      
          <motion.div 
            style={{x:toLeft}}
            className="tracking-tight text-white border-0 border-red-500 sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
          >
            <span className='font-mine2'>
              <span>FRAMEWORKS</span>
              <span className="font-stencil-scrollnew">FRAMEWORKS</span>
              <span>FRAMEWORKS</span>
              <span className="font-stencil-scrollnew">FRAMEWORKS</span>
              <span>FRAMEWORKS</span>
              <span className="font-stencil-scrollnew">FRAMEWORKS</span>
              <span>FRAMEWORKS</span>
              <span className="font-stencil-scrollnew">FRAMEWORKS</span>
              <span>FRAMEWORKS</span>
              <span className="font-stencil-scrollnew">FRAMEWORKS</span>
              <span>FRAMEWORKS</span>
            </span>
          </motion.div>
          <div className="mt-4 text-xl font-bold tracking-tighter text-center text-blue-400">Technical Proficiency</div>
          <div className="flex w-4/5 m-auto overflow-hidden border-0 border-red-500 mask-edges flex-nowrap">
            <Marquee speed={6}>
              <div className="flex mt-20 space-x-20 animate-marquee">
                {
                  Skills.map((skill)=>{
                    return(
                      <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                        <Image src={skill.url} alt={skill.name} width={150} height={150} className="p-2 invert-75 grayscale rounded-0 aspect-square"/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
                {
                  Skills.map((skill)=>{
                    return(
                      <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                        <Image src={skill.url} alt={skill.name} width={150} height={150} className="p-2 invert-75 grayscale rounded-0 aspect-square"/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
                {
                  Skills.map((skill)=>{
                    return(
                      <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                        <Image src={skill.url} alt={skill.name} width={150} height={150} className="p-2 invert-75 grayscale rounded-0 aspect-square"/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex pl-20 mt-20 space-x-20 animate-marquee">
                {
                  Skills.map((skill)=>{
                    return(
                      <div key={skill.id} className="flex flex-col space-x-8 border-0 border-red-500">
                        <Image src={skill.url} alt={skill.name} width={150} height={150} className="p-2 invert-75 grayscale rounded-0 aspect-square"/>
                      </div>
                    )
                  })
                }
              </div>
            </Marquee>
          </div> 

          {/* Categorized Skills Grid */}
          <div className="w-4/5 m-auto mt-20 border-0 border-red-500">
            {SkillCategories.map((group) => (
              <div key={group.category} className="mb-14">
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-blue-400 text-lg">&#x276F;</span>
                  <h3 className="text-white font-bold text-lg tracking-wide">{group.category}</h3>
                  <div className="flex-1 h-px bg-white/10 ml-2"></div>
                </div>
                {/* Skills row */}
                <div className="flex flex-wrap gap-6">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 group cursor-default"
                    >
                      {skill.url ? (
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/60 group-hover:bg-blue-400/10 transition-all duration-200 p-2">
                          <img src={skill.url} alt={skill.name} className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/60 group-hover:bg-blue-400/10 transition-all duration-200 text-2xl font-bold text-white">
                          {skill.icon}
                        </div>
                      )}
                      <span className="text-white/60 text-xs text-center group-hover:text-white transition-colors duration-200 w-16 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default SkillsCarousel
