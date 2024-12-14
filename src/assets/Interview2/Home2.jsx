import './Home2.css'
import yuvan from './yuvan.jpeg'
function Home2() {
    return (
        <>
            <div className="container text-center">
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="card text-center" style={{
                        width: '18rem',
                        backgroundColor: 'blue',
                        color: 'white'
                    }}>
                        <img src={yuvan} alt="yuvan photo" style={{ marginTop: '20px' }} />
                        <div class="card-img-overlay ">
                            <p style={{
                                color: 'white', backgroundColor: 'black', display: 'inline-flex', marginTop: '17.5rem', marginLeft: '10px'
                            }}>Yuvan</p>
                        </div>
                        <div className="card-body">
                            <p><b>D.O.C : </b>28.04.2013</p>
                            <p><b>STATUS : </b>Complete</p>
                        </div>
                    </div>
                    <div className="col text-start">
                        <div className="row p-1 ">
                            <div className="col">
                                <button type="button" class="btn btn-danger "><i class="bi bi-person-add"></i> ADD <p className='p-1'>Beneficiaries</p></button>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-light"><i class="bi bi-house-door "></i> ADD <p className='p-1 '>Asset</p></button>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-light"><i class="bi bi-wallet2"></i> ADD <p className='p-1'>Liability</p></button>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-light"><i class="bi bi-person-add"></i> CREATE <p className='p-1 '>Link</p></button>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-light"><i class="bi bi-pen"></i> ADD <p className='p-1 '>Signatories</p></button>
                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-light"><i class="bi bi-file-earmark-text"></i> 0 <p>Will Generation </p></button>
                            </div>
                        </div>
                        <div className="container ">
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">Delete</div>
                                <div class="p-2">Edit</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col"><b>S. No</b></th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Relationship</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>
                                                <label className='switch'>
                                                    <input type="checkbox" />
                                                    <span className='slider round'></span>
                                                </label>
                                                <p className='d-inline-flex p-2'>active</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>
                                            <label className='switch'>
                                                    <input type="checkbox" />
                                                    <span className='slider round'></span>
                                                </label>
                                                <p className='d-inline-flex p-2'>active</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td >Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>
                                            <label className='switch'>
                                                    <input type="checkbox" />
                                                    <span className='slider round'></span>
                                                  
                                                </label>
                                                <p className='d-inline-flex p-2'>inactive</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                                            <td >Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td> 
                                            <label className='switch '>
                                           
                                                    <input type="checkbox" /> 
                                                    <span className='slider round '></span>
                                                   
                                                </label>
                                              <p className='d-inline-flex p-2'>active</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home2;