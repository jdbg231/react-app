import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (<>
          <div>
              <NavBar mensaje={"hola"} variant={"success"}/>
          </div>
          <ItemListContainer values={[
              {color: "red", text: "hello there", bold: true},
              {color: "blue", text: "bye"},
              {color: "green", text: "hola"},

          ]} />


      </>

  );
}

export default App;
