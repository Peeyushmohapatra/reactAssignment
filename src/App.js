
import './App.css';
import Boxes from './Component/Boxes';


function App() {
  return (
    <div className="App">
      <Boxes colorCode="#FF6663" colorName="PINK" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#333333" colorName="GRAY" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#000000" colorName="BLACK" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#38BB14" colorName="GREEN" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#C90B0B" colorName="RED" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#FF8000" colorName="ORANGE" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#FFF500" colorName="YELLOW" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#CCCCCC" colorName="LIGHTGRAY" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#7E41A2" colorName="PURPLE" boxShadow="0 0 10px black"/>
      <Boxes colorCode="#C14911" colorName="BROWN" boxShadow="0 0 10px black"/>
    </div>
  );
}

export default App;
