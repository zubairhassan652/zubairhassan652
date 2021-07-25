import React from 'react';
import LeftPanal from './left_panal';
import RightArea from './area';
import "./base.css";

export default function Layout(){
    return(
        <div className='full-page'>
        <LeftPanal></LeftPanal>
        <RightArea></RightArea>
        </div>  
    );
}


