import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import {BrowserRouter as Br,Routes as Rs,Route as R} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Categories from './components/Categories';

function App() {
  return (
    <div>
    <Br>
    <Rs>
      <R path='' element={<Signup/>}/>
      <R path='/login' element={<Login/>}/>
      <R path='/store/:email' element={
        <div className='App'>
          <Content/>
          <Footer/>
        </div>
      }/>
      <R path='/signup' element={<Signup/>}/>
      <R path='/categories/:email' element={<Categories/>}/>
    </Rs>
    </Br>
    </div>
  );
}

export default App;
