// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddPlan = () => {
//     const [plans, setPlans] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         packageType: '',
//         unlimitedAds: false,
//         price: '',
//         durationDays: '',
//         numOfCars: '',
//         featuredAds: '',
//         featuredMaxCar: '',
//         description: '',
//         status: 'active',
//     });

//     useEffect(() => {
//         fetchPlans();
//     }, []);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/plans`);
//             setPlans(response.data);
//         } catch (error) {
//             console.error('Error fetching plans', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`${process.env.REACT_APP_API_URL}/store-plan`, formData);
//             fetchPlans(); // Refresh the list of plans
//             setFormData({
//                 name: '',
//                 packageType: '',
//                 unlimitedAds: false,
//                 price: '',
//                 durationDays: '',
//                 numOfCars: '',
//                 featuredAds: '',
//                 featuredMaxCar: '',
//                 description: '',
//                 status: 'active',
//             });
//         } catch (error) {
//             console.error('Error creating plan', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${process.env.REACT_APP_API_URL}/delete-plan/${id}`);
//             fetchPlans(); // Refresh the list of plans
//         } catch (error) {
//             console.error('Error deleting plan', error);
//         }
//     };
//     const toggleStatus = async (id, currentStatus) => {
//         const newStatus = currentStatus === 'active' ? 'hide' : 'active';
//         try {
//             await axios.put(`${process.env.REACT_APP_API_URL}/update-plan/${id}`, { status: newStatus });
//             fetchPlans(); // Refresh the list of plans
//         } catch (error) {
//             console.error('Error updating plan status', error);
//         }
//     };


//     return (
//         <div className="App">
//             <h1>Plan Management</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plan Name" required />
//                 <input type="text" name="packageType" value={formData.packageType} onChange={handleChange} placeholder="Package Type" required />
//                 <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//                 <input type="number" name="durationDays" value={formData.durationDays} onChange={handleChange} placeholder="Duration Days" required />
//                 <input type="number" name="numOfCars" value={formData.numOfCars} onChange={handleChange} placeholder="Number of Cars" required />
//                 <input type="number" name="featuredAds" value={formData.featuredAds} onChange={handleChange} placeholder="Featured Ads" required />
//                 <input type="number" name="featuredMaxCar" value={formData.featuredMaxCar} onChange={handleChange} placeholder="Featured Max Car" required />
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//                 <label>
//                     Unlimited Ads:
//                     <input type="checkbox" name="unlimitedAds" checked={formData.unlimitedAds} onChange={handleChange} />
//                 </label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                     <option value="active">Active</option>
//                     <option value="hide">Hide</option>
//                 </select>
//                 <button type="submit">Create Plan</button>
//                 <button type="submit">Update Plan</button>

//             </form>

//             <h2>Plan Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Plan Name</th>
//                         <th>Plan Amount</th>
//                         <th>Plan Validity</th>
//                         <th>Number of Cars</th>
//                         <th>Featured Ads</th>
//                         <th>Featured Max Car</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {plans.map(plan => (
//                         <tr key={plan._id}>
//                             <td>{plan.name}</td>
//                             <td>{plan.price}</td>
//                             <td>{plan.durationDays}</td>
//                             <td>{plan.numOfCars}</td>
//                             <td>{plan.featuredAds}</td>
//                             <td>{plan.featuredMaxCar}</td>
//                             <td>{plan.status}</td>
//                             <td>
//                                 <button onClick={() => toggleStatus(plan._id, plan.status)}>
//                                     {plan.status === 'active' ? 'Hide' : 'Activate'}
//                                 </button>
//                                 <button onClick={() => handleDelete(plan._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AddPlan;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddPlan = () => {
//     const [plans, setPlans] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         packageType: '',
//         unlimitedAds: false,
//         price: '',
//         durationDays: '',
//         numOfCars: '',
//         featuredAds: '',
//         featuredMaxCar: '',
//         description: '',
//         status: 'active',
//     });
//     const [editingPlanId, setEditingPlanId] = useState(null);

