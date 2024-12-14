import "./Prograss_round.css";
function Prograss_round() {
    return (
        <>
            <div className="container  " >
                <div class="container text-center">
                    <div class="row round-row">
                        <div class="col round-1">
                            <div className="ui-widgets">
                                <div className="ui-values">10</div>
                                <div className="ui-labels">ASSETS</div>
                            </div>
                            <br /><br />
                            <div className="col col-p">
                               <p>6 Active Asstes</p>
                            </div>
                        </div>
                        <div class="col round-2">
                            <div className="ui-widgets">
                                <div className="ui-values">3</div>
                                <div className="ui-labels">LIBILITIES</div>
                            </div>
                            <br /><br />
                            <div className="col col-p">
                               <p>2 Active Libilites 1 Inactive Liability</p>
                              
                            </div>
                        </div>
                        <div class="col round-3">
                            <div className="ui-widgets">
                                <div className="ui-values">15</div>
                                <div className="ui-labels">BENEFICIARIES</div>
                            </div> <br /><br />
                            <div className="col col-p">
                               <p>15 Active Beneficiaries</p>
                            </div>
                        </div>
                        <div class="col round-4">
                            <div className="ui-widgets">
                                <div className="ui-values">3</div>
                                <div className="ui-labels">SIGNATORES</div>
                            </div> <br /><br />
                            <div className="col col-p">
                               <p>2 Active Signatories 1 Inatice Signatory</p>
                               
                            </div>
                        </div>
                        <div class="col round-5">
                            <div className="ui-widgets">
                                <div className="ui-values">1</div>
                                <div className="ui-labels">WILL</div>
                            </div> <br /><br />
                            <div className="col col-p">
                               <p>Active</p>
                            </div>
                        </div>
                    </div>
                </div>
             <br /><br /><br />
            </div>
        </>
    )
}
export default Prograss_round;