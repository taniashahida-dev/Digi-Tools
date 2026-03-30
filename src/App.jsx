
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSection/PricingSection'
import StateSection from './components/StatsSection/StateSection'
import Steps from './components/Steps/Steps'

function App() {
  
  return (
    <>
   <Navbar></Navbar>
   <Banner></Banner>
<StateSection></StateSection>
<Steps></Steps>
<PricingSection></PricingSection>
   <Footer></Footer>
    </>
  )
}

export default App
