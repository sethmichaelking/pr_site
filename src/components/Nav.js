import React from 'react'
import { IoIosPulse } from "react-icons/io";
import {Link} from 'react-router-dom'
function Nav() {
    function goToContactForm(e){
        e.preventDefault();
        window.location.href = 'https://5t4cavas5zs.typeform.com/to/U4QKeEKe'
    }
    function goToFAQ(){
        document.getElementById('FAQ').scrollIntoView() 
    }
  return (
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
            <IoIosPulse class='text=white mr-2'/>
            <span class="font-semibold text-xl tracking-tight">PulsePR</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <a 
            onClick={()=> goToFAQ()}
            href="#responsive-header" class="inline-block text-lg px-4 py-2 leading-none rounded text-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                FAQ
            </a>
            <a href="/about" class="inline-block text-lg px-4 py-2 leading-none rounded text-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                About Us
            </a>
            </div>
            <div>
            <a href="#" 
            class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Contact Us</a>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default Nav