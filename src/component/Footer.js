import React from 'react'
// import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';



const Footer = () => {
    return(
        <>
            <footer>
            <hr />

                <div className="container">
                    <div className="row mt-4 tcolor">
                        <div className="col-xl-2">
                            <h4>buy</h4>
                            <p>registration</p>
                            <p>ebay money back guarantee</p>
                            <p>bidding & buying app</p>
                            <p>store</p>
                        </div>

                        <div className="col-xl-2">
                        <h4>sell</h4>
                            <p>start selling</p>
                            <p>learn to sell </p>
                            <p>affilates</p>

                            <h4>tools & apps</h4>
                            <p>start selling</p>
                            <p>learn to sell </p>
                            <p>affilates</p>
                            
                        </div>

                        <div className="col-xl-3 text-center">
                        <h4>stay connected</h4>
                            <p>ebay blogs</p>
                            <p>faceboo</p>
                            <p>twitee</p>
                        </div>

                        <div className="col-xl-3 ">
                        <h4>about ebay</h4>
                            <p>company info</p>
                            <p>news </p>
                            <p>investor</p>
                            <p>careers</p>
                            <p>goverment ralation</p>
                            <p>advertit with us</p>
                            <p>advertit with us</p>
                            <p>advertit with us (vero ) program</p>
                        </div>

                        <div className="col-xl-2">
                        <h4>help & contact</h4>
                            <p>seller information center</p>
                            <p>fcontact us</p>
                        

                        
                        <h4>community</h4>
                            <p>seller information</p>
                            <p>fcontact us</p>
                            <p>fcontact us</p>

                            <h4>ebay sites</h4>
                            <Dropdown className="mt-4 dd">
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
                        <p className='my-4 font'>Copyright © 1995-2022 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Do not sell my personal information and AdChoice	
</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;