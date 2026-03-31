
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSection/PricingSection'
import StateSection from './components/StatsSection/StateSection'
import Steps from './components/Steps/Steps'
import Workflow from './components/Workflow/Workflow'
import ToolsData from './components/ToolsSection/ToolsData/ToolsData'
 const ProductData = async()=>
 {
  const res = await fetch('/data.json')
  return res.json()
 }

function App() {
  const Data = ProductData()
  const [cartItem , setCartItem] = useState([])
  return (

    <>
   <Navbar cartItem={cartItem} ></Navbar>
   <Banner></Banner>
<StateSection></StateSection>

<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <ToolsData Data={Data} cartItem={cartItem} setCartItem={setCartItem}></ToolsData>
</Suspense>

<Steps></Steps>
<PricingSection></PricingSection>
<Workflow></Workflow>
   <Footer></Footer>
    </>
  )
}

export default App
