import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTodoContext } from '../TodoContext'; 


export default function Header () {
    const {handleColorChange} = useTodoContext();

    return(

        <div className='container'>
        <div className='row bg-white mt-5 p-1'>
        <div className='col text-start my-auto'>
        <h3>Note-Hack</h3>
        </div>
        <div className="button-container col-auto p-4">
        <button className='rounded-5 gradient1 border-0' onClick={() => handleColorChange('gradient1')}></button>
        <button className='rounded-5 gradient2 border-0' onClick={() => handleColorChange('gradient2')}></button>
        <button className='rounded-5 gradient3 border-0' onClick={() => handleColorChange('gradient3')}></button>
        <button className='rounded-5 gradient4 border-0' onClick={() => handleColorChange('gradient4')}></button>
      </div>
        </div>
        </div>

    )
}