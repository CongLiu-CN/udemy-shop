import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Vega } from 'react-vega';

// const spec = {
//   "$schema": "https://vega.github.io/schema/vega/v5.json",
//   "description": "An interactive world map supporting pan and zoom.",
//   "width": 920,
//   "height": 800,
//   "autosize": "none",

//   "signals": [
//     { "name": "tx", "update": "width / 2" },
//     { "name": "ty", "update": "height / 2" },
//     {
//       "name": "scale",
//       "value": 2800,
//       "on": [{
//         "events": {"type": "wheel", "consume": true},
//         "update": "clamp(scale * pow(1.0005, -event.deltaY * pow(16, event.deltaMode)), 2800, 100000)"
//       }]
//     },
//     {
//       "name": "angles",
//       "value": [0, 0],
//       "on": [{
//         "events": "mousedown",
//         "update": "[rotateX, centerY]"
//       }]
//     },
//     {
//       "name": "cloned",
//       "value": null,
//       "on": [{
//         "events": "mousedown",
//         "update": "copy('xxx')"
//       }]
//     },
//     {
//       "name": "start",
//       "value": null,
//       "on": [{
//         "events": "mousedown",
//         "update": "invert(cloned, xy())"
//       }]
//     },
//     {
//       "name": "drag", "value": null,
//       "on": [{
//         "events": "[mousedown, window:mouseup] > window:mousemove",
//         "update": "invert(cloned, xy())"
//       }]
//     },
//     {
//       "name": "delta", "value": null,
//       "on": [{
//         "events": {"signal": "drag"},
//         "update": "[drag[0] - start[0], start[1] - drag[1]]"
//       }]
//     },
//     {
//       "name": "rotateX", "value": 95,
//       "on": [{
//         "events": {"signal": "delta"},
//         "update": "angles[0] + delta[0]"
//       }]
//     },
//     {
//       "name": "centerY", "value": 49.5,
//       "on": [{
//         "events": {"signal": "delta"},
//         "update": "clamp(angles[1] + delta[1], -60, 60)"
//       }]
//     }
//   ],

//   "projections": [
//     {
//       "name": "xxx",
//       "type": "conicConformal",
//       "scale": {"signal": "scale"},
//       "rotate": [{"signal": "rotateX"}, 0, 0],
//       "center": [10, {"signal": "centerY"}],
//       "translate": [{"signal": "tx"}, {"signal": "ty"}]
//     }
//   ],

//   "data": [
//     {
//       "name": "cities",
//       "url": "https://raw.githubusercontent.com/CongLiu-CN/data/main/ontario-colleges.csv",
//       "format": {"type": "csv", "parse": "auto"},
//       "transform": [
//         {
//           "type": "geopoint",
//           "projection": "xxx",
//           "fields": ["longitude", "latitude"]
//         }
//       ]
//     },
//     {
//       "name": "canada",
//       "url": "https://raw.githubusercontent.com/CongLiu-CN/data/main/CAN_adm1.json",
//       "format": { "type": "topojson", "feature": "CAN_adm1" },
//       "transform": [
//         {"type": "geopath", "projection": "xxx"}
//       ]
//     },
//     {
//       "name": "ontarioData",
//       "source":"canada",
//       "transform": [
//         {
//           "type":"filter", 
//           "expr": "datum.properties.NAME_1 == 'Ontario'"
//         },
//         {"type": "geopath", "projection": "xxx"}
//       ]
//     }
//   ],

//   "marks": [
//     {
//       "type": "path",
//       "from": {"data": "ontarioData"},
//       "encode": {
//         "enter": {
//           "fill": {"value": "pink"},
//           "stroke":{"value": "white"}
//         },
//         "update":{
//           "path": {"field": "path"},
//           "fill": {                   
//             "value": "#ECF6FF"
//           },
//           "stroke":{"value": "#5FA1D5"}
//         },
//         "exit": {"stroke": {"value": "white"}}
//       }
//     },
//     {
//       "type": "symbol",
//       "from": {"data": "cities"},
//       "encode": {
//         "enter": {
//           "size": {"value": 200},
//           "fill": {"value": "#4269F2"},
//           "fillOpacity": {"value": 0.3},
//           "stroke": {"value": "#5FA1D5"},
//           "strokeWidth": {"value": 1},
//           "tooltip": {
//             "signal": "datum.name"
//           }
//         },
//         "update": {
//           "x": {"field": "x"},
//           "y": {"field": "y"}
//         }
//       }
//     }
//   ]
// }

