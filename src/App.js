import './App.css';
import axios from 'axios';
import { useEffect,useState } from "react"
import City from './City';

export default function App() {
  const key = "a496af1ab52eecf59c4635adf89789bb";
  const [city,setCity] = useState();
  const [search,setSearch] = useState(" ");
  useEffect(() => {
    async function GetApi() {
      try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
      );
     setCity(response.data)
      } catch (error){
          console.log(error)
      }
    }
    GetApi();
  }, [search]);
  return (
    <div className="App">
     <h1>Hava Durumunu Ogrenmek Istediginiz Ulkenin/Sehrin Ismini Kutucuga Giriniz.</h1> 
      <input type="text" placeholder="Bir Ulke/Sehir ismi giriniz" onChange={(e)=>setSearch(e.target.value)} className="searchBox"/>
      {city && <City city={city} />}
    </div>
  );
}

