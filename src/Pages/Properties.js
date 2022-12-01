export default function Properties(props){
    return(
        <div style={{display:props.display, minHeight:'100vh'}}>    
            <div>
            <h1 className="title">Properties</h1>
            <form noValidate>                    
                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Property Title" className='form-control' required></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Locality" className='form-control' required></input>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col-lg-12">
                                <textarea placeholder="Description (5000 characters max)" className='form-control' rows='3' maxLength='5000' required></textarea>
                            </div>
                    </div>

                    <p>Address</p>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Address Line 1" className='form-control' required></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Address Line 2" className='form-control' required></input>
                            </div>  
                    </div>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="City" className='form-control' required></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <select name="state" id="state" className="form-select" required>
                                    <option value="">State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>  
                    </div>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Pincode" className='form-control' required></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Google Maps Location Link" className='form-control'></input>
                            </div>  
                    </div>
                        
                    <p>Images</p>

                    <div>
                        <label for="image" class="form-label">Select Image here</label>
                        <input class="form-control" type="file" id="image" />
                    </div>
                        
                    <p>Property details</p>

                    <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'number'} placeholder="Area (Sqft)" className='form-control' required></input>
                            </div>  
                            <div className='col-lg-6 col-sm-12'>
                                <input type={'text'} placeholder="Rent per Month" className='form-control' required></input>
                            </div>  
                    </div>
                        
                    <p>Aminities</p>

                    <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="conference" />
                                    <label className="form-check-label" for="conference">
                                        Lift
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Gas Pipeline
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Parking <i className="fa-solid fa-square-parking"></i>
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Fire Safety
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Security
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Gym
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Park
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="wifi" />
                                    <label className="form-check-label" for="wifi">
                                        Swimming Pool
                                    </label>
                                </div>
                            </div>
                    </div>
                        
                    <div className="row">
                            <div className="col">
                                <select className="form-select">
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
                    <div>
                        <button type='button' className="btn btn-outline-secondary" style={{width:"50%"}}  >Upload Property</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}