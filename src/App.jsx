import React from 'react'
import "./styles.css";
import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'


const siteProps = {
  name: "Faith Zekeli",
  title: "Web Designer & blog writer",
  email: "faithzekeli@example.com",
  gitHub: "faithzek",
  instagram: "faithzekeli",
  linkedIn: "Faith Zekeli",
  medium: "",
  twitter: "faithzekeli",
  youTube: "faithzekeli",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  

  return (
    <>
    <div className="maim">
      <Header />
      <Home name={siteProps.name} title={siteProps.title}/>
      <About  />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
      
    </>
  )
}

export default App
