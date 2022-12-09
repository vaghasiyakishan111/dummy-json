import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';

function Header({onSearchchange}) {
    

   
    return (
        <>
         
            <div className="container">
                <div className="row mt-3">
                    <div className="col-auto d-flex">
                        <h1>ebay</h1>
                        <div className="ms-2 lh-1" >
                            <p className="mb-0 mt-3 " >shop by</p>
                            <p>category</p>
                        </div>
                    </div>

                    <div className="col-auto">
                        <input type="text"  placeholder="search for anything" className="mt-2 search p-2" onChange={(e)=> onSearchchange(e.target.value.toLocaleLowerCase())} />
                       
               
           
                    </div>

                    <div className="col-auto">
                    <Dropdown className="mt-2 dropdown">
                            <Dropdown.Toggle variant="" className="py-2 rounded-0" id="dropdown-basic">
                                all categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">sarees</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">laptop</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">mobile</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="col-auto d-flex">
                        <p className="btn btn-primary px-5 mt-2 py-2">search</p>
                        <p className="ms-4 mt-2 py-2">advanced</p>
                    </div>
                </div>
            </div>
<hr />
            <div className="container">
                <div className="row">
                    <div className="col-auto d-flex space">
                        <p>laptops</p>
                        <p>fragrances</p>
                        <p>skin care</p>
                        <p>groseries</p>
                        <p>home-decorations</p>
                        <p>furniture</p>
                        <p>tops</p>
                        <p>womens shoes</p>
                        <p>men shirts</p>
                        <p>men shirts</p>
                        <p>men shirts</p>
                        <p>men shirts</p>
                        <p>men shirts</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;