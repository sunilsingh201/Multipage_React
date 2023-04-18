import React,{useEffect} from 'react'
import Main from "./Main"
import { useGlobalContext } from '../Context';
import Services from "./Services"
const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);
  return (
  <>
    <Main/>
    <Services/>
  </>
  
  )
}

export default Home