import Header from "./Header";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
// import './App.css';
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function Home() {
  const [pro, setpro] = useState([]);
 
  const [find, setfind] = useState("https://dummyjson.com/products");
  const [category1,setcategory1]=useState([]);



  function search(e) {
    console.log(e);
    if (e != "") 
    {
      setfind("https://dummyjson.com/products/search?q=" + e);
    }
    // axios.get('https://dummyjson.com/products')
    axios.get(find)
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setpro(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    search(" ");
  }, []);


  useEffect(()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then(function (response) {
      // handle success
      console.log(response.data);
      setcategory1(response.data)
    })
    
  },[])

  function click(a){
    // axios.get(`https://dummyjson.com/products/category/${a}`)
    axios.get('https://dummyjson.com/products/category/'+a)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      
      setpro(response.data.products);
    
      
  
     
    })
  
  }

 

  //   const handleSearch =(serachtext)=>{
  //     const filteredItems = pro.filter(
  //         item =>
  //           item.description.toLocaleLowerCase().includes(serachtext) ||
  //           item.title.toLocaleLowerCase().includes(serachtext)
  //       );

  //       setpro(filteredItems);
  //   }

  return (
    <>
      <Header />
      {/* <Header  onSearchchange={handleSearch} /> */}

      {/* <input type="text" placeholder="search"  onChange={(s)=>{setsearch((s.target.value==='') ? 'https://dummyjson.com/products': 'https://dummyjson.com/products/search?q=' + s.target.value)}}/> */}

     <div className="container">
      <div className="row d-flex">
      {
        category1.map((w,k)=>{
          return(
            <div key={k} className="col-xl-2 mb-2">
         
            <a href="#" className="text-dark text-decoration-none" onClick={()=>click(w)} >{w}</a>
            
            </div>
          )
        })
      }

      </div>
     </div>

      <input type="text" onChange={(e) => {search(e.target.value); }} />
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./img/s1.webp")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./img/s2.webp")}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <div className="d-flex my-5">
          <h1 className="fw-semibold">Daily Deals</h1>
          <h4 className="mt-3 ms-4">see all</h4>
        </div>
        <div className="">
          <div className="row">
            {pro.map((k, j) => {
              return (
                <>
                  <div
                    key={j}
                    className="col-xl-3 bg-border mb-5 me-5 mx-auto shadow-lg"
                  >
                    <Link to={`/${k.id}`}>
                      <OwlCarousel
                        items={1}
                        className="owl-theme"
                        loop
                        nav={false}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={5000}
                        margin={8}
                      >
                        {k.images.map((n, j) => {
                          return (
                            <div key={j}>
                              <img src={n} className="img1" />
                            </div>
                          );
                        })}

                        {/* <div ><img className="img img1" src={k.images[0]}  /></div>
                                                <div ><img className="img img1" src={k.images[1]}  /></div>
                                                <div ><img className="img img1" src={k.images[2]}  /></div>
                                                <div ><img className="img img1" src={k.images[3]}  /></div>
                                                <div ><img className="img img1" src={k.images[4]}  /></div> */}
                      </OwlCarousel>
                      <hr />
                      <div className="bg-color">
                        <h4 className="ms-3 pt-2 hovertitle">{k.title}</h4>
                        <hr />

                        <div className="d-flex">
                          <h6 className="ms-1">price-{k.price}</h6>
                          <p className="mx-3 fw-semibold">
                            {k.discountPercentage}
                          </p>
                          <p className="fw-semibold me-2">stock-{k.stock}</p>
                          <p> rating : {k.rating}</p>
                        </div>
                        <h6 className="ms-3">{k.category}</h6>
                        <p className="pt-2 fw-bold ms-1">{k.description}</p>
                        <button>
                          <Link to={`/${k.id}`}> VIEW MORE</Link>
                        </button>

                        <Rating
                          initialValue={k.rating}
                          readonly={true}
                          allowFraction={true}
                        />
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Home;
