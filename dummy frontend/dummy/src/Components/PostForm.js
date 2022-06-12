import React,{Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class Postform extends Component{
    constructor(props){
        super(props);
        this.state={
            Pname:'',
            Price:'',
            Quantity:'',
        }

    }

    handleChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/v1/addproduct/",this.state)
        .then(response =>{
            console.log(response)
        })
        
    }

    render(){
        const{Pname,Price,Quantity}=this.state;
        return(
            <div>
                 <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <label>Product Name</label>
                    <Form.Control
                        type="text" 
                        name="Pname"
                        value={Pname}
                        onChange={this.handleChange}
                        required="required" 
                        placeholder="Product name">

                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <label>Price</label>
                    <Form.Control
                        type="number" 
                        name="Price" 
                        required="required" 
                        value={Price}
                        onChange={this.handleChange}
                        placeholder="Product price">

                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <label>Quantity</label>
                    <Form.Control
                        type="number" 
                        name="Quantity" 
                        required="required" 
                        value={Quantity}
                        onChange={this.handleChange}
                        placeholder="Product quantity">

                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block >
                    Add Product
                </Button>

            </Form>

            </div>
        )
    }
}
export default Postform;