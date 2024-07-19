import React from 'react'
import logo from "../../images/logo.svg"

const Header = ({searchFood,filteredbtn,filteredFood}) => {
  return (
    <header>
      <div className="logo_input">
        <img src = {logo} alt="logo" />
         <input
         onChange={searchFood}
         type="text" placeholder='Search Food....' />
      </div>
      <div className="btns">
        {
          filteredbtn.map((value)=>(
        <button key={value.name} onClick={()=>filteredFood(value.type)}>{value.name}</button>
      ))}
      </div>
    </header>
  )
}

export default Header
