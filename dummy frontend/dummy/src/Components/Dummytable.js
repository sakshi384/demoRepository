import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import App from "../App";
import '../App.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Postform from "./PostForm";



function Demotable(props) {
    const [posts, setPosts] = useState([]);
    const[inputdata,setinputdata]=useState('');
    


   
    const [show,setShow]=useState(false);
    const handleShow=()=> setShow(true);
    const handleClose=()=> setShow(false);
        
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/showproduct/').then(response => {
            console.log("  .............................    ", response.data.data);
            setPosts(response.data.data);
        });


    }, []);


    const search =(e)=>{
        const inputdata=e.target.value;

        console.log(e)
        axios.get("http://127.0.0.1:8000/api/v1/product/q="+e)
        .then(response=>{
            console.log(response.data.results)
            setinputdata(response.data.results)

        });
    }

    const updatehandler=(id)=>{

        console.log(id)
        var url = "/update/" + id
        props.history.push(url)

    }
    

    
  
    return (
       
        <div>
            <label>search</label>
            {/* <input type="text" onChange={e=>setinputdata(e.target.value)}></input> */}
            
            <input type="text"placeholder="search..." value={inputdata} onChange={search} ></input>
            <button className="btn btn-outline-secondary"type="button" >search</button>
           

            <Button onClick={handleShow} variant="primary" style={{float: "right"}}>Add Details</Button>
           
           
          <table>

                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    <th>Operations</th>

                </tr>

                {posts.map((post, key) => {
                    return (
                        <tr key={key}>
                            <td>{post.id}</td>
                            <td>{post.Pname}</td>
                            <td>{post.Price}</td>
                            <td>{post.Quantity}</td>
                           
                            <td><Link to="/update/id"><Button  onClick={()=>updatehandler(post.id)}>Update</Button></Link></td>
                            {/* <td>
                                <i class="edit alternate outline icon"
                            style={{color:"blue" ,marginTop:"7px"}}
                        ></i>
                        </td> */}
                        </tr>
                    )
                })}
 
            </table>
            {/* form for add form */}
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Products</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        {/* <AddFormData></AddFormData> */}
                        <Postform ></Postform>

                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} onClick={() => window.location.reload(false)}>Save</Button>

                    </Modal.Footer>

                </Modal>

                
    

        </div>

    )
   
}
export default Demotable;