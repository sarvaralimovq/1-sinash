import { useContext } from 'react';
import './App.scss';
import { Context } from './Context/Context';
import Header from './companents/Header/Header';

function App() {
  const {svet, setSvet} = useContext(Context)
  return (
    <div className={svet == true? 'light App':'App dark' }>
        <Header/>
    </div>
  );
}

export default App;
