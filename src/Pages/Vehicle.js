import { useState,useRef } from "react"
import {useForm} from 'react-hook-form';

export default function Vehicle(props){

    const frm=useRef();

    //creating useForm hook
    const {register,handleSubmit,formState: { errors }}=useForm();

    //use State variable to store value of appliances
    const[vehicle,setVehicle]=useState({
        title:"",
        productType:"",
        productDescription:"",
        imageUrl:"",
        brand:"",
        model:"",
        registrationYear:"",
        kmDriven:"",
        rentPerMonth:"",
        availability:""
    })
    function readValue(property,value)
    {
        setVehicle({...vehicle,[property]:value})
        
    }
    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/vehicle',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(vehicle)
      })
      .then(response=>response.json())
      .then((data)=>{
            
            console.log(data)
      })
      .catch((err)=>{
         console.log(err);
      })
    }

    return(
        <div style={{display:props.display, minHeight:'100vh'}}>
             <div>
                <h1 className="title">Vehicle</h1>
                <form ref={frm} onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Ad Title" className='form-control' required
                                onChange={(event) =>{
                                    readValue("title",event.target.value);
                                }}
                                ></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <select className="form-select"
                                onChange={(event) =>{
                                    readValue("productType",event.target.value);
                                }}
                                >
                                    <option value={''}>Product Type</option>
                                    <option value={'bikes'}>Bikes</option>
                                    <option value={'scooters'}>Scooters</option>
                                    <option value={'cars'}>Cars</option>
                                    <option value={'heavyVehicles'}>Heavy Vehicles</option>
                                    <option value={'commercial'}>Commercial & Other Vehicle</option>
                                    <option value={'bicycles'}>Bicycles</option>
                                </select>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col-lg-12">
                                <textarea placeholder="Description (5000 characters max)" className='form-control' rows='3' maxLength='5000' required
                                onChange={(event) =>{
                                    readValue("productDescription",event.target.value);
                                }}
                                ></textarea>
                            </div>
                    </div>
                    <p>Images</p>

                    <div>
                        <label for="image" class="form-label">Select Image here</label>
                        <input class="form-control" type="file" id="image" 
                        onChange={(event) =>{
                            readValue("imageUrl",event.target.value);
                        }}
                        />
                    </div>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Brand" className='form-control' required
                                onChange={(event) =>{
                                    readValue("brand",event.target.value);
                                }}
                                ></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Model" className='form-control' required
                                onChange={(event) =>{
                                    readValue("model",event.target.value);
                                }}
                                ></input>
                            </div>  
                    </div>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Registeration Year" className='form-control' required
                                onChange={(event) =>{
                                    readValue("registrationYear",event.target.value);
                                }}
                                ></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Km Driven" className='form-control' required
                                onChange={(event) =>{
                                    readValue("kmDriven",event.target.value);
                                }}
                                ></input>
                            </div>  
                    </div>
                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Rent per Month" className='form-control' required
                                onChange={(event) =>{
                                    readValue("rentPerMonth",event.target.value);
                                }}
                                ></input>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <select className="form-select"
                                onChange={(event) =>{
                                    readValue("availability",event.target.value);
                                }}
                                >
                                    <option value="">Availability</option>
                                    <option value="immediately">Immediately</option>
                                    <option value="1month">in 1 Month</option>
                                    <option value="3months">within 3 Months</option>
                                    <option value="6months">within 6 Months</option>
                                    <option value="1year">within 1 Year</option>
                                    <option value="2years">within 2 Years</option>
                                </select>
                            </div>  
                    </div>
                    <button type="submit" className="btn btn-warning">Add Vehicle</button>
                </form>
            </div>
        </div>
    )
}