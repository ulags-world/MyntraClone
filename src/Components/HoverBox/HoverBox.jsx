import React from 'react'
import { men } from '../NavData'
function HoverBox({data , dropDownBox}) {
  return (
    <div style={{display:"none"}} ref={dropDownBox}>
        {console.log("data",data)}
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
    </div>
  )
}

export default HoverBox