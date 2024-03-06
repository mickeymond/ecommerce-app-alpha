
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Avatar from '../../assets/images/profileAvatar.svg';


export default function Navbar() {
    return (
        <>
            <p>More code</p>
            <div className=" grid grid-rows-1  bg-gray-300 p-4">
                <div className="flex  justify-between">
                    <div className="text-5xl font-extrabold ...">
                        <span>
                            LOGO
                        </span>
                    </div>

                    <div className="relative">
                        <form action="">
                            <input
                                dir="ltl"
                                type='search'
                                id='search'
                                placeholder="Search Product by name or category"
                                className="border-none relative  rounded-s-lg w-96 px-4 py-2"
                            />
                            <button
                                dir="rtl"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-s-lg font-semibold text-white px-4 py-2 fixed"
                                onClick='search()'
                            >
                                <MagnifyingGlassIcon className="h-6 w-5 text-white relative" />
                            </button>

                        </form>
                    </div>
                    <div className=" flex space-x-8 px-3 py-2">
                        <div>
                            <img src={Avatar} className="h-7 w-7" alt="Profile Avatar" />
                        </div>

                        <div className="px-5 center">
                            <ShoppingCartIcon className="h-7 w-7 text-blue-500" />
                        </div>
                        <div className="rounded-lg text-black font-large hover:bg-cyan-800 hover:text-white width-full">
                            Help
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}