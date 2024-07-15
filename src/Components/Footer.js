import React from "react";

const Footer = () => {
    return(
        <div className=" flex flex-col  bg-gray-200 lg:flex-row lg:px-16">
            <div className=" flex flex-col items-center gap-16 lg:gap-20 lg:flex-row lg:mr-auto lg:items-start
            lg:mt-14 ">
                <img className=" mt-28 lg:mt-0 lg:w-14" src=" logo.svg" alt="logo" />
                <div className=" text-grayishBlue font-semibold lg:text-left">
                    <h3 className=" mb-16 lg:mb-0 text-3xl lg:text-2xl">FAQS</h3>
                    <h3 className=" lg:mt-6 lg:text-2xl">Contact Us</h3>
                </div>
                <div className=" text-grayishBlue text-3xl font-semibold lg:text-left">
                    <h3 className=" mb-16 text-3xl lg:text-2xl lg:mb-0 ">Privacy Policy</h3>
                    <h3 className=" text-3xl lg:text-2xl lg:mt-6">Press Kit</h3>
                </div>
                <div className="flex flex-col text-grayishBlue text-3xl font-semibold lg:flex lg:flex-col lg:items-start lg:justify-start">
                    <h3 className=" text-3xl lg:text-2xl">Install Guide</h3>
                </div>
            </div>

            <div className=" flex flex-row items-center justify-center mt-28 gap-20 pb-28">
                <img className=" w-14 lg:w-10" src=" icon-facebook.svg" alt="facebook-icon" />
                <img className=" w-14 lg:w-10" src=" icon-instagram.svg" alt="instagram-icon" />
                <img className=" w-14 lg:w-10" src=" icon-twitter.svg" alt="twitter-icon" />

            </div>
            
        </div>
    )
};
export default Footer