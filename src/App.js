import './App.css';
import Front from './components/Front';
import { useGlobalContext } from './components/Context';
import { useEffect } from 'react';



function App() {
  const weather = useGlobalContext();
  console.log(weather);

  useEffect(() => {
    weather.fetchLocation();
  }, [])

  return (
    <>
    <Front/>
    </>
  );
}

export default App;
