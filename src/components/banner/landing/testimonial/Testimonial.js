import React from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-3/4 mx-auto md:mt-12 lg:mt-24">
            <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">What our customer says</h2>
            <Slider {...settings}>
                <div className="w-full mt-12"  data-aos="zoom-in">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="relative flex">
                            <div className="min-h-screenlg:w-1/3"></div>
                            <div className="hidden w-3/4 mx-auto min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

                            <div
                                className="container flex flex-col justify-center w-full min-h-screen  mx-auto lg:absolute lg:inset-x-0">
                                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                                    <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.29084719.1698595152&semt=sph" alt="" />

                                    <div className="mt-8 lg:px-10 lg:mt-0">
                                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                            Help us improve our productivity
                                        </h1>

                                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                            aperiam dolorum, obcaecati corrupti aspernatur a. ”
                                        </p>

                                        <h3 className="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full mt-12"  data-aos="zoom-in">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="relative flex">
                            <div className="min-h-screenlg:w-1/3"></div>
                            <div className="hidden w-3/4 mx-auto min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

                            <div
                                className="container flex flex-col justify-center w-full min-h-screen  mx-auto lg:absolute lg:inset-x-0">
                                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                                    <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.29084719.1698595152&semt=sph"alt="" />

                                    <div className="mt-8 lg:px-10 lg:mt-0">
                                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                            Help us improve our productivity
                                        </h1>

                                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                            aperiam dolorum, obcaecati corrupti aspernatur a. ”
                                        </p>

                                        <h3 className="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full mt-12"  data-aos="zoom-in">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="relative flex">
                            <div className="min-h-screenlg:w-1/3"></div>
                            <div className="hidden w-3/4 mx-auto min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

                            <div
                                className="container flex flex-col justify-center w-full min-h-screen  mx-auto lg:absolute lg:inset-x-0">
                                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                                    <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.29084719.1698595152&semt=sph" alt="" />

                                    <div className="mt-8 lg:px-10 lg:mt-0">
                                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                            Help us improve our productivity
                                        </h1>

                                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                            aperiam dolorum, obcaecati corrupti aspernatur a. ”
                                        </p>

                                        <h3 className="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Slider>
        </div>
    );
};

export default Testimonial;