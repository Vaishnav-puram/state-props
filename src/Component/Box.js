import React from 'react';
export default function Box(props){
  const [Color,setColor]=React.useState(props.value);
  const Style={
    backgroundColor:props.value? "#222222" : "transparent"
  }
  // function change(){
  //   setColor(prevColor=>!prevColor)
    
  // }
      return (
    // <div style={Style} className="box" onClick={change}></div>
    <div style={Style} className="box" onClick={()=>props.handClick(props.id)}></div>
      )

}