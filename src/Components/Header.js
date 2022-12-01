import {Link} from 'react-router-dom';
import { useState } from 'react';




export default function Header () {

    const[loginDetails,setLoginDetails]=useState({
        email:"",
        password:"",
    })


    function readLoginValues(property,value){
        setLoginDetails({...loginDetails,[property]:value})
        
    }
    
    
    function loginCustomer(){
        
        fetch('http://localhost:5000/api/v1/customer/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginDetails)
      })
      .then(response=>response.json())
      .then((data)=>{
            
            console.log(data)
      })
      .catch((err)=>{
         console.log(err);
      })

    }

    
    

    return (
        <>
            <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Login</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='example@abc.com' required
                                        onChange={(event)=>{
                                            readLoginValues("email",event.target.value);
                                        }}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder='Must be atleast 6 characters' minLength={'6'} required
                                      onChange={(event)=>{
                                        readLoginValues("password",event.target.value);
                                    }}

                                    />
                                </div>
                                <button type="button" className="btn btn-secondary" style={{width:'100%'}} onClick={()=>{
                                    loginCustomer();
                                }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'register'}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/all-products'}>All Products</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#login">Login</button>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/sell'}>Sell</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
} 