//     useEffect(() => {
//         fetchPlans();
//     }, []);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/plans`);
//             setPlans(response.data);
//         } catch (error) {
//             console.error('Error fetching plans', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const createPlan = async () => {
//         try {
//             await axios.post(`${process.env.REACT_APP_API_URL}/store-plan`, formData);
//             fetchPlans();
//             resetForm();
//         } catch (error) {
//             console.error('Error creating plan', error);
//         }
//     };

//     const updatePlan = async () => {
//         try {
//             await axios.put(`${process.env.REACT_APP_API_URL}/update-plan-data/${editingPlanId}`, formData);
//             fetchPlans();
//             resetForm();
//         } catch (error) {
//             console.error('Error updating plan', error);
//         }
//     };

//     const handleEdit = (plan) => {
//         setFormData(plan);
//         setEditingPlanId(plan._id);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${process.env.REACT_APP_API_URL}/delete-plan/${id}`);
//             fetchPlans();
//         } catch (error) {
//             console.error('Error deleting plan', error);
//         }
//     };

//     const toggleStatus = async (id, currentStatus) => {
//         const newStatus = currentStatus === 'active' ? 'hide' : 'active';
//         try {
//             await axios.put(`${process.env.REACT_APP_API_URL}/update-plan/${id}`, { status: newStatus });
//             fetchPlans();
//         } catch (error) {
//             console.error('Error updating plan status', error);
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             name: '',
//             packageType: '',
//             unlimitedAds: false,
//             price: '',
//             durationDays: '',
//             numOfCars: '',
//             featuredAds: '',
//             featuredMaxCar: '',
//             description: '',
//             status: 'active',
//         });
//         setEditingPlanId(null);
//     };

//     return (
//         <div className="App">
//             <h1>Plan Management</h1>
//             <form>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plan Name" required />
//                 <input type="text" name="packageType" value={formData.packageType} onChange={handleChange} placeholder="Package Type" required />
//                 <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//                 <input type="number" name="durationDays" value={formData.durationDays} onChange={handleChange} placeholder="Duration Days" required />
//                 <input type="number" name="numOfCars" value={formData.numOfCars} onChange={handleChange} placeholder="Number of Cars" required />
//                 <input type="number" name="featuredAds" value={formData.featuredAds} onChange={handleChange} placeholder="Featured Ads" required />
//                 <input type="number" name="featuredMaxCar" value={formData.featuredMaxCar} onChange={handleChange} placeholder="Featured Max Car" required />
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//                 <label>
//                     Unlimited Ads:
//                     <input type="checkbox" name="unlimitedAds" checked={formData.unlimitedAds} onChange={handleChange} />
//                 </label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                     <option value="active">Active</option>
//                     <option value="hide">Hide</option>
//                 </select>

//                 {!editingPlanId ? (
//                     <button type="button" onClick={createPlan}>Create Plan</button>
//                 ) : (
//                     <button type="button" onClick={updatePlan}>Update Plan</button>
//                 )}
//                 <button type="button" onClick={resetForm}>Reset Form</button>
//             </form>

//             <h2>Plan Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Plan Name</th>
//                         <th>Plan Amount</th>
//                         <th>Plan Validity</th>
//                         <th>Number of Cars</th>
//                         <th>Featured Ads</th>
//                         <th>Featured Max Car</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {plans.map(plan => (
//                         <tr key={plan._id}>
//                             <td>{plan.name}</td>
//                             <td>{plan.price}</td>
//                             <td>{plan.durationDays}</td>
//                             <td>{plan.numOfCars}</td>
//                             <td>{plan.featuredAds}</td>
//                             <td>{plan.featuredMaxCar}</td>
//                             <td>{plan.status}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(plan)}>Edit</button>
//                                 <button onClick={() => toggleStatus(plan._id, plan.status)}>
//                                     {plan.status === 'active' ? 'Hide' : 'Activate'}
//                                 </button>
//                                 <button onClick={() => handleDelete(plan._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AddPlan;






// ***************************************************************







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddPlan.css';

// const AddPlan = () => {
//     const [plans, setPlans] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         packageType: '',
//         unlimitedAds: false,
//         price: '',
//         durationDays: '',
//         numOfCars: '',
//         featuredAds: '',
//         featuredMaxCar: '',
//         description: '',
//         status: 'active',
//     });
//     const [editingPlanId, setEditingPlanId] = useState(null);

