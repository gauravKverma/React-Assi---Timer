import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer initial={0} end={10}/> 
    </div>
  );
}

export default App;
