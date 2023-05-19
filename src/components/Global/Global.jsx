import React from "react"
import Header from "../Header/Header"
import First from "../First/First"
import Cards from "../Cards/Cards"
import MegaCard from "../MegaCard/MegaCard"
import SelectedWork from "../SelectedWork/SelectedWork"
import Product from "../Product/Product"
import Vasil from "../Vasil/Vasil"
import Footer from "../Footer/Footer"

function Global() {
  return (
    <div>
      <Header/>
      <First/>
      <Cards/>
      <MegaCard/>
      <SelectedWork/>
      <Product/>
      <Vasil/>
      <Footer/>
    </div>
  )
}

export default Global
