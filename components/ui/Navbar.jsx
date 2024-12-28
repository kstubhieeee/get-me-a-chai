'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-white text-2xl font-bold">Logo</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavItem href="/">Home</NavItem>
                            <NavItem href="/about">About</NavItem>
                            <NavItem href="/projects">Projects</NavItem>
                            <NavItem href="/signup">Sign Up</NavItem>
                            <NavItem href="/login">Login</NavItem>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavItem href="/" mobile>Home</NavItem>
                        <NavItem href="/about" mobile>About</NavItem>
                        <NavItem href="/projects" mobile>Projects</NavItem>
                        <NavItem href="/signup" mobile>Sign Up</NavItem>
                        <NavItem href="/login" mobile>Login</NavItem>
                    </div>
                </div>
            )}
        </nav>
    )
}

const NavItem = ({ href, children, mobile = false }) => {
    const baseClasses = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
    const mobileClasses = mobile ? "block" : "hidden md:block"

    return (
        <Link href={href} className={`${baseClasses} ${mobileClasses}`}>
            {children}
        </Link>
    )
}

export default Navbar

