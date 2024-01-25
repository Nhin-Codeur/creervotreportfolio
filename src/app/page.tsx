
import Header from '../components/header/header'
import Presentation from '../components/presentation/presentation'
import Apropos from '../components/apropos/apropos'

import MesCompetences from '../components/mescompetences/mescompetences'
import Portfolio from '../components/portfolio/portfolio'
import Contacts from '../components/contact/contact'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Presentation></Presentation>
      <MesCompetences></MesCompetences>
      <Portfolio></Portfolio>
      <Apropos></Apropos>
      <Contacts></Contacts>
      <Footer></Footer>
    </>

  )
}
