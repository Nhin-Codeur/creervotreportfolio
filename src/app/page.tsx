
'use client'
import Header from '../components/header/header'
import Presentation from '../components/presentation/presentation'
import Apropos from '../components/apropos/apropos'

import MesCompetences from '../components/mescompetences/mescompetences'
import Portfolio from '../components/portfolio/portfolio'
import Contacts from '../components/contact/contact'
import Footer from '../components/footer/footer'
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const ref1 = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    if (ref1.current) {
      var index = 1;
      var found = false

      console.log(ref1.current.children)

      // check if scroll at bottom
      if (Math.round(document.documentElement.clientHeight + document.documentElement.scrollTop) == document.documentElement.scrollHeight) {
        setCurrentSection(4);
        return;
      }

      while (
        // ref1.current.children[];
        index < ref1.current.children.length - 2
        && !found
      ) {
        // console.log(rect.getBoundingClientRect());
        var posDim = ref1.current.children[index].getBoundingClientRect();
        var limit = Math.max(document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight);

        if (offset + 50 / 2 < posDim.height + posDim.top + window.scrollY) {
          console.log(ref1.current.children[index].innerHTML)
          found = true;

        } else {
          index += 1;
        }
      }
      setCurrentSection(index - 1);
    }
  }, [offset]);




  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div ref={ref1}>
        <Header currentSection={currentSection} sectionList={ref1}></Header>
        <Presentation ></Presentation>
        <MesCompetences></MesCompetences>
        <Portfolio></Portfolio>
        <Apropos></Apropos>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </>

  )
}
