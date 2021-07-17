const Button = ({text, bgColor,col}) => {
    return (
        <>
         <button style={{borderColor:'black', backgroundColor:bgColor, border:'solid 1px', width:col*25+'%',height:'15vh', fontSize:'40px'}}>{text}</button>   
        </>
    )
}


export default Button
