import Logo from './parts/Logo';
import Menu from './parts/Menu';
import Sidebar from './parts/Sidebar';
import MainContent from './parts/MainContent';
import Footer from './parts/Footer';
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 m-3 border border-primary">
            <Logo/>
          </div>
          <div className="col m-3 border border-danger">
            <Menu />
          </div>
        </div>
        <div className='row'>
          <div className='col-4 m-3 border border-info'>
            <Sidebar />
          </div>
          <div style={{height:"300px"}} className='col m-3 border border-danger'>
            <MainContent/>
          </div>
        </div>
        <div className='row'>
          <div className='col m-3 border border-primary'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
