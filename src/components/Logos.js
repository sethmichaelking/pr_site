import React from 'react'
import rollingstone from './logos/rollingstonelogo.jpg'
import yahoologo from './logos/yahoologo.png'
import businessinsider from './logos/businesinsiderlogo.jpg'
import bustle from './logos/bdglogo.png'
import nyt from './logos/New_york_times_logo_PNG1.png'
import onethree from './logos/one37.jpg'
import complexnews from './logos/complexnews.jpg'
function Logos() {
  return (
    <div>
        <section class="text-black">
            <div class="mx-auto max-w-screen-xl px-4">
            <h2 class="lg:mb-8 text-3xl font-extrabold animate-fade tracking-tight text-black leading-tight text-center md:text-4xl">Relationships matter. We know <span class='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> how journalists think.</span> </h2>
            <h5 class="mb-8 text-2xl font-extrabold tracking-tight leading-tight text-center text-gray-700 text-black md:text-2xl"> Get featured on</h5>
            {/* <!-- HTML --> */}
            <div class="flex h-20 overflow-hidden space-x-16 mb-10 ">
                <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
                    <img loading="lazy" src={yahoologo} class="max-w-none" alt="Image 1" />
                    <img loading="lazy" src={nyt} class="max-w-none" alt="Image 2" />
                    <img loading="lazy" src={bustle} class="max-w-none" alt="Image 3" />
                    <img loading="lazy" src={businessinsider} class="max-w-none" alt="Image 4" />
                    <img loading="lazy" src={rollingstone} class="max-w-none" alt="Image 5" />
                    <img loading="lazy" src={onethree} class="max-w-none" alt="Image 6" />
                    <img loading="lazy" src={complexnews} class="max-w-none" alt="Image 7" />
                </div>
                <div class="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    <img loading="lazy" src={yahoologo} class="max-w-none" alt="Image 1" />
                    <img loading="lazy" src={nyt} class="max-w-none" alt="Image 2" />
                    <img loading="lazy" src={bustle} class="max-w-none" alt="Image 3" />
                    <img loading="lazy" src={businessinsider} class="max-w-none" alt="Image 4" />
                    <img loading="lazy" src={rollingstone} class="max-w-none" alt="Image 5" />
                    <img loading="lazy" src={onethree} class="max-w-none" alt="Image 6" />
                    <img loading="lazy" src={complexnews} class="max-w-none" alt="Image 7" />
                </div>
            </div>
    </div>
</section>
    </div>
  )
}

export default Logos