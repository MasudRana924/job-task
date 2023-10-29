import React from 'react';
import bannerImgae from '../../assets/bannner.webp'
const Banner = () => {
    return (
        <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best software compan to learn knowledge</h1>
                        <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full lg:max-w-full" src={bannerImgae} alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;