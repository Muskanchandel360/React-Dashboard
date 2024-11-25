import CustomerCard from "./components/CustomerCard"
import DeliveryCard from "./components/DeliveryCard"
import OrdersCard from "./components/OrdersCard"
import PrimaryNav from "./components/PrimaryNav"
import RatingCard from "./components/RatingCard"
import SalesCard from "./components/SalesCard"
import SecondaryNav from "./components/SecondaryNav"

const App = () =>{
  return(
    <>
        <div class="navbars">
          <PrimaryNav/>
          <SecondaryNav/>


      <div class="container">
        <CustomerCard/>
        <DeliveryCard/>
        <RatingCard/>
        <SalesCard/>
        <OrdersCard/>

      </div>
      </div>




    </>

  )
}
export default App