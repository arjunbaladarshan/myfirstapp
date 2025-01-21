import Logo from './parts/Logo';
import Menu from './parts/Menu';
import Sidebar from './parts/Sidebar';
import MainContent from './parts/MainContent';
import Footer from './parts/Footer';
import React from 'react';

function FacultyCard(props){
  return(
    <>
      <div className='col-3'>
        <div class="card">
          {props.src!=undefined && <img src={props.src} class="card-img-top" alt="..." />}
          {props.src==undefined && <img src="https://banner2.cleanpng.com/20190211/eet/kisspng-computer-icons-scalable-vector-graphics-user-profi-login-user-name-svg-png-icon-free-download-21379-1713906519828.webp" class="card-img-top" alt="..." />}
          
          <div class="card-body">
            {props.name!=undefined && <h5 class="card-title"> { props.name } </h5>}
            {props.name==undefined && <h5 class="card-title"> No Name Provided </h5>}
            <Seperator/>
            {props.desc!=undefined && <p class="card-text"> { props.desc } </p>}
            {props.desc==undefined && <p class="card-text"> No Desc Provided </p>}
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  );
}


class Seperator extends React.Component{
  render(){
    return("==============");
  }
}

function App() {
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <FacultyCard name="Arjun Bala" desc="this is basic desc" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"/>
          <FacultyCard src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"/>
          <FacultyCard name="gopi mam" desc="asdf" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"/>
          <FacultyCard />
          <FacultyCard name="naimish sir" />
          <FacultyCard desc="kya sir che"/>
        </div>
      </div>
    </>
  );
}

export default App
