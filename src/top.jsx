import React from 'react'
import "./top.css"
import {GrNotes} from 'react-icons/gr';

export default function Top() {
    
  return (
    <div>
        <div className=" back1 ">
            <div className="max-w-[1240px]  py-[12px]  items-center flex md:justify-between mx-auto">
                <div className='border1'   >
                    <GrNotes size={"60px"}/>
                    <h1>Notes-Maker</h1>
                
            </div>
            </div>
        </div>
        
    </div>
    
  )
}

