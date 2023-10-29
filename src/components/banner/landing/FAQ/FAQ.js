import React from 'react';

const FAQ = () => {
    return (
        <section class="bg-white dark:bg-gray-900 md:mt-12 lg:mt-24">
            <div class="container max-w-4xl px-6 py-10 mx-auto">
                <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">FAQ</h1>

                <div class="mt-12 space-y-8">
                    <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button class="flex items-center justify-between w-full p-8">
                            <h1 class="font-semibold text-gray-700 dark:text-white">How we can help you ? ?</h1>

                            <span class="text-gray-400 bg-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                </svg>
                            </span>
                        </button>

                        <hr class="border-gray-200 dark:border-gray-700" />

                        <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                        </p>
                    </div>

                    <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button class="flex items-center justify-between w-full p-8">
                            <h1 class="font-semibold text-gray-700 dark:text-white">Lorem</h1>

                            <span class="text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                        <button class="flex items-center justify-between w-full p-8">
                            <h1 class="font-semibold text-gray-700 dark:text-white">Lorem</h1>

                            <span class="text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default FAQ;