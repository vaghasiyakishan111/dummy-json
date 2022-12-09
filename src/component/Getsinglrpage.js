import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Rating } from 'react-simple-star-rating'



function Getsinglrpage (){

    const [item,setitem]=useState([]);
    const [image1,setimage1]=useState([]);
    const [currentimg,setcurrentimg]=useState();


  
    const {id} =useParams();
    console.log(id)
    const imageclick=(event)=>{
        console.log(event.target)
    }

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                setitem(response.data)    
                setimage1(response.data.images)   
                setcurrentimg(response.data.thumbnail)          
            })


    }, []);


    return(
            <div>
                <Header/>

                <div className="container">
                    <div className="row mb-5">
                        <div className="col-xl-6">
                            {/* <img src={item.images[0]} alt="" className="mt-5 " /> */}
                            <img src={currentimg} alt="" className="mt-5 image-h mb-5 " />
                        

                                <div className="d-flex">
                            {
                                image1.map((q)=>(
                                    <div onClick={()=> setcurrentimg(q)} className="">
                                        <img src={q} alt="" className="smallimage mx-2 "/>
                                    </div>
                                ))
                                
                            }
                            </div>
                             
                           
                        </div>
                        <div className="col-xl-6 ">
                          <div className="border rounded mt-5 p-3">
                          <h6 className="">{item.description}</h6> 
                          <h2>Rs. {item.price}</h2>
                          <button className="bg-success rounded-pill px-3 my-2" >{item.rating}</button>
                          <p>free delivery</p>
                          </div>

                          <div className="border rounded mt-3 p-3">
                            <h1>{item.title}</h1>
                            <h6> stock  : {item.stock}</h6>
                            <Rating 
                            initialValue={item.rating}
                            readonly={true}
                            allowFraction={true}
                            />

                          </div>
                        </div>
                       
                    </div>
                </div>

                <Footer/>
            </div>

         
    )
}
export default Getsinglrpage;