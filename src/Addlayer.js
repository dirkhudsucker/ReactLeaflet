import React, { Component } from 'react'
import {  TileLayer} from 'react-leaflet'



export default class AddLayer extends Component {
  

  render() {
      let start=this.props.start;
      let end=this.props.end;
      console.log(start)
      let url= `https://api2.terravion.com/users/5bad4dfa-7262-4a0a-b1e5-da30793cec65/{z}/{x}/{y}.png?epochStart=${start}&epochEnd=${end}&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa&product=NC`


    return(
        <TileLayer

        url={url}
        tms= 'true'
                   attribution= 'TerrAvion'
        />
    );
  }
   

}