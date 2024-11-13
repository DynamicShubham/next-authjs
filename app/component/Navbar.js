import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { global } from 'styled-jsx/css'

const Navbar = () => {
    return (
    <>
        <div className=" p-5 bg-gray-950 navbar flex justify-between ">
            <div className="logo">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority/>
            </div>
            <ul className="flex gap-8">
                <Link href="/"><li className='list-none hover:text-lg hover:font-bold '>Home</li></Link>
                <Link href="/about"><li className='list-none hover:text-lg hover:font-bold '>About</li></Link>
                <Link href="/contact"><li className='list-none hover:text-lg hover:font-bold '>Contact</li></Link>
                <Link href="/services"><li className='list-none hover:text-lg hover:font-bold '>Services</li></Link>
                <div className="profilelogo ">
                    <Link  href="/profile">
                        <svg  className = "hover:font-bold transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                            <path d="M14 9H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M14 12.5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <rect x="2" y="3" width="20" height="18" rx="5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M5 16C6.20831 13.4189 10.7122 13.2491 12 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9Z" stroke="currentColor" stroke-width="1.5" />
                        </svg>
                    </Link>
                </div>
            </ul>
        </div>
    </>
    )
}

export default Navbar;