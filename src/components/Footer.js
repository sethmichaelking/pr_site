import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm flex text-gray-500 sm:text-center dark:text-gray-400">Made With <p>&hearts;</p> from Boston, MA </span>

                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" class="hover:underline">PulsePR</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer