import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

const Read = () => {
    const [data, setData] = useState([]);
  const {id} = useParams()
    useEffect(() => {
      axios
        .get("http://localhost:3000/products/" + id)
        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    }, []);
  return (
    <div>
        <div className='d-flex flex-column justify-content-center w-100 bg-light align-items-center vh-100'style={{height:"350px"}}>
         <h3>Products info</h3>
        <div className='w-75 h-50 border shadaw rounded px-5 pt-3 pb-2 d-flex justify-content-center align-items-center'>
            <form>
                <div className='mt-5'>
                   <strong className='text-info'> <span style={{fontSize:"14px",color:"#000000"}}>Name:</span> {data.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong className='text-info'> <span style={{fontSize:"14px",color:"#000000"}}>Price:</span>  {data.price}</strong>
                </div>
                <div className='mb-1 mt-1'>
                    <strong className='text-info'> <span style={{fontSize:"14px",color:"#000000"}}>Category:</span> {data.category}</strong>
                </div>
                <div className=''>
                    <strong className='text-info'> <span style={{fontSize:"14px",color:"#000000"}}>Phone:</span> {data.phone}</strong>
                </div>
               
                </form>
                <div> 
                </div>
                <div style={{marginTop:"195px"}}>
                <Link className='btn btn-sm btn-primary me-2' to={`/editproducts/${id}`}>Edit</Link>
                <Link  className="btn btn-sm btn-secondary"  to={"/product"}>Back</Link>
               </div>
        </div>
    </div>
    </div>
  )
}

export default Read