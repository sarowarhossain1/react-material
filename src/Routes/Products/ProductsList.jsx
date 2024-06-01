import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { CiRead } from "react-icons/ci";
import {useNavigate} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { colors } from "@mui/material";


export default function ProductsList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);


  const handleDelete = (id)=>{
        axios.delete('http://localhost:3000/products/'+ id)
        .then(res=>{
            console.log(res)
            window.location.reload(true)
            navigate('/product')
        })
        .catch(error=>console.log(error)) 
    
}

  return (
    <div>
      <div className='container'>
        <div>
            <h3 style={{fontWeight:"600"}}>Product List</h3>
        </div>
        <div className='d-flex justify-content-end me-5'>
        <Link type="button" class="btn btn-primary" to={"/addproducts"} >
         ADD <AddIcon sx={{fontSize:"14px"}}/>
</Link>
        </div>
          <table class="table table-bordered" style={{marginTop:"45px"}}>
  <thead>
  <tr>
      <th className="border border-2  bg-info">Id</th>
      <th className="border border-2 bg-info">Name</th>
      <th className="border border-2 bg-info">Price</th>
      <th className="border border-2 bg-info">Category</th>
      <th className="border border-2 bg-primary">Action</th>
    </tr>
  </thead>
  <tbody>
    {
       data.map((item,key)=>(
        <tr key={key}>
              <td className=' border '>{item.id}</td>
              <td className='col-3 border'>{item.name}</td>
              <td className='col-2 border'>{item.price}</td>
              <td className='col-3 border'>{item.category}</td>
              <td className='bcol-2 order m-4'>
              <Link type="button" class="btn btn-primary" to={`/read/${item.id}`}>
                <CiRead sx={{colors:"#03a9f4"}}/> Read
</Link>
                 <Link  className='btn btn-sm btn-info m-2' to={`/editproducts/${item.id}`}> <EditIcon sx={{colors:"#03a9f4",fontSize:"14px"}}/> Edit</Link>
                 <button  className='btn btn-sm btn-danger' onClick={()=> handleDelete(item.id)}><DeleteIcon sx={{colors:"#03a9f4",fontSize:"14px"}}/> Delete</button>
              </td>
            </tr>
       ))
    }
   </tbody>
  </table>
     <div>
        </div>   
    </div>
      <div></div>
    </div>
  );
}
