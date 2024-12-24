import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16'>
                <ul className='flex justify-between gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Sign Up</li>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
