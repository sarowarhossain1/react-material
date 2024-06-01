import React, {  useEffect, useState } from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom';

const EditProducts = () => {
  const {id} = useParams();
    const navigate = useNavigate()
  // const [data, setData] = useState([])
  const [values,setValues] = useState({
     name:"",
     price:"",
     category:'',
     phone:''
  })
    
  useEffect(() => {
    axios.get("http://localhost:3000/products/" + id)
      .then((res) => {
        setValues(res.data)
      })
      .catch((error) => console.log(error));
  }, []);
 
   const handleSubmit = (e) =>{
      e.preventDefault()
      axios.put('http://localhost:3000/products/' + id, values)
      .then(res=>{
        console.log(res)
        navigate('/product')
      })
      .catch(error => console.log(error))
   }

     
  return (
    <div>
         <div className='d-flex flex-column justify-content-center w-100 bg-light align-items-center vh-100'>
         <h3>Update Product</h3>
        <div className='w-75 h-50 border shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center'>
        <form  onSubmit={handleSubmit}>
     <div >
        <div className='d-flex gap-3'>
        <div>
        <input type="text" className='border border-2 mt-3 ms-3'
         name="name" style={{width:"250px", height:"40px"}}
         id="name" 
         placeholder='Name' 
         value={values.name}
         onChange={(e)=>setValues({...values, name:e.target.value})}
         required
         />
         
      </div>
      <div>
        <input type="text" style={{width:"150px",height:"40px"}}
         name="price" className='border border-2 mt-3'
         id="price" 
         placeholder='Price' 
         value={values.price}
         onChange={(e)=>setValues({...values, price:e.target.value})}
         />
      </div>
        </div>
        <div className='d-flex gap-3'>
        <div>
        <input type="text" className='border border-2 mt-3 ms-3'
         name="category" style={{width:"150px", height:"40px"}}
         id="category" 
         placeholder='Category' 
         value={values.category}
         onChange={(e)=>setValues({...values, category:e.target.value})}
        />
      </div>
      <div>
        <input type="text" style={{width:"250px",height:"40px"}}
         name="phone" className='border border-2 mt-3'
         id="phone" 
         placeholder='Phone' 
         value={values.phone}
         onChange={(e)=>setValues({...values,  phone:e.target.value})}
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
    </div>
  )
}

export default EditProducts