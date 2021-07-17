import React from 'react'

const Display = ({value}) => {
    return (
        <>
        <div style = {{backgroundColor:'gray',display:'flex', alignItems:'center', justifyContent:'flex-end',width:'100%', height:'25vh', outline:'none'}}>
            <span style= {{marginRight:'20px' ,fontSize:'80px', color:'white'}}>
                {value}
            </span>
        </div>   
        </>
    )
}

export default Display
