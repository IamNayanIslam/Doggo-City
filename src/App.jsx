

const App = () => {
  return (
    <>
      <nav className="bg-indigo-800">
        <div className="flex justify-between p-4 max-w-screen-lg mx-auto">
        <div className="left flex items-center space-x-20">
          <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" width="50" alt="Logo" />
          <ul className="flex space-x-8 items-center">
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition duration-300 ease">Home</li>
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition duration-300 ease">About</li>
          </ul>
        </div>
        <div className="right flex items-center">
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition duration-300 ease">Log In</li>
            <li className="cursor-pointer text-white hover:text-yellow-700 bg-yellow-400 hover:bg-yellow-300 py-2 px-4 rounded transition duration-300 ease">Sign Up</li>
          </ul>
        </div>
        </div>
      </nav>

    {/*  Hero Section ------------------------------------------------------------------------- */}

      <div className="hero-section min-h-[400px] bg-indigo-600">

         <div className="max-w-screen-lg mx-auto md:flex lg:flex items-center justify-between py-20 px-10 text-indigo-100">

          {/*  Hero Section left------------------------------------------------------------------------- */}
         <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="md:text-4xl lg:text-6xl text-white mb-6">Welcome to Doggo City!</h2>
          <p className="mb-6">There is never a sad day here!</p>
          <button className="inline-block py-3 px-6 text-lg bg-gray-400 hover:bg-gray-300 text-gray-800 rounded mr-2 mb-4 md:mb-0 lg:mb-0">Learn More</button>
          <button className="inline-block py-3 px-6 text-lg bg-orange-400 hover:bg-orange-300 text-orange-800 rounded">Get Started</button>
         </div>

         {/*  Hero Section right------------------------------------------------------------------------- */}
         <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Happiest Doggo" className="w-full rounded shadow-2xl"/>
         </div>
         </div>
      </div>

      {/* ----------------------------------------Features----------------------------------------*/}
      <div className="bg-indigo-800 text-indigo-200">
      <div className="max-w-screen-lg mx-auto md:flex lg:flex space-x-2 py-16 px-10 text-center">
        <div className="mb-4 md:mb-0 lg:mb-0">
          <img src="https://images.unsplash.com/photo-1586179253019-ac8a2522535f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" alt="" className="w-full mr-2 mb-4 rounded border-solid border-2 border-indigo-400"/>
          <p>Cuddles!</p>
        </div>
        <div className="mb-4 md:mb-0 lg:mb-0">
          <img src="https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="" className="w-full mr-2 mb-4 rounded border-solid border-2 border-indigo-400 md:mt-8 lg:mt-8"/>
          <p>Smiles!</p>
        </div>
        <div className="mb-4 md:mb-0 lg:mb-0">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" className="w-full mr-2 mb-4 rounded border-solid border-2 border-indigo-400"/>
          <p>Games!</p>
        </div>
        <div className="mb-4 md:mb-0 lg:mb-0">
          <img src="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="w-full mr-2 mb-4 rounded border-solid border-2 border-indigo-400 md:mt-8 lg:mt-8"/>
          <p>Swims!</p>
        </div>
      </div>
      </div>

{/* ----------------------------------------Footer + Newsletter----------------------------------------*/}

      <div className="bg-indigo-900">
        <div className="p-10 max-2-screen-lg mx-auto text-indigo-400 md:flex lg:flex justify-between items-center">

          {/* ----------------------------------------Footer + Newsletter left----------------------------------------*/}
          <div className="md:w-1/2">
            <h3 className="text-lg mb-2">Join the Newsletter</h3>
            <form action="" className="flex">
              <input type="email" placeholder="youremail@example.com" className="w-full rounded-l py-3 px-4 outline-none focus:bg-indigo-200" />
              <button className="bg-red-300 text-red-800 rounded-r px-4">Join</button>
            </form>
          </div>

          {/* ----------------------------------------Footer + Newsletter right----------------------------------------*/} 


          <div className="text-center mt-5 md:mt-0 lg:mt-0">
            Copyright &copy; Doggos 2024 - infinity
          </div>
        </div>
      </div>
    </>
  )
}

export default App

