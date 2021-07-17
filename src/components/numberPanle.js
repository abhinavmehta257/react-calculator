import Button from "./button";

const NumberPanle = ({clickHandler}) => {
    let handleClick = buttonName => {
        clickHandler(buttonName);
      };
    return (
        <>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="AC" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="+/-" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="%" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="&#247;" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="7" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="8" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="9" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="x" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="4" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="5" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="6" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="-" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="1" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="2" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="#9e9e9e" text="3" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="+" ></Button>
            <Button col={2} clickHandler={handleClick} bgColor="#9e9e9e" text="0" ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="." ></Button>
            <Button col={1} clickHandler={handleClick} bgColor="orange" text="=" ></Button>
        </>
    )
}

export default NumberPanle
