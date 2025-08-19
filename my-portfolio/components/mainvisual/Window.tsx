"use client"; 

import { useEffect } from "react"
import { FaRegSquare, FaRegWindowClose } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa6";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";


export default function Window() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.hello span, .name span, .saki span', { opacity: 0 })
    gsap.set('.airplane', { opacity: 0 })

    gsap.from('.cloud1', {
      x: -500,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.main',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from('.cloud2', {
      x: 500,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.main',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    })

    const isMobile = window.innerWidth < 1024

    gsap.delayedCall(1.5, () => {
      if (isMobile) {
        gsap.fromTo(
          '.airplane',
          { x: '100vw', y: '80vh', opacity: 1 , rotate: 20},
          { x: '-60vw', y: '-60vh', duration: 8, ease: 'none' }
        )
      } else {
        gsap.fromTo(
          '.airplane',
          { x: '68vw', y: '68vh', opacity: 1 },
          { x: '-100vw', y: '-100vh', duration: 14, ease: 'none' }
        )
      }
    })

    setTimeout(() => {
      gsap.fromTo(
        '.hello span',
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'bounce.out',
        }
      )
    }, 10000)

    setTimeout(() => {
      gsap.fromTo(
        '.name span',
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'bounce.out',
        }
      )
    }, 13000)

    setTimeout(() => {
      gsap.fromTo(
        '.saki span',
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'bounce.out',
        }
      )
    }, 15000)
  }, [])

  return(
    <div>
      <div className="bg-[#FBE9E9] text-accent flex justify-center w-full ">
        <div className="border-accent border-4 border-solid p-4 mt-4 bg-[#FB9AA3] md:w-[80%] h-[78%] overflow-hidden md:mt-8 w-[90%]">

          {/* メニューバー */}
          <div className="border-4 border-solid w-full h-12 p-2 border-[#03005D]">

            {/* 中身 */}
            <div className="flex justify-end items-center text-center">
              <FaWindowMinimize size={30} 
              color="#03005D"
              className="pt-[1px] mr-2"/>
              <FaRegSquare size={32} color="#03005D" className="mr-2"/>
              <FaRegWindowClose size={32} color="#03005D"/>
            </div>
          </div>
          {/* ウィンドウ */}
          <div className="w-full h-[63vh] border-solid border-4 mt-4 overflow-hidden relative">

            {/* 中身 */}
              <div className="bg-cover w-full h-full z-0 bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: `url('/top/background.png')`
              }}>
              </div>

              {/* Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#03005D] mb-16">

                <div className="main relative text-center">

                  {/* 飛行機 */}
                    <Image
                      src="/top/airplain.png"
                      alt="airplane"
                      width={300}
                      height={200}
                      className="airplane absolute top-[-50%] left-[-60%] lg:top-[-30%] lg:left-[-80%] "
                    />

                  {/* テキスト */}
                  <h1 className="hello">
                    {["H", "E", "L", "L", "O", "!"].map((letter, i) => (
                      <span key={i} className="inline-block mr-2 text-5xl lg:text-6xl font-bold tracking-widest">
                        {letter}
                      </span>
                    ))}
                  </h1>
                  <h2 className="name">
                    <span className="inline-block mt-6 text-4xl lg:text-4xl font-bold tracking-widest">My name is</span>
                  </h2>
                  <h3 className="saki">
                    <span className="inline-block mt-6 text-5xl lg:text-6xl font-bold tracking-widest">SAKI EBINA</span>
                  </h3>
                </div>
              </div>

              <Image
                src="/top/cloud.png"
                alt=""
                width={200}
                height={200}
                className="absolute  md:bottom-[-16%] md:left-[-18%] md:w-[54%] scale-x-[-1] xl:w-[42%] lg:bottom-[-20%] lg:left-[-10%] cloud1 bottom-[-10%] left-[-40%] w-[90%]"
              />
              {/* 雲：下右 */}
              <Image
                src="/top/cloud.png"
                alt=""
                width={200}
                height={200}
                className="absolute md:bottom-[-14%] md:right-[-18%] md:w-[54%] lg:bottom-[-20%] lg:right-[-10%] xl:w-[42%] cloud2 bottom-[-10%] right-[-40%] w-[90%]"
              />
          </div>
        </div>
        
      </div>
    </div>
  )
}