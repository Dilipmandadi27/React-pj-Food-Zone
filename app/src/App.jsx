
import FetchedData from './assets/Components/FetchedData'
import Header from './assets/Components/Header'
import { useEffect, useState } from 'react'
import "./App.css"
import Footer from './assets/components/Footer'

 export const BASE_URL = "http://localhost:9000"

const App = ()=> {
  const[data,setData] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);
  const[filteredData,setFilteredData] = useState(null);
  const[selectedBtn,setSelectedBtn] = useState("all");

  
  

  useEffect(()=>{

    const fetchFoodData = async() =>{
  
      setLoading(true)
  
     try {
      const response =  await fetch(BASE_URL)
     
      const json =  await response.json()
      setData(json)
      setLoading(false)
      setFilteredData(json)
  
     } catch (error) {
      setError("Unable to Fetch data")
     }
    }
    fetchFoodData()
  }, [])


  const searchFood = (e)=>{
    const searchValue= e.target.value
    console.log(searchValue);

    if(searchValue === ""){
      setFilteredData(null)
    }
    const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  setFilteredData(filter)
  }

  const filteredFood = (type)=>{

 if (type ==="all"){
  setFilteredData(data)
  setSelectedBtn("all")
  return;
 }

 const filter = data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase())
  )
 setFilteredData(filter)
 setSelectedBtn(type)
  }


  const filteredbtn =[
    {
      name : "All",
      type : "all"

    },
    {
      name : "Breakfast",
      type : "breakfast"

    },
    {
      name : "Lunch",
      type : "lunch"

    },
    {
      name : "Dinner",
      type : "dinner"

    },
  ]
  
 if(error) return <div>{error}</div>
 if(loading) return <div>Loadingg...........</div>





  return (
    <>
      <Header searchFood={searchFood} filteredbtn={filteredbtn} filteredFood={filteredFood}/>
     <FetchedData data={filteredData}/>
     <Footer/>
    </>
  )
}

export default App
