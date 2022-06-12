import axios from "axios";
// import queryparser from "query-string";

import {useEffect, useState} from "react";
// import Searchcakeitems from "../component/Searchcakeitems";
function editproduct(){
        
    axios({
        method:"post",
       //  url:"httpS://apibyashu.herokuapp.com/api/removecakefromcart",
        url:"http://localhost:8000/api/v1/removecakefromcart/",
        data:{
            
        },
        headers:{
           'Content-Type' : 'application/json',

           //  authtoken:localStorage.token
        }

    }).then((response) => {
       console.log("response is ", response)
    //    props.removefromcart(props.key1)
       if(response.data.data){
    //    toast.success("item remove successfully")
       }
       

   }, (error) => {
       console.log(">>>>> error from cake details api", error)
   })
   }
export function Search(props){



    // var query= queryparser.parse(props.location.search)
    // console.log("query is ",query);
    // var searchtext=query.q
    var [cakesresult,setCakesresult]= useState([])

    useEffect(function(){
        // if(!cakesresult.length>0){
        // var apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+searchtext
        var apiurl="http://localhost:8000/api/v1/showproduct/"
 
    axios({
        method:"get",
        url:apiurl
    }).then(
        (response)=>{
            console.log(" your response is :",response.data)
            setCakesresult(response.data.data)
        },(error)=>{
            console.log(" your error is :",error)

    })
// }

    },[])

    

    return(
        <div>
            
            
            

            {!cakesresult.length>0 && <div>
                 <h1 style={{color:"#ac0d0d",fontFamily:"cursive"}}> oops no cakes found </h1>
                </div>}
            
            {cakesresult.length>0 && <div > <h3 style={{color:"#ac0d0d",fontFamily:"cursive"}}>Your searched results here :</h3><br></br>
            
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
                    <tr></tr>
                </tbody>
               
                            </table> 

            {cakesresult.map((each)=>{


                // return <Searchcakeitems search={each}> </Searchcakeitems>
                return(
                <div>  
                        
                                           
                        <span>{each.Pname}</span>
                        <span>{each.Price}</span>
                        <span>{each.Quantity}</span>
                        <span><button onClick={editproduct}>edit </button></span>
                    </div>
                )
            })} 

            </div>}
           

        </div>
    )
}
