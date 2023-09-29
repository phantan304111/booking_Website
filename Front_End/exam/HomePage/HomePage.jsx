import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fragment } from "react"
import Footer from "../components/footer"
import Nav from "../components/Nav"
import Banner from "./banner"
import ProductsList from "./ListProducts"


function HomePage(){
return <div>
<Nav/>
<Banner/>
<ProductsList/>
<footer style={{position : 'relative' , top: '200px'}}>
<Footer />
</footer>

</div>

}
export default HomePage