//     useEffect(() => {
//         fetchPlans();
//     }, []);

//     const fetchPlans = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/plans`);
//             setPlans(response.data);
//         } catch (error) {
//             console.error('Error fetching plans', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const createOrUpdatePlan = async () => {
//         try {
//             if (editingPlanId) {
//                 await axios.put(`${process.env.REACT_APP_API_URL}/update-plan-data/${editingPlanId}`, formData);
//             } else {
//                 await axios.post(`${process.env.REACT_APP_API_URL}/store-plan`, formData);
//             }
//             fetchPlans();
//             resetForm();
//         } catch (error) {
//             console.error(`Error ${editingPlanId ? 'updating' : 'creating'} plan`, error);
//         }
//     };

//     const handleEdit = (plan) => {
//         setFormData(plan);
//         setEditingPlanId(plan._id);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${process.env.REACT_APP_API_URL}/delete-plan/${id}`);
//             fetchPlans();
//         } catch (error) {
//             console.error('Error deleting plan', error);
//         }
//     };

//     const toggleStatus = async (id, currentStatus) => {
//         const newStatus = currentStatus === 'active' ? 'hide' : 'active';
//         try {
//             await axios.put(`${process.env.REACT_APP_API_URL}/update-plan/${id}`, { status: newStatus });
//             fetchPlans();
//         } catch (error) {
//             console.error('Error updating plan status', error);
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             name: '',
//             packageType: '',
//             unlimitedAds: false,
//             price: '',
//             durationDays: '',
//             numOfCars: '',
//             featuredAds: '',
//             featuredMaxCar: '',
//             description: '',
//             status: 'active',
//         });
//         setEditingPlanId(null);
//     };

//     return (
//         <div className="App">
//             <h1>Plan Management</h1>
//             <form>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Plan Name"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="packageType"
//                     value={formData.packageType}
//                     onChange={handleChange}
//                     placeholder="Package Type"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleChange}
//                     placeholder="Price"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="durationDays"
//                     value={formData.durationDays}
//                     onChange={handleChange}
//                     placeholder="Duration Days"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="numOfCars"
//                     value={formData.numOfCars}
//                     onChange={handleChange}
//                     placeholder="Number of Cars"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="featuredAds"
//                     value={formData.featuredAds}
//                     onChange={handleChange}
//                     placeholder="Featured Ads"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="featuredMaxCar"
//                     value={formData.featuredMaxCar}
//                     onChange={handleChange}
//                     placeholder="Featured Max Car"
//                     required
//                 />
//                 <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     placeholder="Description"
//                 />
//                 <label>
//                     Unlimited Ads:
//                     <input
//                         type="checkbox"
//                         name="unlimitedAds"
//                         checked={formData.unlimitedAds}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <select name="status" value={formData.status} onChange={handleChange}>
//                     <option value="active">Active</option>
//                     <option value="hide">Hide</option>
//                 </select>

//                 <button type="button" onClick={createOrUpdatePlan}>
//                     {editingPlanId ? 'Update Plan' : 'Create Plan'}
//                 </button>
//                 <button type="button" onClick={resetForm}>Reset Form</button>
//             </form>

//             <h2>Plan Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Plan Name</th>
//                         <th>Plan Amount</th>
//                         <th>Plan Validity</th>
//                         <th>Number of Cars</th>
//                         <th>Featured Ads</th>
//                         <th>Featured Max Car</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {plans.map((plan) => (
//                         <tr key={plan._id}>
//                             <td>{plan.name}</td>
//                             <td>{plan.price}</td>
//                             <td>{plan.durationDays}</td>
//                             <td>{plan.numOfCars}</td>
//                             <td>{plan.featuredAds}</td>
//                             <td>{plan.featuredMaxCar}</td>
//                             <td>{plan.status}</td>
//                             <td>
//                                 <button className="edit " onClick={() => handleEdit(plan)}>Edit</button>
//                                 <button className="toggle ms-2" onClick={() => toggleStatus(plan._id, plan.status)}>
//                                     {plan.status === 'active' ? 'Hide' : 'Activate'}
//                                 </button>
//                                 <button className="delete ms-2" onClick={() => handleDelete(plan._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AddPlan;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddPlan.css';

