import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import DisplayProducts from './Pages/DisplayProducts';
import SellPage from './Pages/SellPage';


function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		  <Header></Header>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/all-products' element={<DisplayProducts/>}/>
				<Route path='/sell' element={<SellPage/>}/>
				<Route path="addProperties" element={<Home/>}/>
				
			</Routes>	
      	</BrowserRouter>
		<Footer></Footer>
    </div>
  );
}

export default App;
