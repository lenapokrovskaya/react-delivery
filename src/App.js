// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Main } from './pages/Main/Main';
import { Basket } from './pages/Basket/Basket';
import { Form } from './pages/Form/Form';

function App() {
  return (
    <div className="App">
      {/* <Main></Main>
      <Basket></Basket> */}
      <Routes>
        <Route path="react-delivery" element={<Main />} />
        <Route path="basket" element={<Basket />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