const spec = (width) => {
  console.log({width})
  
  const string = `{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"An interactive world map supporting pan and zoom.","width":${width/2.2},"height":${width/2.5},"autosize":"none","signals":[{"name":"tx","update":"width / 2"},{"name":"ty","update":"height / 2"},{"name":"scale","value":${width*1.45},"on":[{"events":{"type":"wheel","consume":true},"update":"clamp(scale * pow(1.0005, -event.deltaY * pow(16, event.deltaMode)), 2500, 100000)"}]},{"name":"angles","value":[0,0],"on":[{"events":"mousedown","update":"[rotateX, centerY]"}]},{"name":"cloned","value":null,"on":[{"events":"mousedown","update":"copy('xxx')"}]},{"name":"start","value":null,"on":[{"events":"mousedown","update":"invert(cloned, xy())"}]},{"name":"drag","value":null,"on":[{"events":"[mousedown, window:mouseup] > window:mousemove","update":"invert(cloned, xy())"}]},{"name":"delta","value":null,"on":[{"events":{"signal":"drag"},"update":"[drag[0] - start[0], start[1] - drag[1]]"}]},{"name":"rotateX","value":95,"on":[{"events":{"signal":"delta"},"update":"angles[0] + delta[0]"}]},{"name":"centerY","value":49.4,"on":[{"events":{"signal":"delta"},"update":"clamp(angles[1] + delta[1], -60, 60)"}]},{"name":"clicked","value":null,"on":[{"events":{"markname":"college-pin","type":"click","consume":true},"update":"datum.name"}]}],"projections":[{"name":"xxx","type":"conicConformal","scale":{"signal":"scale"},"rotate":[{"signal":"rotateX"},0,0],"center":[11,{"signal":"centerY"}],"translate":[{"signal":"tx"},{"signal":"ty"}]}],"data":[{"name":"cities","url":"https://raw.githubusercontent.com/CongLiu-CN/data/main/ontario-colleges.csv","format":{"type":"csv","parse":"auto"},"transform":[{"type":"geopoint","projection":"xxx","fields":["longitude","latitude"]}]},{"name":"canada","url":"https://raw.githubusercontent.com/CongLiu-CN/data/main/CAN_adm1.json","format":{"type":"topojson","feature":"CAN_adm1"},"transform":[{"type":"geopath","projection":"xxx"}]},{"name":"ontarioData","source":"canada","transform":[{"type":"filter","expr":"datum.properties.NAME_1 == 'Ontario'"},{"type":"geopath","projection":"xxx"}]}],"marks":[{"type":"path","from":{"data":"ontarioData"},"encode":{"enter":{"fill":{"value":"pink"},"stroke":{"value":"white"}},"update":{"path":{"field":"path"},"fill":{"value":"#ECF6FF"},"stroke":{"value":"#5FA1D5"}},"exit":{"stroke":{"value":"white"}}}},{"name":"college-pin","type":"symbol","from":{"data":"cities"},"encode":{"enter":{"size":{"value":200},"fill":{"value":"#4269F2"},"fillOpacity":{"value":0.3},"stroke":{"value":"#5FA1D5"},"strokeWidth":{"value":1},"tooltip":{"signal":"datum.name"}},"update":{"x":{"field":"x"},"y":{"field":"y"}}}}]}`
  return JSON.parse(string)
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

  //refactor
  const spaceToDash = (x) => {
    if(x.includes(` `)){
      const y = x.replace(" ", "-")
      return y
    }
    return x
  }

  let navigate = useNavigate();

  function handleClick(...args){
    const collegeString = args[1]
    console.log(`college returned from map: `, collegeString)
    const collegeWithDash = spaceToDash(collegeString)
    console.log(`dashed: `, collegeWithDash)
    navigate(`./${collegeWithDash}`)
  }

  // better declare outside of render function
  const signalListeners = { clicked: handleClick };

  return (
      <Vega spec={spec(width)} actions={false} signalListeners={signalListeners} />
  );
}

export default Ontario;