import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
    
  return (
    <>
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to React Weather!</h1>
        <p className="text-lg mb-6 max-w-xl">
          Get started to view weather from all around the world from a free api. 
        </p>
        <button className='bg-blue-600 text-white py-2 px-3 text-xl rounded hover:cursor-pointer' onClick={() => {navigate("/weather")}}>Get started</button>
      </section>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Kruegenn. All rights reserved.
      </footer>
    </main>
    </>
  )
}

export default Home