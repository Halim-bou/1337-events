import React from 'react';
import logo from '../../assets/logo.png';
import Header from '../Navbar';

export default function Login({isloginPage = 0}) {
	return (
		<div className="py-52">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
		<div
  			className="hidden lg:block lg:w-1/2 bg-cover"
  			style={{
    		backgroundImage: "url('https://images-ext-1.discordapp.net/external/_9OvKahUbN0RN_5nVblsPKsvN7k7azG96lxUSi4jvDw/https/i.imgur.com/vFaC7MB.jpg?format=webp&width=832&height=468')"
  			}}
			>
		</div>
        <div className="w-full p-8 lg:w-1/2">
			<a href="/" className='flex justify-center'>
    			<img
      				src={logo}
      				alt="1337-events Logo"
      				className="w-36 h-18"
    			/>
			</a>
            { !isloginPage ? (
            <>
                <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">login with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
            </>
            ) : (
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">Sign up with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
            )}
            {isloginPage === 1 && (
                <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            )}
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            {isloginPage === 1 ? (
            <>
            <div className="mt-8">
                <a href="/">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                </a>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="/Login" className="text-xs text-gray-500 uppercase">or Login</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
            </>
            ) : (
            <>
            <div className="mt-8">
                <a href='/'>
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                </a>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="/Register" className="text-xs text-gray-500 uppercase">or sign up</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
            </>
            )}
        </div>
    </div>
</div>
	);
}
