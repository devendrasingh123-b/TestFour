import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';


function  Product(){
let [getProduct,setProduct]=useState([])
let [Page,setPage]=useState(1)

let [val,setVal]=useState("")

let postsPerPage=5;

useEffect(()=>{

async function FetchData(){
   
try {
    let res=await axios.get("https://fakestoreapi.com/products")
    setProduct(res.data)
    console.log(res.data)



} catch (error) {
    console.log(error.message)
}
    
}    

FetchData()
},[])

let lastIndex=Page*postsPerPage
let fistIndex=lastIndex-postsPerPage

let sliceArr=getProduct.slice(fistIndex,lastIndex)


function handleEvent(){
   
    let Title=val.toLowerCase()
    console.log(Title)

let data=sliceArr.filter((itam)=>{
    return itam.title.toLowerCase().includes(Title)
})

setProduct(data)

}

return(

<>

<div id="SerchBar">

<input type="text"  placeholder="Title Search" name="" id="" value={val}  onChange={(e)=>setVal(e.target.value)} />
<button onClick={handleEvent}>Search</button>

</div>



<h1 style={{"color":"blue"}}>Courses:-</h1>

<div id="mainContainer" >

    
{sliceArr.map((itam)=>{
    return   <div key={itam.id}>
<h3>{itam.title}</h3>
<img src={itam.image} alt={itam.id} style={{height:"50px",width:"50px"}} />
<h6>{itam.price}</h6>

<Link to={`/Product/${itam.id}`}>View Itam</Link>

   </div>
    


 
})}


</div>


<button onClick={()=>setPage((pre)=>pre-1)}  disabled={Page===1} >Pre</button>


<button onClick={()=>setPage((pre)=>pre+1)} disabled={(getProduct.length-lastIndex)<postsPerPage}  >Next</button>


</>


)


}


export default Product