const Button = ({text, bgColor,col, clickHandler}) => {

    let handleClick = () => {
        clickHandler(text);
      };
    return (
        <>
         <button  onClick={handleClick} style={{borderColor:'black', backgroundColor:bgColor, border:'solid 1px', width:col*25+'%',height:'15vh', fontSize:'40px'}}>
             {text}
         </button>   
        </>
    )
}


export default Button
