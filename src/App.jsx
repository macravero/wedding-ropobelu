import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Ceremony from './views/Ceremony';
import Party from './views/Party';
import Gifts from './views/Gifts';
import Rsvp from './views/Rsvp';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Ceremony />
      <Party />
      <Gifts />
      <Rsvp />
    </div>
  );
}

export default App;
