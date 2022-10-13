import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Ceremony from './components/Ceremony';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Ceremony />
    </div>
  );
}

export default App;
