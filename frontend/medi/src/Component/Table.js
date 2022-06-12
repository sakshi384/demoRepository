import React,{Component} from "react";
// import { Table } from 'react-bootstrap';
// import axios from 'axios';


export class Home extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/v1/showproduct/')
        .then(response=>response.data)
        .then((data)=>{
           
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    deleteData(id){
        fetch('http://127.0.0.1:8000/employee/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
    }

    render(){
        const empData=this.state.data;
        console.log("this is ths empData",empData)
        const rows=empData.map((emp,pos)=>

        
            <tr key={pos}>
                <td>{emp.Pname}</td>
                <td>{emp.Price}</td>
                <td>{emp.Quantity}</td>
                
                <td>
                    {/* <Link to={'update/'+emp.id} className="btn btn-info mr-2">Update</Link> */}
                    <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
}

//     constructor(props){
//         super(props);
//         this.state={
//             datasource:[],
//         }
//     }
    
//     componentDidMount(){
//         axios.get('http://127.0.0.1:8000/api/v1/showproduct/')
//         .then(response=>{
//           console.log(response.data.data)
//           this.setState({dataSource:response.data})
//         },(error)=>{
//           console.log(" your error is :",error)
    
//     })
    
//       }
    
    

//     render(){
//         // const{dataSource}=this.state.datasource;

//         return(
//             <div>
//                 <Table className="mt-4" striped bordered hover size="sm">
//                     <thead>
//                         <tr>
//                             <th>Product Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>options</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {dataSource.map((each)=>{
                           
//                                 <tr key={each.id}>
//                              <td>{each.Pname}</td>
//                              <td>{each.Price}</td>
//                              <td>{each.Quantity}</td>
//                          </tr>

                            
                             

//                         }

//                         )}
//                         {/* {datasource.map(p=>
//                         <tr >
//                             <td>{p.Pname}</td>
//                             <td>{p.Price}</td>
//                             <td>{p.Quantity}</td>
//                         </tr>
//                         )} */}
                        
//                             </tbody>

//                     </Table>
//             </div>

//         );
//     }
// }
