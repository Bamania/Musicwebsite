import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

export default function Herosection() {
  return (
    <div className='text-xl text-white flex flex-col h-auto md:h-[40rem] 
    w-full rounded-md relative overflow-hidden mx-auto py-10  md:py-0'>
<Spotlight 
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
<div className='text-center z-10 w-full mt-[15%] relative p-4'>
    <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
    <p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Dive into our comprehensive music courses and 
        transform your musical journey today. Wheather you're 
        a beginner or looking to refine your skills,
        join us to unlock your true potential.
    <div className='mt-4'>
        <Link href={"/courses"}>
            <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
        </Link>
        
    </div>
    </p>


</div>
        </div>
  )
}
