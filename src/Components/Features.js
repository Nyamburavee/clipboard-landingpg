import React from "react";

const Features = () =>{
    return (
        <div className=" flex flex-col p-6 lg:flex-row lg:gap-20 ">
            <div className=" mt-16 mb-10"> 
                <img src=" image-computer.png" alt=" computer"  />
            </div>
            
            <div className=" text-center lg:flex lg:flex-col lg:justify-center lg:items-start
            lg:text-left lg:w-96">
                <h3 className=" text-darkGrayishBlue text-4xl font-bold mb-4">Quick Search</h3>
                <h5 className=" text-grayishBlue text-2xl mb-12">Easily search your snippets by content, categogry, web address, application
                    and more </h5>
                
                <h3  className="text-darkGrayishBlue text-4xl font-bold mb-4">iCloud Sync</h3>
                <h5 className=" text-grayishBlue text-2xl mb-12 text-center">Instantly saves and syncs snippets across all your devices. </h5>

                <h3 className="text-darkGrayishBlue text-4xl font-bold mb-4">Complete History</h3>
                <h5 className=" text-grayishBlue text-2xl mb-12">Retrieve any snippets from the first moment you started using the app. </h5>

            </div>

            

        </div>
    )
};

export default Features