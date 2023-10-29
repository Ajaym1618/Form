//// Using Class Components

// import React from "react";
// import axios from "axios"
// class FormTable extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             inputs:[],
//             values:{fname:"", lname:"", phoneNo:"", email:"", address:""},
//             editid:null,
//             ornot:false,
//             editedValues:{fnamel:"", lnamel:"", phoneNol:"", emaill:"", addressl:""},
//             searchval:""
//         }
//     }
    
//     getdata = ()=>{axios.get('http://localhost:3000/Details').then((res)=>this.setState({inputs:res.data})).then(()=>console.log(this.state.Allvalues))}

//     componentDidMount = () =>{
//         this.getdata()
//     }

//     handleAdd = (e) =>{
//         axios.post('http://localhost:3000/Details', this.state.values).then(()=>this.getdata());
//         this.setState({ornot:true})
//         this.setState({values:{fname:"", lname:"", phoneNo:"", email:"", address:""}})
//         e.preventDefault()
//     }

//     handleDelete = (id) =>{
//         axios.delete(`http://localhost:3000/Details/${id}`).then(()=>this.getdata())
//     }

//     handleEdit = (val) =>{
//         this.setState({editid:val.id})
//         this.setState({editedValues:{fnamel:val.fname, lnamel:val.lname, phoneNol:val.phoneNo, emaill:val.email, addressl:val.address}})

//     }

//     handleSave = (id) =>{
//         let shibu = {
//             fname: this.state.editedValues.fnamel,
//             lname: this.state.editedValues.lnamel,
//             phoneNo: this.state.editedValues.phoneNol,
//             email: this.state.editedValues.emaill,
//             address: this.state.editedValues.addressl
//         }
//         axios.put(`http://localhost:3000/Details/${id}`,shibu).then(()=>this.getdata())
//         this.setState({editid:null})
//     }


//     render(){
//         const filtered = this.state.inputs.filter((v)=>v.fname.toLowerCase().startsWith(this.state.searchval.toLowerCase()) || v.lname.toLowerCase().startsWith(this.state.searchval.toLowerCase()) )
//         return(
//             <div className="contain">
//                 <h1>Form Data</h1>
//                 <input type="text" placeholder="Search....." onChange={(e)=>this.setState({searchval:e.target.value})}/>
//                 <form >
//                     <table id="tabs">
//                         <thead></thead>
//                         <tbody>
//                             <tr><td>
//                                 <div class="form-floating ">
//                                 <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.values.fname} onChange={(e)=>this.setState({values:{...this.state.values, fname:e.target.value}})}/>
//                                 <label htmlFor="floatingInput">FirstName</label>
//                                 </div>
//                             </td></tr>

//                             <tr><td>
//                             <div class="form-floating ">
//                             <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.values.lname} onChange={(e)=>this.setState({values:{...this.state.values, lname:e.target.value}})}/>
//                             <label htmlFor="floatingInput">LastName</label>
//                             </div>
//                             </td></tr>

//                             <tr><td>
//                             <div class="form-floating ">
//                             <input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.values.phoneNo} onChange={(e)=>this.setState({values:{...this.state.values, phoneNo:e.target.value}})}/>
//                             <label htmlFor="floatingInput">PhoneNo</label>
//                             </div>
//                             </td></tr>

//                             <tr><td>
//                             <div class="form-floating ">
//                             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.values.email} onChange={(e)=>this.setState({values:{...this.state.values, email:e.target.value}})}/>
//                             <label htmlFor="floatingInput">Email</label>
//                             </div>
//                             </td></tr>

//                             <tr><td>
//                             <div class="form-floating ">
//                             <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.values.address} onChange={(e)=>this.setState({values:{...this.state.values, address:e.target.value}})}/>
//                             <label htmlFor="floatingInput">Address</label>
//                             </div>
//                             </td></tr>
//                         </tbody>
//                     </table>
                
//                     <button onClick={this.handleAdd} className="btn btn-info">Submit</button>
//                 </form>
                
//                 {this.state.ornot === true ? (
//                 <table className="table table-striped">
//                     <thead>
//                         <tr className="table-success">
//                             <th>Id</th>
//                             <th>Fname</th>
//                             <th>Lname</th>
//                             <th>PhoneNo</th>
//                             <th>Email</th>
//                             <th>Address</th>
//                             <th>Options</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filtered.slice().reverse().map((val)=>(
//                             <tr key={val.id} className="table-primary">
//                                 <td>{val.id}</td>
//                                 <td>{this.state.editid === val.id ? (<input type="text" value={this.state.editedValues.fnamel} onChange={(e)=>this.setState({editedValues:{...this.state.editedValues, fnamel:e.target.value}})}/>) : val.fname}</td>

//                                 <td>{this.state.editid === val.id ? (<input type="text" value={this.state.editedValues.lnamel} onChange={(e)=>this.setState({editedValues:{...this.state.editedValues, lnamel:e.target.value}})}/>) : val.lname}</td>

