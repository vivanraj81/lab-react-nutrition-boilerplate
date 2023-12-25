import React, { Component } from 'react'
import "./Foodbox.css"

export default class Foodbox extends Component {

    state={
        val:0,
        cal:0
    }

    change_inp=(e)=>{
        this.setState(()=>{
            return{
                val:e.target.value
            }
        })
    }

    add=(cal1)=>{
        this.setState(()=>{
            return{
                val:this.state.val,
                cal:this.state.val*cal1
            }
        })

    }

    reset=()=>{
      this.setState(()=>{
        return{
            val:0,
            cal:0
        }
    })

    }


  render() {

    let data = this.props.food;
    // console.log(data)
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={data.img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{data.name}</strong> <br/>
                <small>{data.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.val} onChange={this.change_inp} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={()=>this.add(data.cal)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div className='detail'>
            {this.state.val } {data.name} ={this.state.cal} calories
        </div>
        <button onClick={this.reset} className='reset'>Reset</button>
      </div>
    )
  }
}