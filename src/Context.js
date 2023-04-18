import React, { useContext, useReducer, useEffect } from "react"
import reducer from "./reducer"; 

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  services:[]
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Sunil Singh",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Sunil Singh",
        image: "./images/about1.svg",
      },
    });
  };

 //Api call using fetch

 const getServices = async(API) =>{
    try{
        const response = await fetch(API);
        const getData = await response.json();
        dispatch({type:"GET_SERVICES",payload:getData});
    }
    catch(error){
        console.log(error)
    }
 };

 useEffect(()=>{
    getServices(API)
 },[])
  

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
