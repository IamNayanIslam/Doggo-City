

const App = () => {
  return (
    <>
      <nav className="bg-indigo-800 flex justify-between p-4">
        <div className="left flex items-center space-x-20">
          <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" width="50" alt="Logo" />
          <ul className="flex space-x-8 items-center">
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition-all duration-300 ease">Home</li>
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition-all duration-300 ease">About</li>
          </ul>
        </div>
        <div className="right flex items-center">
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer text-indigo-200 hover:text-yellow-400 transition-all duration-300 ease">Log In</li>
            <li className="cursor-pointer text-white hover:text-yellow-700 bg-yellow-400 py-2 px-4 rounded transition-all duration-300 ease">Sign Up</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App

