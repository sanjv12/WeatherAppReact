import './App.css';
import Searchbar from './components/SearchBar.jsx'
import { AppProvider } from "./context/AppContext.jsx";
import WeatherCard from './components/WeatherCard.jsx';
function App() {
  // const weather = useAppContext();
  return (
    <div className="App">
      <h1>Hi, Welcome to WeatherNow</h1>
      <AppProvider>
        <Searchbar/>  
        <WeatherCard/>     
      </AppProvider>
    </div>
  );
}

export default App;