const AddPlan = () => {
    const [plans, setPlans] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        packageType: '',
        unlimitedAds: false,
        price: '',
        durationDays: '',
        numOfCars: '',
        featuredAds: '',
        featuredMaxCar: '',
        description: '',
        status: 'active',
    });
    const [editingPlanId, setEditingPlanId] = useState(null);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/plans`);
            setPlans(response.data);
        } catch (error) {
            console.error('Error fetching plans', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const createOrUpdatePlan = async () => {
        try {
            if (editingPlanId) {
                await axios.put(`${process.env.REACT_APP_API_URL}/update-plan-data/${editingPlanId}`, formData);
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/store-plan`, formData);
            }
            fetchPlans();
            resetForm();
        } catch (error) {
            console.error(`Error ${editingPlanId ? 'updating' : 'creating'} plan`, error);
        }
    };

    const handleEdit = (plan) => {
        setFormData(plan);
        setEditingPlanId(plan._id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/delete-plan/${id}`);
            fetchPlans();
        } catch (error) {
            console.error('Error deleting plan', error);
        }
    };

    const toggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'hide' : 'active';
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/update-plan/${id}`, { status: newStatus });
            fetchPlans();
        } catch (error) {
            console.error('Error updating plan status', error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            packageType: '',
            unlimitedAds: false,
            price: '',
            durationDays: '',
            numOfCars: '',
            featuredAds: '',
            featuredMaxCar: '',
            description: '',
            status: 'active',
        });
        setEditingPlanId(null);
    };

    return (
        <div className="App">
            <h1 className='mb-5 text-center'>Plan Management</h1>
            <form>
                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Plan Name"
                        required
                    />
                    <input
                        type="text"
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        placeholder="Package Type"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                     <input
                        type="number"
                        name="durationDays"
                        value={formData.durationDays}
                        onChange={handleChange}
                        placeholder="Duration Days"
                        required
                    />
                </div>

                <div className="form-row">
                    <input
                        type="number"
                        name="numOfCars"
                        value={formData.numOfCars}
                        onChange={handleChange}
                        placeholder="Number of Cars"
                        required
                    />
                    <input
                        type="number"
                        name="featuredAds"
                        value={formData.featuredAds}
                        onChange={handleChange}
                        placeholder="Featured Ads"
                        required
                    />
                     <input
                        type="number"
                        name="featuredMaxCar"
                        value={formData.featuredMaxCar}
                        onChange={handleChange}
                        placeholder="Featured Max Car"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>

                <div > 
                    <label>Status : </label>
                   <select  name="status" value={formData.status} onChange={handleChange}>
                    <option value="active">Active</option>
                    <option value="hide">Hide</option>
                </select>
                <label className='ms-4'>
                        Unlimited Ads:
                        <input
                            type="checkbox"
                            name="unlimitedAds"
                            checked={formData.unlimitedAds}
                            onChange={handleChange}
                        />
                    </label>
                </div>   
                <span>
            <button style={{backgroundColor:"rgb(47,116,127)",color:"white"}} type="button" onClick={createOrUpdatePlan}>
                    {editingPlanId ? 'Update Plan' : 'Create Plan'}
                </button>
                <button type="button" className='ms-3' onClick={resetForm}>Reset Form</button>
                </span>
                 
            </form>

           
            <h2>Plan Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Plan Amount</th>
                        <th>Plan Validity</th>
                        <th>Number of Cars</th>
                        <th>Featured Ads</th>
                        <th>Featured Max Car</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plans.map((plan) => (
                        <tr key={plan._id}>
                            <td>{plan.name}</td>
                            <td>{plan.price}</td>
                            <td>{plan.durationDays}</td>
                            <td>{plan.numOfCars}</td>
                            <td>{plan.featuredAds}</td>
                            <td>{plan.featuredMaxCar}</td>
                            <td>{plan.status}</td>
                            <td>
                                <button className="edit ms-3" onClick={() => handleEdit(plan)}>Edit</button>
                                <button className="toggle ms-3" onClick={() => toggleStatus(plan._id, plan.status)}>
                                    {plan.status === 'active' ? 'Hide' : 'Activate'}
                                </button>
                                <button className="delete ms-3" onClick={() => handleDelete(plan._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddPlan;
