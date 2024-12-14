
import Prograss_round from "./Prograss/Prograss_round";
import yuvan from "./yuvan.jpeg";
function My_will() {
    return (
        <>
            <div class="text-center" >
                <div class="row ">
                    <div class="col-8">
                        <div className="container border border-1 my_will_main">
                            <div className="container "><br />
                                <div class="row">
                                    <div class="col text-start">
                                        <h5>My-will</h5>
                                    </div>
                                    <div class="col text-end" >
                                        <p>1/3</p>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <div className="container">
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col">
                                            <div className="yuvan-img d-inline-flex ">
                                                <img src={yuvan} alt="" style={{ maxWidth: "250px" }} />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div className="information text-start">
                                                <p><b>Information</b></p>
                                                <br />
                                                <p><b>D.O.C : </b> 24/06/2024</p>
                                                <p><b>STATUS : </b> Complete</p>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p><b><i class="bi bi-currency-rupee"></i> </b>2.5 Lakhs</p>
                                            <p style={{ color: "green" }}> Worth assets today</p>
                                        </div>
                                        <div class="col">
                                            <p><b><i class="bi bi-currency-rupee"></i> </b>2.5 Lakhs</p>
                                            <p style={{ color: "red" }}>Worth assets today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="conatiner ">
                                <Prograss_round />
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-start border border-1 my_will_main">
                        <div className="container my_will_head">
                            <div className="row" style={{ marginTop: '20px' }}>
                                <div className="col text-start">
                                    <h5>Signatory</h5>
                                </div>
                                <div className="col text-end">1/4</div>
                            </div>
                        </div>
                        <div className="container">
                            <div class="card">
                                <div class="card-body border border-1 ">
                                    <div className="row">
                                        <div className="col">
                                            <img src={yuvan} style={{ width: '130px' }} />
                                            <div class="card-img-overlay ">
                                               <p style={{color:'white',backgroundColor:'black',display:'inline-flex',marginTop:'135px',marginLeft:'50px'                                            
                                               }}>Yuvan</p>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <p>Yuvan</p>
                                            <p>Witness</p>
                                            <p>D.O.C : 28.04.2013</p>
                                            <p>STATUS : Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body border border-1 ">
                                    <div className="row">
                                        <div className="col">
                                            <img src={yuvan} style={{ width: '130px' }} />
                                            <div class="card-img-overlay ">
                                               <p style={{color:'white',backgroundColor:'black',display:'inline-flex',marginTop:'135px',marginLeft:'50px'                                            
                                               }}>Yuvan</p>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <p>Yuvan</p>
                                            <p>Witness</p>
                                            <p>D.O.C : 28.04.2013</p>
                                            <p>STATUS : Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body border border-1 ">
                                    <div className="row">
                                        <div className="col">
                                            <img src={yuvan} style={{ width: '130px' }} />
                                            <div class="card-img-overlay ">
                                               <p style={{color:'white',backgroundColor:'black',display:'inline-flex',marginTop:'135px',marginLeft:'50px'                                            
                                               }}>Yuvan</p>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <p>Yuvan</p>
                                            <p>Witness</p>
                                            <p>D.O.C : 28.04.2013</p>
                                            <p>STATUS : Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body border border-1 ">
                                    <div className="row">
                                        <div className="col ">
                                            <img src={yuvan} style={{ width: '130px' }} />
                                            <div class="card-img-overlay ">
                                               <p style={{color:'white',backgroundColor:'black',display:'inline-flex',marginTop:'135px',marginLeft:'50px'                                            
                                               }}>Yuvan</p>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <p>Yuvan</p>
                                            <p>Witness</p>
                                            <p>D.O.C : 28.04.2013</p>
                                            <p>STATUS : Complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default My_will;
