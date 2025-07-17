import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function ProductDaitals(){
    let {id}=useParams()
    let [Produc,setProduct]=useState([])

    useEffect(()=>{

async function ftch(){

let respons=await fetch(`https://fakestoreapi.com/products/${id}`)
let data=await respons.json()

console.log(data)
setProduct(data)

        }

        ftch()
    },[])


return(
<>

<div id="fav"><h1>{Produc.id}</h1>
<img src={Produc.image} alt="" />
<h5>{Produc.title}</h5></div>
</>

)


}



export default  ProductDaitals