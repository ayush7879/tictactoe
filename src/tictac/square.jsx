import React from 'react'

const Square=(props)=> {
  return (
    <div 
    onClick={props.onClick}
    style={{border:'1px solid',height:"100px",width:"100%",display:"flex"
    ,justifyContent:"center",
    alignitems:"center",
    
    }} className='Square'>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square