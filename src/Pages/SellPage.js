import { useState } from 'react';
import Properties from './Properties';
import Appliances from './Appliances';
import Furniture from './Furniture';
import Vehicle from './Vehicle';
import Default from './Default';

export default function SellPage () {

    //useState for Properies form
    const[propertyForm,displayPropertyForm]=useState({
        display:"none"
    })

    function getPropertiesForm(){
        displayPropertyForm({
            display:"block"
        })
        //closing rest of the form
        displayAppliancesForm({
            display:"none"
        })
        displayFurnitureForm({
            display:"none"
        })
        displayVehicleForm({
            display:"none"
        })
        displayDefaultForm({
            display:"none"
        })
    }

    //useState for Electronics/Appliances form
    const[appliancesForm,displayAppliancesForm]=useState({
        display:"none"
    })
    function getAppliancesForm(){
        displayAppliancesForm({
            display:"block"
        })
        //closing rest of the form
        displayPropertyForm({
            display:"none"
        })
        displayFurnitureForm({
            display:"none"
        })
        displayVehicleForm({
            display:"none"
        })
        displayDefaultForm({
            display:"none"
        })
    }

    //useState for Furniture form
    const[furnitureForm,displayFurnitureForm]=useState({
        display:"none"
    })
    function getFurnitureForm(){
        displayFurnitureForm({
            display:"block"
        })
        //closing rest of the form
        displayPropertyForm({
            display:"none"
        })
        displayAppliancesForm({
            display:"none"
        })
        displayVehicleForm({
            display:"none"
        })
        displayDefaultForm({
            display:"none"
        })
    }

     //useState for Vehicles form
    const[vehicleForm,displayVehicleForm]=useState({
        display:"none"
    })
    function getVehicleForm(){
        displayVehicleForm({
            display:"block"
        })
        //closing rest of the form
        displayPropertyForm({
            display:"none"
        })
        displayAppliancesForm({
            display:"none"
        })
        displayFurnitureForm({
            display:"none"
        })
        displayDefaultForm({
            display:"none"
        })
    }

    const[defaultForm,displayDefaultForm]=useState({
        display:"block"
    })
    // function getVehicleForm(){
    //     displayDefaultForm({
    //         display:"block"
    //     })
    //     //closing rest of the form
    //     displayPropertyForm({
    //         display:"none"
    //     })
    //     displayAppliancesForm({
    //         display:"none"
    //     })
    //     displayFurnitureForm({
    //         display:"none"
    //     })
    //     displayFurnitureForm({
    //         display:"none"
    //     })
    // }

    return(
        <>
           <div className="sellPage">
                <nav className="sellPageNav">
                    <ul>
                        <li className="dropdown" onClick={()=>{
                            getPropertiesForm();
                        }}>
                            <i class="fa-solid fa-house-user"></i><p>Properties</p>
                        </li>

                        <li className="dropdown" onClick={()=>{
                            getAppliancesForm();
                        }}>
                            <i class="fa-solid fa-mobile"></i><p>Appliances</p>
                        </li>

                        <li className='dropdown' onClick={()=>{
                            getFurnitureForm();
                        }}>
                            <i class="fa-solid fa-couch"></i><p>Furniture</p>
                        </li>

                        <li className='dropdown' onClick={()=>{
                            getVehicleForm();
                        }}>
                            <i class="fa-solid fa-car"></i><p>Vehicles</p>
                        </li>
                    </ul>
                </nav>
           </div> 
           <div className="container_page">
                <Default display={defaultForm.display}></Default>
                <Properties display={propertyForm.display}/>
                <Appliances display={appliancesForm.display}/>
                <Furniture display={furnitureForm.display}/>
                <Vehicle display={vehicleForm.display}/>
           </div>
      
        </>
    )
}