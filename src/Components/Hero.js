import React from "react";

const Hero = () => {
    return(
        <div className=" flex flex-col justify-center items-center p-6  lg:justify-center lg:items-center">
            <img className=" mt-36 w-40" src="logo.svg" />
            <div>
                <h2 className=" text-darkGrayishBlue text-5xl font-bold text-center mt-20">A history of  everything you copy. </h2>
                <h4 className=" text-grayishBlue text-center text-2xl mt-8">Clipboard allows to track and organize evrything you copy.Instantly <br />
                    access your clipboard on all your devices
                </h4>
            </div>
            
            < div className=" flex flex-col gap-5 mt-12 lg:flex-row">
                <button className=" bg-strongCyan rounded-full w-96 p-4 text-white text-2xl">Download for iOS</button>
                <button className=" bg-lightBlue w-96 rounded-full p-4 text-white text-2xl">Download for Mac</button>

            </div>

            <div className=" mt-56">
                <h2 className=" text-darkGrayishBlue text-5xl font-bold mb-6"> Keep track of your snippets</h2>
                <h4 className=" text-grayishBlue text-2xl">Clipboard instantly stores item you copy in the cloud meaning you
                   <br /> can access your snippets immediately on all your devices.
                   <br /> Our Mac and iOS apps will help you organize evrything.
                </h4>
            </div>

        </div>

    )
};

export default Hero