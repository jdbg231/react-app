import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Item from "./components/Item/item";
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "./components/ItemList/ItemList";

function App() {

  return (<>
          <div>
              <NavBar mensaje={"hola"} variant={"success"}/>
              <ItemCount/>
          </div>
          {/*<div>*/}
          {/*    <Item/>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <ItemCount/>*/}
          {/*</div>*/}
      </>
  );
}

export default App;
