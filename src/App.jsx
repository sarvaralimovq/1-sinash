import { useContext } from 'react';
import './App.scss';
import { Context } from './Context/Context';
import Header from './companents/Header/Header';
import Hero from './companents/Hero/Hero';

function App() {
  const {svet, setSvet} = useContext(Context)
  return (
    <div className={svet == true? 'light App':'App dark' }>
        <Header/>
        <Hero/>
    </div>
  );
}

export default App;
