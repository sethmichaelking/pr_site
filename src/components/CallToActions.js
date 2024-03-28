import React from 'react'

function CallToActions() {
    function goToCalendly(e){
        e.preventDefault();
        window.location.href = 'https://calendly.com/sethmichaelking'
    }
  return (
    <div class='animate-fade'>
        <section class="">
            <div class="bg-gradient-to-r rounded from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="w-full">
                    <div class='w-full flex flex-col items-center justify-between lg:flex-row'>
                        <div class='mb-6 text-center lg:mb-0 lg:mr-16 lg:text-left'>
                            <h2 class="h3 text-3xl font-orbiter mb-2 text-white">Ready to get organic results?</h2>
                            <p class="text-lg text-white opacity-75">Be seen as a thought leader and expert in your industry today.</p>
                        </div>
                        <div>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button 
                        onClick={(e)=> goToCalendly(e)}
                        type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <a class='flex'>
                              <svg class="mr-5 w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                Schedule Call
                            </a>
                        </button>

                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='max-w-screen-xl'>
            <p class='font-thin	'>*The HARO® and Help a Reporter Out® trademarks are owned by Cision US Inc. PulsePR is neither affiliated with nor endorsed by Cision Us Inc.</p>
            </div>
        </section>
    </div>
  )
}

export default CallToActions