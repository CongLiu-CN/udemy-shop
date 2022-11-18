import {useState, useEffect} from 'react';
// import { useNavigate } from "react-router-dom";
import { Vega } from 'react-vega';

const spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 500,
  "height": 600,
  "padding": {"top": 0, "left": 0, "right": 0, "bottom": 0},
  "signals": [
    { "name": "scale", "value": 2200,
      "bind": {"input": "range", "min": 500, "max": 4500, "step": 1} },
    { "name": "rotate0", "value": 95,
      "bind": {"input": "range", "min": -180, "max": 180, "step": 1} },
    { "name": "rotate1", "value": 0,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1} },
    { "name": "center0", "value": 9,
      "bind": {"input": "range", "min": -180, "max": 180, "step": 1} },
    { "name": "center1", "value": 50,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1} },
    { "name": "translate0", "update": "width / 2" },
    { "name": "translate1", "update": "height / 2" }
  ],
  "data": [
    {
      "name": "cities",
      "url": "https://raw.githubusercontent.com/CongLiu-CN/data/main/ontario-colleges.csv",
      "format": {"type": "csv", "parse": "auto"},
      "transform": [
        {
          "type": "geopoint",
          "projection": "xxx",
          "fields": ["longitude", "latitude"]
        }
      ]
    },
    {
      "name": "canada",
      "url": "https://raw.githubusercontent.com/CongLiu-CN/data/main/CAN_adm1.json",
      "format": { "type": "topojson", "feature": "CAN_adm1" },
      "transform": [
        {"type": "geopath", "projection": "xxx"}
      ]
    },
    {
      "name": "ontarioData",
      "source":"canada",
      "transform": [
        {
          "type":"filter", 
          "expr": "datum.properties.NAME_1 == 'Ontario'"
        },
        {"type": "geopath", "projection": "xxx"}
      ]
    }
  ],
  "scales": [],
  "projections": [
    {
      "name": "xxx",
      "type": "conicConformal",
      "scale": {"signal": "scale"},
      "rotate": [
        {"signal": "rotate0"},
        {"signal": "rotate1"}
      ],
      "center": [
        {"signal": "center0"},
        {"signal": "center1"}
      ],
      "translate": [
        {"signal": "translate0"},
        {"signal": "translate1"}
      ]
    }
  ],
  "marks": [
    {
      "type": "path",
      "from": {"data": "ontarioData"},
      "encode": {
        "enter": {
          "fill": {"value": "pink"},
          "stroke":{"value": "white"}
        },
        "update":{
          "path": {"field": "path"},
          "fill": {                   
            "value": "#ECF6FF"
          },
          "stroke":{"value": "#5FA1D5"}
        },
        "exit": {"stroke": {"value": "white"}}
      }
    },
    {
      "type": "symbol",
      "from": {"data": "cities"},
      "encode": {
        "enter": {
          "size": {"value": 20},
          "fill": {"value": "#4269F2"},
          "fillOpacity": {"value": 0.7},
          "stroke": {"value": "#5FA1D5"},
          "strokeWidth": {"value": 0.5},
          "tooltip": {
            "signal": "datum.name"
          }
        },
        "update": {
          "x": {"field": "x"},
          "y": {"field": "y"}
        }
      }
    }
  ]
}


const Ontario = () => {

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
  
    window.addEventListener('resize', handleResize)
  
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  
  const {
    width
  } = dimensions

  return (
      <Vega spec={spec} actions={false}/>
  );
}

export default Ontario;