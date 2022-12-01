import { useState,useEffect } from "react";

export default function DisplayProducts () {

   
    function getData(){
        alert("Data Fetched...")
    }

    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    let [filterHeight, setFilterHeight] = useState("");
    let [modalDisplay, setModalDisplay] = useState("none");



    return (
        <div className="container">
            <p className="title">All Products</p>

            <div className='interested-modal-bg' style={{display:modalDisplay}}>
                <div className='interested-modal col-lg-4 col-sm-10' >
                    <i className="fa-solid fa-circle-xmark close" onClick={() => {
                        console.log(modalDisplay);
                        console.log("1");
                        setModalDisplay("none");
                        console.log(modalDisplay);
                    }}></i>
                    <div className='title' style={{borderBottom:'2px solid gray'}}>
                        <h3>Owner Contact Details</h3>
                    </div>
                    <div>
                        <p>Send Owner Details to</p>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="sms" />
                            <label className="form-check-label" for="sms">
                                <b>9893825544 <i className="bi bi-chat-left-dots-fill ms-2"></i></b>
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="whatsapp" />
                            <label className="form-check-label" for="whatsapp">
                                <b>9893825544 <i className="bi bi-whatsapp ms-2"></i></b>
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="mail" />
                            <label className="form-check-label" for="mail">
                                <b>athangkadam@gmail.com <i className="bi bi-envelope ms-2"></i></b>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline-secondary mt-2' style={{width:'100%'}}>Get Details</button>
                    </div>
                </div>
            </div>
            <div className="container show-properties">
                <div className="row">
                    <div className="filters-slider col-lg-3 col-sm-12" style={{height:filterHeight}}>
                        <div className="filter">
                            <h4><b>Filters</b>
                                <i className="fa-solid fa-filter ms-2"></i>
                                <i className="fa-solid fa-caret-down btn-down" onClick={() => {
                                    console.log("hello");
                                    console.log(filterHeight);
                                    if (filterHeight === "50px")
                                    {
                                        setFilterHeight("");
                                        console.log(filterHeight);
                                    }
                                    if (filterHeight === "")
                                    {
                                        setFilterHeight("50px");
                                        console.log(filterHeight);
                                    }
                                }}></i>
                            </h4>
                        </div>
                        <hr />
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="withImg" />
                                <label className="form-check-label" for="withImg"><b>Ads with Image</b></label>
                            </div>
                            <hr />
                            <div>
                                <h4>Categories</h4>
                                <select className="form-select">
                                    <option value=''>Select here</option>
                                    <option value="">Properties</option>
                                    <option value="">Appliances</option>
                                    <option value="">Furniture</option>
                                    <option value="">Vehicles</option>
                                </select>
                            </div>
                            <hr />  
                            <h4>Budget</h4>
                            <div className='budget'>
                                <input type={'number'} min="1" placeholder='Min Budget'></input>
                                <h3>-</h3>
                                <input type={'number'} min="1" placeholder='Max Budget'></input>
                            </div>
                            <hr />
                            <div>
                                <h4>Availability</h4>
                                <select className="form-select">
                                    <option value="">Select here</option>
                                    <option value="immediately">Immediately</option>
                                    <option value="1month">in 1 Month</option>
                                    <option value="3months">within 3 Months</option>
                                    <option value="6months">within 6 Months</option>
                                    <option value="1year">within 1 Year</option>
                                    <option value="2years">within 2 Years</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="properties-view col-lg-9 col-sm-12">
                        <div className="sort-filter">
                            <div className="sort">
                                    <p>Sort by </p><i className="fa-solid fa-sort"></i>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="">Popularity</option>
                                    <option value="">Price (High to Low)</option>
                                    <option value="">Price (Low to High)</option>
                                    <option value="">Newest First</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className='show'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}