//                                 <td>{this.state.editid === val.id ? (<input type="text" value={this.state.editedValues.phoneNol} onChange={(e)=>this.setState({editedValues:{...this.state.editedValues, phoneNol:e.target.value}})}/>) : val.phoneNo}</td>

//                                 <td>{this.state.editid === val.id ? (<input type="text" value={this.state.editedValues.emaill} onChange={(e)=>this.setState({editedValues:{...this.state.editedValues, emaill:e.target.value}})}/>) : val.email}</td>

//                                 <td>{this.state.editid === val.id ? (<input type="text" value={this.state.editedValues.addressl} onChange={(e)=>this.setState({editedValues:{...this.state.editedValues, addressl:e.target.value}})}/>) : val.address}</td>

//                                 <td>{this.state.editid === val.id ? (<button onClick={()=>this.handleSave(val.id)}>Save</button>) : (<><button onClick={()=>this.handleDelete(val.id)}>Delete</button><button onClick={()=>this.handleEdit(val)}>Edit</button></>)}</td>
//                             </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>): ("")
//             }
//             </div>
//         )
//     }
// }

// export default FormTable;



// // Using functional Components

import React, { useEffect, useState } from "react"
import axios from "axios"

function FormTable (){
    const [inps, setInps] = useState([]);
    const [values, setValues] = useState({fname:"", lname:"", phoneNo:"", email:"", address:""})
    const [editId, setEditId] = useState(null)
    const [editedValues, setEditedValues] = useState({fnamel:"", lnamel:"", phoneNol:"", emaill:"", addressl:""})
    const [orNot, setOrNot] = useState(false)
    

    useEffect(()=>{
        getData()
    },[])

    function getData(){
        axios.get('http://localhost:3000/Details').then((res)=>setInps(res.data));
    }

    function handleAdd(e){
        axios.post('http://localhost:3000/Details', values).then(()=> getData());
        setValues({fname:"", lname:"", phoneNo:"", email:"", address:""})
        setOrNot(true)
        e.preventDefault()
    }

    function handleDelete(id){
        axios.delete(`http://localhost:3000/Details/${id}`).then(()=>getData())
    }

    function handleEdit(val){
       setEditId(val.id)
       setEditedValues({fnamel:val.fname, lnamel:val.lname, phoneNol:val.phoneNo, emaill:val.email, addressl:val.address})
    }

    function handleSave(id){
        const UpdatedValues ={
            fname:editedValues.fnamel,
            lname:editedValues.lnamel,
            phoneNo:editedValues.phoneNol,
            email:editedValues.emaill,
            address:editedValues.addressl
        }
        axios.put(`http://localhost:3000/Details/${id}`, UpdatedValues).then(()=>getData())
        setEditId(null)
        console.log(inps)
    }

     
    return(
        <>
        <div className="contain">
            <h1>Form Data</h1>
            <form onSubmit={handleAdd}>
            <table id="tabs">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={values.fname} onChange={(e)=> setValues({...values,fname:e.target.value})}/>
                            <label htmlFor="floatingInput">FirstName</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={values.lname} onChange={(e)=> setValues({...values, lname:e.target.value})}/>
                            <label htmlFor="floatingInput">LastName</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={values.phoneNo} onChange={(e)=> setValues({...values,phoneNo:e.target.value})}/>
                            <label htmlFor="floatingInput">PhoneNo</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={values.email} onChange={(e)=> setValues({...values, email:e.target.value})}/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={values.address} onChange={(e)=> setValues({...values, address:e.target.value})}/>
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" className="btn btn-info"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>

            
                {orNot=== true ? <table className="table table-striped">
                    <thead>
                        <tr className="table-success">
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>PhoneNo</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    {inps.slice().reverse().map((val)=>(
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{editId === val.id ? (<input value={editedValues.fnamel} onChange={(e)=>setEditedValues({...editedValues, fnamel:e.target.value})}/>):(val.fname || "")}</td>
                            <td>{editId === val.id ? (<input value={editedValues.lnamel} onChange={(e)=>setEditedValues({...editedValues, lnamel:e.target.value})}/>):(val.lname || "")}</td>
                            <td>{editId === val.id ? (<input value={editedValues.phoneNol} onChange={(e)=>setEditedValues({...editedValues, phoneNol:e.target.value})}/>):(val.phoneNo || "")}</td>
                            <td>{editId === val.id ? (<input value={editedValues.emaill} onChange={(e)=>setEditedValues({...editedValues, emaill:e.target.value})}/>):(val.email || "")}</td>
                            <td>{editId === val.id ? (<input value={editedValues.addressl} onChange={(e)=>setEditedValues({...editedValues, addressl:e.target.value})}/>):(val.address || "")}</td>
                            <td>
                                {editId === val.id ? (<button onClick={()=>handleSave(val.id)} className="btn btn-success">Save</button>): (<><button onClick={()=>handleDelete(val.id)} className="btn btn-danger">Delete</button>
                                <button onClick={()=>handleEdit(val)} className="btn btn-warning">Edit</button></>)}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table> : ""
                }
        </div>  
        </>
    )
}

export default FormTable








