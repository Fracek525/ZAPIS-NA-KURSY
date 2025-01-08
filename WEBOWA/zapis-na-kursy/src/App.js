import './App.css';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {

  const Zapisz = (e) => {
    e.preventDefault();
    console.log(`${name || "Nie wpisano danych"}`);
    console.log(`${kursy[wybranyKurs - 1]  || "Nie wybrano kursu"}`);
  }

  const [kursy, setKursy] = useState([
    "Programowanie w c#",
    "Angular dla początkujących",
    "Kurs Django"
  ]);

  const dodajKurs = () => {
    const nowyKurs = `Nowy kurs ${kursy.length + 1}`;
    setKursy([...kursy, nowyKurs]);
  }


  const [name, setName] = useState('');

  const [wybranyKurs, setWybranyKurs] = useState('');

  return (
    <>
      <div>
        <h1>Liczba kursów: 3</h1>
        <ol>
          {kursy.map((kurs,index) =>(
            <li key={index}>{kurs}</li>
          ))}
        </ol>

        <label htmlFor="Imię i nazwisko:">Imię i nazwisko</label>
        <input className="form-control" 
        type="text" 
        value={name} 
        placeholder='Imię i nazwisko'
        onChange={(e) => setName(e.target.value)}></input>

        <label htmlFor="Numer kursu">Numer kursu</label>
        <input className="form-control" 
        type="number" 
        value={wybranyKurs}
        onChange={(e) => setWybranyKurs(e.target.value)}></input>
      </div>

      <button id="przycisk"
      className="btn btn-primary"
      type="submit"
      onClick={Zapisz}
      >Zapisz do kursu</button>
    </>
  );
}

export default App;
