import React from 'react'

function Howitworks() {
    function goToCalendly(e){
        e.preventDefault();
        window.location.href = 'https://calendly.com/sethmichaelking'
    }
  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How our service works</h2>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div style={{
                            textAlign: '-webkit-center'
                    }}>
                    <div class="m-3 flex h-10 w-10 items-center text-white justify-center rounded-full bg-black">
                        <p> 1</p>
                    </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white"> Research </h3>
                        <p class="text-gray-500 dark:text-gray-400">We learn about your background and pitch your expertise and story to jouranlists in the media.</p>
                    </div>
                    <div style={{
                            textAlign: '-webkit-center'
                    }}>
                         <div class="m-3 flex h-10 w-10 items-center text-white justify-center rounded-full bg-black">
                        <p> 2</p>
                    </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Outreach</h3>
                        <p class="text-gray-500 dark:text-gray-400">We identify oppurtunities on your behalf and engage with journalists and editors on your behalf.</p>
                    </div>
                    <div style={{
                            textAlign: '-webkit-center'
                    }}>
                    <div class="m-3 flex h-10 w-10 items-center text-white justify-center rounded-full bg-black">
                        <p> 3</p>
                    </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Results</h3>
                        <p class="text-gray-500 dark:text-gray-400">Get backlinks from trusted and respected publications in the form on quotes, interviews, breaking news and more. Each month we'll send you a report of backlinks in progress.  </p>
                    </div>
                </div>
            </div>
            <button class='rounded-md border' onClick={(e)=> goToCalendly(e)}>
                    <a href="" class="inline-flex items-center justify-center px-5 py-3 mr-3 bg-white text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    <svg class="mr-5 w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                        Schedule Call
                    </a>
                    </button>
        </section>
    </div>
  )
}

export default Howitworks