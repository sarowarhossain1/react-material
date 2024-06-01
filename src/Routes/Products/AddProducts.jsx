import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddProducts = () => {
    const [state, setState] = useState({
      name:"",
      price:"",
      category:'',
      phone:''
    });
     const navigate = useNavigate()


   const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post("http://localhost:3000/products", state)
    .then((res) => {
        console.log(res.data)
     navigate("/product")
    })
    .catch((error) => console.log(error));
   }
   
  return (
    <div className='d-flex flex-column justify-content-center w-100 bg-light align-items-center vh-100'>
         <h3 style={{fontWeight:"600"}}>Add Product</h3>
        <div className='w-50 h-50 border border-2 shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
     <div >
        <div className='d-flex gap-3'>
        <div>
        <input type="text" className='border border-2 mt-3 ms-3'
         name="name" style={{width:"250px", height:"40px"}}
         id="" 
         placeholder='Name' 
         onChange={(e)=>{
            setState({...state, name:e.target.value})
          }}
         />
         
      </div>
      <div>
        <input type="text" style={{width:"150px",height:"40px"}}
         name="price" className='border border-2 mt-3'
         id="" 
         placeholder='Price' 
         onChange={(e)=>{
            setState({...state, price:e.target.value})
          }}/>
      </div>
        </div>
        <div className='d-flex gap-3'>
        <div>
        <input type="text" className='border border-2 mt-3 ms-3'
         name="category" style={{width:"150px", height:"40px"}}
         id="" 
         placeholder='Category' 
         onChange={(e)=>{
            setState({...state, category:e.target.value})
          }}/>
      </div>
      <div>
        <input type="text" style={{width:"250px",height:"40px"}}
         name="phone" className='border border-2 mt-3'
         id="" 
         placeholder='Phone' 
         onChange={(e)=>{
            setState({...state, phone:e.target.value})
          }}
         />
      </div>
        </div>
      </div>
      <div class="modal-footer mt-4">
        <button type="submit"   class="btn btn-primary m-2">Submit</button>
        <Link  class="btn btn-info" to={"/product"}>Back</Link>
      </div>
     </form>
        </div>
    </div>
  )
}

export default AddProducts