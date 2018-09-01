import React, { Component } from 'react'




export default class controller extends Component {
  selectLayer(date){
    //console.log(date);
    this.props.selectLayer(date);
  }

  render() {
    let dates=this.props.dateList.map(date=>{
      return (
        <li key={date} onClick={this.selectLayer.bind(this,date)}>{date}</li>
      )
    })
    //console.log(dates)
    return (
      <ul>
        {dates}
      </ul>

    )

  }

}