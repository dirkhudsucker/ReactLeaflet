import React, { Component } from 'react'

import { Map, TileLayer,ZoomControl } from 'react-leaflet'

import Controller from './control';
import AddLayer from './Addlayer';

export default class leafletMap extends Component {
    constructor(){
        super();
        this.state={

            lng: -121.877271,
        
            lat: 38.540580,
        
            zoom: 15,

            time:[],

            epochList:[],

            epochStart:"",
            epochEnd:"",

            
        
          }
    }
  
  
  componentWillMount(){
    let epochUrl= 'https://api2.terravion.com/layers/getLayersFromBlockId?blockId=48ed28ca-d272-4d1f-bfe0-cb95b61eecbc&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa'
    
    
    fetch(epochUrl)
    .then((res) => res.json()) 
    .then(function(data) {
      
     
      let epochToTime=[];
      let list=[];
     data.reverse().forEach(element=>{
        let date=new Date(element['layerDateEpoch']*1000).toISOString().slice(0,10).split('-');
        list.push(element['layerDateEpoch']);
        epochToTime.push(`${date[1]}/${date[2]}/${date[0]}`)
        
    })
   
        //console.log(epochToTime)
        this.setState({
            time:epochToTime.slice(0,epochToTime.length-1),
            epochList: list
        })
   
     // console.log('state',this.state.time)
      }.bind(this))
      
     
  }
  selectLayer(date){
      //console.log(this.state.time.indexOf(date));
      
     this.setState({
         epochStart:  this.state.epochList[this.state.time.indexOf(date)],
         epochEnd:    this.state.epochList[this.state.time.indexOf(date)+1],
     })
     
     //console.log(this.state.epochStart)

      
  }



  render() {
    var apiUrl = 'https://api2.terravion.com'



        var access_token='2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa'

        var user_id='5bad4dfa-7262-4a0a-b1e5-da30793cec65'

        var epochStart='1456200627'

        var epochEnd='1456632627'

        var tileUrlTemplate = apiUrl + '/users/'+user_id+'/{z}/{x}/{y}.png?epochStart='+epochStart+'&epochEnd='+epochEnd+'&access_token='+access_token;
    
    const position = [this.state.lat, this.state.lng]

    return (
        <div>

      <Map className='map1'  center={position} zoom={this.state.zoom} zoomControl={false}>

        <TileLayer

          url="https://api.tiles.mapbox.com/v2/cgwright.ca5740e5/{z}/{x}/{y}.jpg"

        />

        <AddLayer start={this.state.epochStart} end={this.state.epochEnd}></AddLayer>
        <ZoomControl position="topright" />


      </Map>
      <h1>{this.state.epochStart}</h1>
      <Controller selectLayer={this.selectLayer.bind(this)} dateList={this.state.time}></Controller>
      
      </div>


    )

  }

}