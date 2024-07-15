import React from "react";

const Access = () => {
    return (
        <div className=" flex flex-col mt-40 lg:items-center">
            <div className=" m-10 p-5 text-center lg:w-1/2">
                <h3  className="text-darkGrayishBlue text-4xl font-bold">Access Clipboard Anywhere</h3>
                <h4 className=" text-grayishBlue text-2xl">Whether you're on the go or on your computer you can access all your 
                    clipboard snippets in a few simple clicks.
                </h4>
            </div>

            <div className=" flex flex-col items-center justify-center">
                <img className=" w-96 lg:w-fit" src="image-devices.png" alt=" devices" />
            </div>

        </div>
    )
};

export default Access