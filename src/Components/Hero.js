import React from "react";

const Hero = () => {
    return(
        <div className="flex flex-col justify-center items-center p-6  lg:justify-center lg:items-center">
            <div  className=" flex flex-row items-center justify-center w-full  p-0">
                <img className=" mt-36 w-40" src="logo.svg" />

            </div>
            
            <div>
                <h2 className=" text-darkGrayishBlue text-5xl font-bold text-center mt-20">A history of  everything you copy. </h2>
                <h4 className=" text-grayishBlue text-center text-2xl mt-8">Clipboard allows to track and organize evrything you copy.Instantly <br />
                    access your clipboard on all your devices
                </h4>
            </div>
            
            < div className=" flex flex-col gap-5 mt-12 lg:flex-row">
                <button className=" bg-strongCyan rounded-full w-96 p-4 text-white text-2xl hover:brightness-110 cursor-pointer">Download for iOS</button>
                <button className=" bg-lightBlue w-96 rounded-full p-4 text-white text-2xl hover:brightness-110 cursor-pointer">Download for Mac</button>

            </div>

            <div className=" mt-56 lg:w-1/2">
                <h2 className=" text-darkGrayishBlue  text-5xl font-bold mb-6 text-center"> Keep track of your snippets</h2>
                <h4 className=" text-grayishBlue text-2xl text-center">Clipboard instantly stores item you copy in the cloud meaning you
                   can access your snippets immediately on all your devices.
                    Our Mac and iOS apps will help you organize evrything.
                </h4>
            </div>

        </div>

    )
};

export default Hero