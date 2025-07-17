import { useNavigate } from "react-router-dom";



function Home(){

    let navigate=useNavigate()
    function handle(){
       navigate("/Product")
    }

    return(

        <>
 <h1> Well-Come :- "CourseCatalog SPA"</h1>       
<button style={{"textAlign":"center",margin:"50px","color":"blue"}} onClick={handle}>Go to ProductPage</button>
        
        </>
    )

}


export default  Home;