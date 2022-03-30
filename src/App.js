import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/test1' exact element={<Test1 />}></Route>
        <Route path='/test2' element={<Test2 />}></Route>
        <Route path='/test3' element={<Test3 />}></Route>
      </Routes>
    </>
  );
}

export default App;
