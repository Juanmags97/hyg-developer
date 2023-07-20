import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {


    return (
    <div className='fondo-header justify-content-center '>
        <div className='row' >   

            <img src={logo} alt="" srcset="" />
            <h1 className='text-center text-light' ></h1>
            <div ame='d-flex justify-content-center'>
        
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-ft-tab" data-bs-toggle="pill" data-bs-target="#pills-ft" type="button" role="tab" aria-controls="pills-ft" aria-selected="false">Forma de trabajo</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-lp-tab" data-bs-toggle="pill" data-bs-target="#pills-lp" type="button" role="tab" aria-controls="pills-lp" aria-selected="false">Landing Page</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">E-Comerce</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-lp-tab" data-bs-toggle="pill" data-bs-target="#pills-lp" type="button" role="tab" aria-controls="pills-lp" aria-selected="false">Web Corporativa</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-lp-tab" data-bs-toggle="pill" data-bs-target="#pills-lp" type="button" role="tab" aria-controls="pills-lp" aria-selected="false">Contacto</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-lp-tab" data-bs-toggle="pill" data-bs-target="#pills-lp" type="button" role="tab" aria-controls="pills-lp" aria-selected="false">Landing Page</button>
                    </li>
        
                </ul>
                <div className="tab-content" id="pills-tabContent">
                </div>
        
            </div>
        </div>
    </div>
    )}