import {Routes, Route} from 'react-router-dom' 
//screen
import Home from './screens/Home';
//components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header name='Bienvenue sur la planéte Mars'/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
