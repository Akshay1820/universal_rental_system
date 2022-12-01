import { useState,useRef } from "react"
import {useForm} from 'react-hook-form';
export default function Furniture(props){


    const frm=useRef();


    //creating useForm hook
    const {register,handleSubmit,formState: { errors }}=useForm();

    //use State variable to store value of furniture
    const[furniture,setFurniture]=useState({
        title:"",
        productType:"",
        productDescription:"",
        imageUrl:"",
        rentPerMonth:"",
        availability:""
    })
    function readValue(property,value)
    {
        setFurniture({...furniture,[property]:value})
        
    }

    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/furniture',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(furniture)
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
                <h1 className="title">Furniture</h1>
                <form ref={frm} onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Ad Title" className='form-control' required
                                onChange={(event)=>{
                                    readValue("title",event.target.value)
                                }}
                                
                                ></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <select className="form-select"
                                 onChange={(event)=>{
                                    readValue('productType',event.target.value);
                                  }}
                                >
                                    <option value={''}>Product Type</option>
                                    <option value={'SofaAndDining'}>Sofa & Dining</option>
                                    <option value={'BedAndWardrobes'}>Bed & Wardrobes</option>
                                    <option value={'HomeDecorGarden'}>Home Decor & Garden</option>
                                    <option value={'KidsFurniture'}>Kids Furniture</option>
                                    <option value={'OtherHouseholdItems'}>Other Household Items</option>
                                </select>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col-lg-12">
                                <textarea placeholder="Description (5000 characters max)" className='form-control' rows='3' maxLength='5000' required
                                onChange={(event)=>{
                                    readValue("productDescription",event.target.value)
                                }}
                                ></textarea>
                            </div>
                    </div>
                    <p>Images</p>

                    <div>
                        <label for="image" class="form-label">Select Image here</label>
                        <input class="form-control" type="file" id="image"
                        onChange={(event)=>{
                            readValue("imageUrl",event.target.value)
                        }}
                        />
                    </div>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Rent per Month" className='form-control' required
                                onChange={(event)=>{
                                    readValue("rentPerMonth",event.target.value)
                                }}
                                
                                ></input>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <select className="form-select"
                                onChange={(event)=>{
                                    readValue("availability",event.target.value)
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
                    <button type="submit" className="btn btn-warning">Add Furniture</button>
                </form>
            </div>
        </div>
    )
}