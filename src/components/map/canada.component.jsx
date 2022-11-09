
import { Vega } from 'react-vega';

const spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 900,
  "height": 560,
  "padding": {"top": 0, "left": 0, "right": 0, "bottom": 0},
  "signals": [
    {
      "name": "scale",
      "value": 650,
      "on": [{
        "events": 
        {
          "markname": "country-level", 
          "type": "click", 
          "consume": true
        },
        "update": "if(test(datum.pop.Province,'Ontario'), 1000, 650)"
      }]
    }
  ],
  "data": [
    {
        "name": "population",            
        "url": "https://raw.githubusercontent.com/gramener/vegatutorial/gh-pages/data/CAN_adm1.population.csv", 
        "format": {
          "type": "csv",      
          "parse": "auto" 
        }
      },
    {
      "name": "canada",
      "url": "https://raw.githubusercontent.com/gramener/vegatutorial/gh-pages/data/CAN_adm1.json",
      "format": { "type": "topojson", "feature": "CAN_adm1" },
      "transform": [
        {"type": "geopath", "projection": "xxx"},
        {                                 
            "type": "lookup",               
            "from": "population",            
            "key": "Province",            
            "fields": ["properties.NAME_1"],  
            "as": ["pop"]                   
          }
      ]
    }
  ],
  "scales": [
    {
      "name": "growth-color",
      "type": "ordinal",
      "domain": {"data": "population", "field": "Province"},
      "range": {"scheme": "category20"}
    }
  ],
  "projections": [
    {
      "name": "xxx",
      "type": "conicConformal",
      "scale": {"signal": "scale"},
      "rotate": [91, 0],
      "parallels": [49, 77],
      "center":[0, 63],
      "translate": [{"signal": "width/2"}, {"signal": "height/2"}]
    }
  ],
  "marks": [
    {
      "name": "country-level",
      "type": "path",
      "from": {"data": "canada"},
      "encode": {
        "enter": {
          "fill": {                   
            "value": "pink"
          },
          "stroke":{"value": "white"},
          "tooltip": {
            "signal": "{'Province': datum.pop.Province}"
          }
        },
        "update":{
          "path": {"field": "path"},
          "fill": {                   
            "value": "pink"
          },
          "stroke":{"value": "white"}
        },
        "hover": {
          "strokeWidth": {"value": 0.5},
          "stroke": {"value": "black"},
          "zindex": {"value": 1},
          "fill": {                   
            "field": "pop.Province",    
            "scale": "growth-color"
          }
        },
        "exit": {"stroke": {"value": "white"}}
      }
    }
  ]
}


const Canada = () => {
  return (
      <Vega spec={spec} />
  );
}

export default Canada;