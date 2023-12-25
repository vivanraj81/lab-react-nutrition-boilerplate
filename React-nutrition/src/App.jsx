// import React from 'react'


import React, { Component } from 'react'
import FoodData from '../resources/FoodData'
import Foodbox from './component/FoodBox'

export default class App extends Component {
  state={
    inp:""
  }

  change_inp=(e)=>{
    this.setState(()=>{
      return{
        inp:e.target.value
      }
    })
  }



  render() {
    let filterdata=FoodData.filter((item)=>{
      if(item.name.startsWith(this.state.inp)){
        return item
      }
    })


    return (
      <>
      <div className="searchBox">

        <input type="text" placeholder='Search by item name' value={this.state.inp} onInput={this.change_inp} />
      </div>
    
        {filterdata.length === 0 ? (
          <div className='Nothing'>No Results Found</div>
        ) : (
          filterdata.map((item) => (
            <Foodbox key={item.id} food={item} />
          ))
        )}
      </>
    );
  }
}