import Display from "./components/display";
import NumberPanle from "./components/numberPanle";
function App() {

  let total = 10;
  return (
    <div className="container" style={{color:'whi'}}>
      <Display total={total} /> 
      <NumberPanle />
    </div>
  );
}

export default App;
