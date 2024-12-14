import { useState } from 'react';
import './Home2.css'
import yuvan from './yuvan.jpeg'
function Home2() {
    const [inputs, setInputs] = useState([
        { id: 1, name: 'yuvan', relationshop: 'sister', status: 'active', check: true },
        { id: 2, name: 'shankar', relationshop: 'sister', status: 'active', check: true },
        { id: 3, name: 'dhoni', relationshop: 'sister', status: 'active', check: false },
        { id: 4, name: 'kavya', relationshop: 'sister', status: 'active', check: true },

    ])


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
                                            <th scope="col">S. No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Relationship</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {inputs.map(e =>
                                            <tr key={e}>
                                                <th scope="row"><input type="checkbox" /></th>
                                                <td>{e.name} </td>
                                                <td>{e.relationshop}</td>
                                                <td> <label className='switch'>
                                                    <input type="checkbox"  />
                                                    <span className='slider round'></span>
                                                </label>
                                                    {e.status}</td>
                                            </tr>)
                                            }
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