"use client";
import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroSection() {
    return (
        <>
            <HeroHighlight >
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    Passionate about Code.<br></br>Driven by Creativity.<br></br>Hi! I am
                    {" "}
                    <Highlight className="text-black dark:text-white">
                        Suket Kamboj
                    </Highlight>
                </motion.h1>
                <div className='flex flex-col justify-center items-center mt-4'>
                <div><p className="text-lg px-4 md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto mt-4">
                  Aspiring Software Engineer based in India, with a passion for building innovative solutions and a knack for problem-solving.
                </p></div>
                <div><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                    <a href="https://drive.google.com/file/d/15uDkPsca4tweCQIoH0sC-9IDhT3RTGG0/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </button>
                </div>
                </div>
              
            </HeroHighlight>
        </>
    );
}
