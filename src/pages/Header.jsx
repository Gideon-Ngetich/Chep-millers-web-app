import React from 'react'

const Header = () => {
  return (
    <header class="flex h-16 justify-between bg-green-500">
      <div>
        <img src="https://w7.pngwing.com/pngs/554/868/png-transparent-logo-sampling-sound-synthesizers-logo-samples-blue-text-label-thumbnail.png" alt="logo" class="w-28 m-6" />
      </div>
      <div class="flex justify-between">
        <span class="text-black-800 m-4 text-base font-medium">Username</span>
        <span>
            <img src="https://via.placeholder.com/150" alt="logo" class="w-16 rounded-full" />
        </span>
      </div>
    </header>
  )
}

export default Header