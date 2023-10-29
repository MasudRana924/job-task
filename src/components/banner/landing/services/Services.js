import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Services = () => {
  // You can replace this data with your actual service data
  const servicesData = [
    {
      title: 'Web Develop',
      description: 'We make web app for you',
      img:"https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg",
    },
    {
      title: 'App Develop',
      description: 'We make mobile app wth React Native and Flutter for you',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQVfYo5iUTKVRIBv8BnPUN7n3XFAwmQAN9nwV6PE-6Sx1cYRyRVBQAqzxewgXlsb3sHA&usqp=CAU"
    },
    {
      title: 'Productive Domain Services ',
      description: 'We will make software for you',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBWoqmTNMBhaXLR1pZv31VLrDMK5Id8LrLpGAg_B0rLytNr1NFoPe4Hhns1cFvTDLlo0&usqp=CAU"
    },
  ];

  return (
    <div className="container mx-auto mt-8 md:mt-12 lg:mt-28">
      <h2 className="text-2xl font-semibold mb-4 lg:text-3xl">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8" >
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4" data-aos="flip-up">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
            <img src={service.img} alt="" className="w-full max-h-64 mt-12"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;