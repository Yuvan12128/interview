import { useState } from 'react';
import './Home2.css';
import yuvan from './yuvan.jpeg';
import { Link } from 'react-router-dom';

function Home2() {
    const [inputs, setInputs] = useState([
        { id: 1, name: 'yuvan', relationship: 'brother', status: 'active', check: true, date: '04/10/1988' },
        { id: 2, name: 'shankar', relationship: 'brother', status: 'active', check: true, date: '04/10/1988' },
        { id: 3, name: 'dhoni', relationship: 'brother', status: 'active', check: false, date: '04/10/1988' },
        { id: 4, name: 'varatha', relationship: 'brother', status: 'active', check: true, date: '04/10/1988' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newItem, setNewItems] = useState({
        name: '',
        relationship: '',
        status: 'active',
        check: false,
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItems((prevItem) => ({ ...prevItem, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name && newItem.relationship && newItem.date) {
            setInputs([...inputs, { id: inputs.length + 1, ...newItem, status: 'active' }]);
            setShowForm(false);
            setNewItems({ name: '', relationship: '', status: '', check: false, date: '' });
        } else {
            alert('Please fill in all fields');
        }
    };
    // const handleDelete = (id) => {
    //     const newInputs = { ...inputs };
    //     delete newInputs[id];
    //     setInputs(newInputs);
    // };
    // const handleEdit = (id) => {
    //     const itemToEdit = inputs[id]; 
    //     setNewItems(itemToEdit); 
    //     setShowForm(true); 
    // };

    return (
        <>
            <div className="container text-center">
                <div className="row" style={{ marginTop: '10px' }}>

                    <div className="card" style={{
                        width: '18rem',
                        backgroundColor: 'blue',
                        color: 'white'

                    }}>
                        <img src={yuvan} style={{ marginTop: '50px', width: '150px', marginLeft: '50px' }} />
                        <p></p>
                        <p><b>D.O.C : </b>24/06/2002</p>
                        <p><b>STATUS : </b>Complite</p>
                        <Link style={{ textDecoration: 'none' }} to='/'><p style={{ color: 'white', marginTop: '25rem' }}>{'< '}Back to Home</p></Link>
                        <p></p>
                    </div>

                    <div className="col text-start">
                        <div className="row p-1">
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-danger">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-light">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-light">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-light">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-light">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                            <div className="col">
                                <button onClick={() => setShowForm(true)} type="button" className="btn btn-light">
                                    <i className="bi bi-person-add"></i> ADD <p className="p-1">Beneficiaries</p>
                                </button>
                            </div>
                        </div>
                        <div className="container">
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2" style={{ color: 'blue', cursor: 'pointer', transition: 'color 0.3s ease' }}>
                                    <p>Delete</p>
                                </div>
                                <div  className="p-2" style={{ color: 'blue', cursor: 'pointer', transition: 'color 0.3s ease' }}>
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S. No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Relationship</th>
                                            <th scope='col'>Date of Birth</th>
                                            <th scope="col">Status</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inputs.map((e, index) => (
                                            <tr key={index}>
                                                <th scope="row">
                                                    <input
                                                        type="checkbox"
                                                        checked={e.check}
                                                        onChange={() => {
                                                            const updatedInputs = inputs.map((item) =>
                                                                item.id === e.id ? { ...item, check: !item.check } : item
                                                            );
                                                            setInputs(updatedInputs);
                                                        }}
                                                    />
                                                </th>
                                                <td>{e.name}</td>
                                                <td>{e.relationship}</td>
                                                <td>{e.date}</td>
                                                <td>
                                                    <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={e.check}
                                                            onChange={() => {
                                                                const updatedInputs = inputs.map((item) =>
                                                                    item.id === e.id ? { ...item, check: !item.check } : item
                                                                );
                                                                setInputs(updatedInputs);
                                                            }}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    {e.status}

                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col">
                                {showForm && (
                                    <form onSubmit={handleSubmit}>
                                        <div className="container">
                                            <h5 style={{textAlign:'center'}}><u>Add new Beneficiary</u></h5>
                                            <br />
                                            <p>Personal Information</p>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={newItem.name}
                                                onChange={handleChange}
                                                required
                                                placeholder='Name*'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="relationship" className="form-label"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="relationship"
                                                name="relationship"
                                                value={newItem.relationship}
                                                onChange={handleChange}
                                                required
                                                placeholder='RelationShip*'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="date" className="form-label"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="date"
                                                name="date"
                                                value={newItem.date}
                                                onChange={handleChange}
                                                required
                                                placeholder='date*'
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor=""></label>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-secondary ms-2"
                                            onClick={() => setShowForm(false)}
                                        >
                                            Cancel
                                        </button>

                                        <button type="submit" className="btn btn-primary" style={{marginLeft:'20px'}}>Update</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home2;
