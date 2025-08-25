import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/datapage/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error("Error fetching detail:", err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "50px",
        padding: "40px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "80vh",
      }}
    >
      {/* Product Image with Zoom */}
      <div style={{ flex: "1", maxWidth: "500px" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.name,
              isFluidWidth: true,
              src: product.image,
            },
            largeImage: {
              src: product.image, // agar HD version ho toh yaha lagao
              width: 1200,
              height: 1800,
            },
            lensStyle: { backgroundColor: "rgba(0,0,0,.2)" },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%",
            },
          }}
        />
      </div>

      {/* Product Details */}
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "0", color: "#333" }}>
          {product.name}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          {product.description}
        </p>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          minima excepturi porro quod a omnis iure asperiores! Ad labore cum
          vero, animi dicta incidunt nostrum fugit laboriosam, assumenda numquam
          accusamus!
        </h3>

        {/* Rating */}
        <div className="flex">
          <h3>Rating :</h3>
          <i
            style={{ marginTop: "0.6%" }}
            className="fa-regular fa-star"
          ></i>
          <i
            style={{ marginTop: "0.6%" }}
            className="fa-regular fa-star"
          ></i>
          <i
            style={{ marginTop: "0.6%" }}
            className="fa-regular fa-star"
          ></i>
          <i
            style={{ marginTop: "0.6%" }}
            className="fa-regular fa-star"
          ></i>
          <i
            style={{ marginTop: "0.6%" }}
            className="fa-regular fa-star"
          ></i>
        </div>

        {/* Price */}
        <h2>
          Price : $299&nbsp;&nbsp;
          <del className="text-red-600">399</del>
        </h2>

        {/* Quantity */}
        <div className="flex">
          <h3>Quantity :</h3>
          <select
            className="h-5 w-8"
            style={{
              border: "1px  solid  black",
              marginLeft: "1%",
              marginTop: "0.5%",
            }}
            id="quantity"
            name="quantity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "15px 30px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          {product.button}
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div
          style={{
            height: "93vh",
            width: "45vw",
            backgroundColor: "white",
            position: "fixed",
            display: "flex",
            
            top: "4%",
            left: "24%",
            boxShadow: "1px 1px 2px 2px gray",
            borderRadius: "12px",
          }}
        >
          <div className='flex-col' style={{marginLeft:'7%',marginTop:'6%'}}>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
            <div className='colom flex'>
          <h1 style={{marginTop:'5%',marginLeft:'1%'}}>Name</h1>
          <input style={{width:'17vw',height:'4vh',marginTop:'5%',marginLeft:'3%',border:'1px solid black',fontSize:'15px'}} type="text" name="" placeholder="Enter Name" id="" />
          </div>
          
            </div>
          
          <div className="absolute" style={{ left: "94%", top: "1%" }}>
            <button
              className="font-bold text-white text-1xl bg-black absolute"
              style={{ padding: "0px 6px", borderRadius: "100%" }}
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
