import React from 'react';

const Plans = () => {
    return (
        <div class="bg-white dark:bg-gray-900 md:mt-12 lg:mt-28">
    <div class="container px-6 py-8 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Domain Subscription Plan</h1>

        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Yopu can take domain from us .We privide domain hosting with very lowest price
        </p>

        <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Regular</p>

                <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    $10
                </h2>

                <p class="font-medium text-gray-500 dark:text-gray-300">Per Month</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-md hover:bg-violet-500 focus:outline-none focus:bg-violet-500 focus:ring focus:ring-violet-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center bg-violet-600 rounded-lg">
                <p class="font-medium text-gray-200 uppercase">Premium</p>

                <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
                    $40
                </h2>

                <p class="font-medium text-gray-200">Per Annual</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Enterprise</p>

                <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    $100
                </h2>

                <p class="font-medium text-gray-500 dark:text-gray-300">Life time</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-md hover:bg-violet-500 focus:outline-none focus:bg-violet-500 focus:ring focus:ring-violet-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Plans;