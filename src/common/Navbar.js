import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from "react-icons/rx";


const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
]
const Navbar = () => {

    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className="navbar w-full overflow-hidden">
            <header className="lg:pl-2 lg:pr-2 lg:w-full lg:mx-auto  lg:mr-12 mt-6">
                <nav className="flex items-center justify-between pr-3 lg:py-4 lg:pr-0" aria-label="Global"  >
                    <div className="flex lg:flex-1 ">

                        <Link to="/home" className="text-xl font-bold leading-6 text-gray-900 ml-2 lg:ml-12">Interactive Cares</Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={showMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer mr-3 "
                            />
                        </button>
                    </div>
                    <div class="hidden lg:mr-16 lg:flex lg:gap-x-6 2xl:gap-x-12">

                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-md font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                </nav>
                {/* for small devices */}
                <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 left:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start  ml-16' : 'hidden'}>
                    <div className="flex justify-between">
                        <RxCross1 className="text-md ml-5  mt-6 text-black" onClick={showMenu}></RxCross1>

                    </div>
                    <ul>
                        <li>
                            <Link to="/" className=" text-sm  text-gray-900 px-5    block " onClick={showMenu}>Home</Link>

                        </li>
                        <li>
                            <Link to="/skill" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>
                                Skill
                            </Link>

                        </li>

                        <li>
                            <Link to="/contact" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Contact</Link>

                        </li>
                        <li>
                            <Link to="/projects" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Projects</Link>

                        </li>
                        <li>
                            <Link to="/education" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Education</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="text-sm  text-gray-900 px-5 py-2   block " onClick={showMenu}>Courses</Link>
                        </li>
                    </ul>
                </ul>

            </header>
        </div>
    );
};

export default Navbar;