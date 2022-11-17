import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Vega } from 'react-vega';

const spec = (width) => {
  const string = `{"$schema":"https://vega.github.io/schema/vega/v5.json","width":${width/2.1},"height":${width/2.3},"padding":{"top":0,"left":0,"right":0,"bottom":0},"signals":[{"name":"clicked","value":null,"on":[{"events": {"markname":"provinces","type":"click","consume": true},"update":"datum.properties.NAME_1"}]}],"data":[{"name":"canada","url":"https://raw.githubusercontent.com/CongLiu-CN/data/main/CAN_adm1.json","format":{"type":"topojson","feature":"CAN_adm1"},"transform":[{"type":"geopath","projection":"xxx"}]}],"scales":[{"name":"growth-color","type":"ordinal","domain":{"data":"canada","field":"properties.NAME_1"},"range":{"scheme":"category20"}}],"projections":[{"name":"xxx","type":"conicConformal","scale":${width/1.7},"rotate":[95,0],"parallels":[49,77],"center":[0,63],"translate":[{"signal":"width/2"},{"signal":"height/2"}]}],"marks":[{"name":"provinces","type":"path","from":{"data":"canada"},"encode":{"enter":{"fill":{"value":"pink"},"stroke":{"value":"white"},"tooltip":{"signal":"{'Province': datum.properties.NAME_1}"}},"update":{"path":{"field":"path"},"fill":{"value":"pink"},"stroke":{"value":"white"}},"hover":{"strokeWidth":{"value":0.5},"stroke":{"value":"black"},"zindex":{"value":1},"fill":{"field":"properties.NAME_1","scale":"growth-color"}},"exit":{"stroke":{"value":"white"}}}}]}`
  return JSON.parse(string)
}


const Canada = () => {

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

  let history = useNavigate();
  function handleClick(...args){
    console.log(args[1]);
    history(`/${args[1]}`)
  }
  // better declare outside of render function
  const signalListeners = { clicked: handleClick };

  return (
      <Vega spec={spec(width)} actions={false} signalListeners={signalListeners}/>
  );
}

export default Canada;