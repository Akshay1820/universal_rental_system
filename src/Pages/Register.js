import { useState,useRef } from "react"
import { useForm } from "react-hook-form";


export default function Register () {

    const frm=useRef();

    //use State variable to store value of custoemr by user
    const[customer,setCustomer]=useState({
        name:"",
        phone:"",
        address:"",
        dob:"",
        email:"",
        password:""
    })

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit=(data)=>{
        alert("form submited");
    }


    //function to get all customers

    function getCustomer(){
        fetch('http://localhost:5000/api/v1/customers')
        .then((response)=>{
            if(response.status ===200){
                console.log("Data fetch Successfully")
            }
            else{
                console.log("Something went wrong")
            }
        })
    }

 

    //function to insert customer data into database
    function insertCustomer()
    {
        fetch('http://localhost:5000/api/v1/customers',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(customer)
      })
      .then(response=>response.json())
      .then((data)=>{
            
            console.log(data)
      })
      .catch((err)=>{
         console.log(err);
      })
    }

    function readValue(property,value)
    {
        setCustomer({...customer,[property]:value})
       
    }
    return (
        <>
            <div className="container form">
                <p className="title" style={{padding: '0px'}}>Registration Form</p>

                    <div className="nameInputField">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"
                            onChange={(event)=>{
                                    readValue("name",event.target.value);
                            }}
                            {...register("name",{required:"Name is required"})}
                            />

                            <label for="name">Name</label>
                        </div>
                        <p className="text-danger errorTextField">{errors.name?.message}</p>
                    </div>
                        
                    
                    <div className="nameInputField">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="phone" placeholder="Enter Phone Number"
                                onChange={(event)=>{
                                    readValue("phone",event.target.value);
                            }}
                            {...register("phone",{required:"Phone number Required"})}
                            {...register("phone",{minLength:{value:10,message:"enter valid phone number"}})}
                            />
                            <label for="phone">Phone Number</label>
                        </div>
                        <p className="text-danger errorTextField">{errors.phone?.message}</p>
                    </div>

                    <div className="nameInputField">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="address" placeholder="Enter Address"
                                onChange={(event)=>{
                                    readValue("address",event.target.value);
                            }}
                            {...register("address",{required:"Address Required"})}
                            />
                            <label for="address">Address</label>
                        </div>
                        <p className="text-danger errorTextField">{errors.address?.message}</p>
                    </div>
                   
                   <div className="nameInputField">
                        <div className="form-floating">
                            <input type="date" className="form-control" id="dob" placeholder="Enter Date of Birth"
                                onChange={(event)=>{
                                    readValue("dob",event.target.value);
                            }}
                            {...register("dob",{required:"DOB Required"})}
                            />
                            <label for="dob">Date of Birth</label>
                        </div>
                        <p className="text-danger errorTextField">{errors.dob?.message}</p>
                   </div>
                    
                    <div className="nameInputField">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" 
                                onChange={(event)=>{
                                    readValue("email",event.target.value);
                            }}
                            {...register("email",{required:"Email is required"})}
                            {...register("email",{pattern:{value:/^\S+@\S+$/i,message:"please enter valid email"}})}

                            />
                            <label for="email">Email address</label>
                        </div>
                        <p className="text-danger errorTextField">{errors.email?.message}</p>
                    </div>
                    
                    <div className="nameInputField">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" placeholder="Ente Password" 
                                onChange={(event)=>{
                                    readValue("password",event.target.value);
                            }}
                            {...register("password",{required:"Password is required"})}
                            />
                            <label for="password">Password</label>
                        </div>    
                        <p className="text-danger errorTextField">{errors.password?.message}</p>
                    </div>
                         
                    <div style={{textAlign: 'center'}}>
                        <button type="submit" className="btn btn-outline-secondary" style={{width: '45%'}}
                        onClick={handleSubmit(onSubmit)}
                        
                        >Create User</button>
                        <button type="reset" className="btn btn-outline-secondary" style={{width: '45%'}}>Reset</button>
                        
                    </div>
               
               
            </div>
        </>
    )
}