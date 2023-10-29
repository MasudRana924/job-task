import React from 'react';

const Work = () => {
    const servicesData = [
        {
            title: 'Inventor Management Software ',
            img: "https://odoocdn.com/openerp_website/static/src/img/2018/inventory/inventory_screenshot_01.gif",
        },
        {
            title: 'Booking App',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTcpOTuQhbJS7S0Wk5T8z85ekeWZoOIEVTsqZoO5oYtF3-t0hTA5wXXWY4xM91AfvZjo&usqp=CAU"
        },
        {
            title: 'Online Movie Ticket Booking App',
            description: 'We will make software for you',
            img: "https://www.smartprix.com/bytes/wp-content/uploads/2023/02/movie-ticketing-1024x768-photoutils.com_.jpg"
        },
    ];
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">What we do Now</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    
                    {servicesData.map((service, index) => (
                        <div key={index} class="lg:flex border p-4">
                            <img src={service.img} alt="" class="object-cover w-full h-56 rounded-lg lg:w-64" />
                            <div class="flex flex-col justify-between py-6 lg:mx-6">
                                {service.title}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Work;