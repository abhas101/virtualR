import React from "react";
import {features} from '../constants/index'

const FeatureSection = () => {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase ">
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">Easily build you code</h2>
        </div>
        {/* desc */}
        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item,index)=>(
            <>
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
                <div className="flex mx-6 w-10 h-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {item.icon}

                </div>
            </div>

            <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>

            <p>{item.description}</p>
            
            </div>
            </>
        ))}

        </div>
      </div>
    </>
  );
};

export default FeatureSection;
