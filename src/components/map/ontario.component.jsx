import {useState, useEffect} from 'react';
// import { useNavigate } from "react-router-dom";
import { Vega } from 'react-vega';

const spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 500,
  "height": 600,
  "padding": {"top": 0, "left": 0, "right": 0, "bottom": 0},
  "signals": [],
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
      "scale": 2800,
      "rotate": [
        {"signal": "95"},
        {"signal": "0"}
      ],
      "center": [
        {"signal": "6"},
        {"signal": "50"}
      ],
      "translate": [
        {"signal":"width/2"},
        {"signal":"height/2"}
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
          "size": {"value": 200},
          "fill": {"value": "#4269F2"},
          "fillOpacity": {"value": 0.3},
          "stroke": {"value": "#5FA1D5"},
          "strokeWidth": {"value": 1},
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
  return (
      <Vega spec={spec} actions={false} />
  );
}

export default Ontario;