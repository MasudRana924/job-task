import React from 'react';
import { FaFacebookF ,FaGithub,FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
    <div className="container p-6 w-3/4 mx-auto ">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                   

                    <p className="text-start max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                    <div className="flex mt-6 -mx-2">
                        <Link to=""
                            >
                            <FaFacebookF className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit"></FaFacebookF>
                        </Link>
                    
                        <Link to=""
                           >
                           <FaGithub  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook"></FaGithub>
                        </Link>
                    
                        <Link to=""
                            >
                            <FaYoutube className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github"></FaYoutube>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">World</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Country</a>
                       
                    </div>
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">World</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Country</a>
                       
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Technology</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AI</a>
                      
                    </div>


                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+123456789</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">abc@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
    </div>
</footer>
    );
};

export default Footer;