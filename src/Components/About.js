import React,{useEffect} from 'react'
import Main from "./Main"
import { useGlobalContext } from '../Context';
const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);
  return (
    <Main/>
  )
}

export default About