import React from 'react';
import Lottie from "lottie-react";
import preloaderAnimation from '../../assets/prell.json';
const Preloader = () => {
    return (
        <div className="flex flex-1 items-center justify-center ">
            <Lottie animationData={preloaderAnimation} className="mt-72 h-40 w-40  text-blue-500"></Lottie>
        </div>
    );
};

export default Preloader;