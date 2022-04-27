import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
