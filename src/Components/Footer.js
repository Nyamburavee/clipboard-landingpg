import React from "react";

const Footer = () => {
    return(
        <div className=" flex flex-col  bg-gray-200 lg:flex-row lg:px-16">
            <div className=" flex flex-col items-center gap-16 lg:gap-20 lg:flex-row lg:mr-auto lg:items-start
            lg:mt-14 ">
                <img className=" mt-28 lg:mt-0 lg:w-14" src=" logo.svg" alt="logo" />
                <div className=" text-grayishBlue text-center font-semibold lg:text-left">
                    <h3 className=" lg:mb-0 text-3xl lg:text-2xl hover:text-strongCyan cursor-pointer">FAQS</h3>
                    <h3 className=" mt-16 text-3xl lg:mt-6 lg:text-2xl hover:text-strongCyan cursor-pointer">Contact Us</h3>
                </div>
                <div className=" text-grayishBlue text-center text-3xl font-semibold lg:text-left">
                    <h3 className=" mb-16 text-3xl lg:text-2xl lg:mb-0 hover:text-strongCyan cursor-pointer ">Privacy Policy</h3>
                    <h3 className=" text-3xl lg:text-2xl lg:mt-6 hover:text-strongCyan cursor-pointer">Press Kit</h3>
                </div>
                <div className=" text-grayishBlue text-center text-3xl font-semibold">
                    <h3 className=" text-3xl lg:text-2xl hover:text-strongCyan cursor-pointer">Install Guide</h3>
                </div>
            </div>

            <div className=" flex flex-row items-center justify-center mt-28 gap-20 pb-28">
                
                <a  href="https://www.facebook.com/" className="icon-hover" > 
                    <img className="  w-14 lg:w-10" src=" icon-facebook.svg" alt="facebook-icon" />
                </a>
                <a href="https://www.instagram.com/" className="icon-hover">
                    <img className=" w-14 lg:w-10" src=" icon-instagram.svg" alt="instagram-icon" />
                </a>
                <a href="http://www.twitter.com/" className=" icon-hover">
                    <img className=" w-14 lg:w-10" src=" icon-twitter.svg" alt="twitter-icon" />
                </a>
            </div>
            
        </div>
    )
};
export default Footer