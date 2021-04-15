import Header from "./Header/Header"
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {useState} from "react";

function App() {

    const [test, setTest] = useState([
        // {name: 'Купить машину', favorites: false, selected: false},
        // {name: 'Прочитать книгу', favorites: false, selected: false},
        // {name: 'Сходить в магазин', favorites: false, selected: false}
    ])
    console.log(test)
  return (
      <div className='main-wrap'>
          <Header />
          <Main todosArray = {test} setArray = {setTest}/>
          <Footer todosArray = {test} setArray = {setTest}/>
      </div>
  );
}

export default App;
