import React from 'react'
import { CheckCircle } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import {checklistItems} from '../constants/index'

const Workflow = () => {
  return (
    <>
    
    <div className="workflow flex flex-warp justify-center">
        <div className="p-2 w-full lg:w-1/2 md:flex justify-evenly items-center  gap-32 ">
            <img src={codeImg} alt="a" />
            <div className="info flex flex-col">
                <ul>{checklistItems.map((item,index) =>(
                    <>
                    <li key={index} className='mb-10'><CheckCircle/>{item.title}</li>
                    </>
                ))}</ul>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Workflow