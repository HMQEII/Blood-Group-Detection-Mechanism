import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import Footer from './components/Footer';
import BloodLoad from './components/BloodLoad';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src="./blood.png" className="App-logo" alt="logo" /> */}
        <BloodLoad/>
        <h2 className="text-4xl font-bold text-white p-4">Blood Group Detection System</h2>
        {/* <Loader/> */}
        <Footer/>
      </header>
    </div>
  );
}

export default App;
