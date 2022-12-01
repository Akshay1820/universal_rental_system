import { useNavigate } from "react-router-dom";

export default function Home () {

    let navigate = useNavigate();
    return (
        <>
            <div className="banner">
                <div className="banner-text">
                    <h2>One Stop Shop for your every needs. Renting anything you want in now Fast and Easy.</h2>
                    <button className="btn" onClick={() => {
                        navigate('/all-products');
                    }}>Explore</button>
                </div>
            </div>

            <div className="container">
                <div>
                    <p className="title">Categories</p>
                    <hr />
                    <div className="row categories">
                        <div className="col-lg-3 col-sm-12">
                            <button className="btn categories-btn">
                                <p className="sub-title">Properties</p>
                                <img src={require('../Images/properties.png')} alt="Btn1" />
                            </button>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <button className="btn categories-btn">
                                <p className="sub-title">Electronics & Appliances</p>
                                <img src={require('../Images/appliances.png')} alt="Btn2" />
                            </button>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <button className="btn categories-btn">
                                <p className="sub-title">Furniture</p>
                                <img src={require('../Images/furniture.png')} alt="Btn3" />
                            </button>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <button className="btn categories-btn">
                                <p className="sub-title">Vehicles</p>
                                <img src={require('../Images/car.png')} alt="Btn4" />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="info">
                            <h1><b>Who We Are</b></h1>
                            <p>India's 1st and largest tech-enabled commercial property listing platform Commercial space, offices, buildings, and retail real estate available to buy across top cities in India</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="info">
                            <h1><b>What We Do</b></h1>
                            <p>A tech platform that provides its users access to institutional grade commercial real estate with property management and liquidity through resale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}