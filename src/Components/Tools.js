import React from "react";

const Tools = () => {
    return(
        <div>
            <div className=" mt-32">
                <h2 className="text-darkGrayishBlue text-4xl font-bold">Supercharge your Workflow</h2>
                <p className="  text-grayishBlue text-2xl">We've got the tools to boost your produuctivity.</p>
            </div>
            
            <div className=" flex flex-col mt-28 m-16 lg:flex-row lg:gap-3">
                <div className=" flex flex-col justify-center items-center"> 
                    <img className=" w-20 lg:w-14" src="icon-blacklist.svg" alt=" icon-blacklist" />
                    <h3 className="text-darkGrayishBlue text-4xl font-bold mt-16 lg:text-3xl">Create Blacklists</h3>
                    <p className="  text-grayishBlue text-2xl mt-4 lg:text-xl">Ensure sensitive information never makes it way to your clipboard
                        by ecluding certain sources.
                    </p>

                </div>

                <div className=" flex flex-col justify-center items-center mt-20 lg:mt-0"> 
                    <img className=" w-20 lg:w-14" src="icon-text.svg" alt=" icon-text" />
                    <h3 className="text-darkGrayishBlue text-4xl font-bold mt-16 lg:text-3xl ">Plain text snippets</h3>
                    <p className=" text-grayishBlue text-2xl mt-4 lg:text-xl"> Remove unwanted formatting from copied text for a consistent look.
                    </p>

                </div>

                <div className=" flex flex-col justify-center items-center"> 
                    <img className=" w-20 lg:w-14" src="icon-preview.svg" alt=" icon-preview" />
                    <h3 className="text-darkGrayishBlue text-4xl font-bold mt-16 lg:text-3xl">Sneak Preview</h3>
                    <p className="  text-grayishBlue text-2xl mt-4 lg:text-xl">  Quick preview of all snippets on your clipboard for easy access.
                    </p>

                </div>

            </div>

            <div className=" flex flex-col justify-center items-center gap-24 mb-20 lg:flex-row lg: mt-44">
                <img className=" w-40" src=" logo-google.png" alt=" google-logo" />
                <img className=" w-40" src=" logo-ibm.png" alt=" ibm-logo" />
                <img className=" w-40" src=" logo-microsoft.png" alt=" microsoft-logo" />
                <img className=" w-40" src=" logo-hp.png" alt=" hp-logo" />
                <img className=" w-40" src=" logo-vector-graphics.png" alt="vector-logo" />

            </div>

            <div className=" flex flex-col justify-center items-center  mt-52 lg:justify-center lg:items-center">
            <div className=" lg: w-1/2">
                <h3 className="text-darkGrayishBlue text-4xl font-bold mb-4">Clipboard for iOS and Mac OS</h3>
                <p className="  text-grayishBlue text-2xl mb-14">Available for free on the app store. Download for Mac or iOS,
                    sycn to iCloud and you're ready to start adding to your clipboard.
                </p>
            </div>
                
                <div className=" flex flex-col gap-4 items-center lg:flex-row mb-52">
                    <button className=" bg-strongCyan rounded-full w-96 p-4 text-white text-2xl lg:w-80">Download for iOS</button>
                    <button className=" bg-lightBlue w-96 rounded-full p-4 text-white text-2xl lg:w-80">Download for Mac</button>
                </div>
            </div>



        </div>
    )
};
export default Tools