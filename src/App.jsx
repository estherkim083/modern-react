import "./styles.css";
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

export default function App() {
  

  return (
    <div className="container" style={{margin: '100px'}}>
      <CarForm/>
      <CarList/>
      <CarSearch/>
      <CarValue/>
    </div>
  );

}