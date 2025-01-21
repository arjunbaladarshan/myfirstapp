import Logo from './parts/Logo';
import Menu from './parts/Menu';
import Sidebar from './parts/Sidebar';
import MainContent from './parts/MainContent';
import Footer from './parts/Footer';

function Seperator(props){
  let data = "";
  for(let i=0;i<props.count;i++){
    data+=props.by;
  }
  return(data);
}

function App() {
  
  return (
    <>
      <h1>arjun</h1>
      <Seperator by="=" count="10"/>
      <h1>bala</h1>
      <Seperator by="-" count="210"/>
      <h1>darshan</h1>
      <Seperator by="%" count="5"/>
    </>
  );
}

export default App
