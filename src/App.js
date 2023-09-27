import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Card from './Component/cards/Card';
import { Originals,Comedy,Action } from './Static/urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card title="NetFlix Original" url={Originals} />
      <Card title="Comedy" url={Comedy}/>
      <Card title="Action" url={Action}/>
     
    </div>
  );
}

export default App;
