import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './proveedor/Dashboard';
import CreateColaForm from './proveedor/colas/CreateColaForm';


class App extends Component {
  render() {
    return (
      // <!-- Page Wrapper -->
      <Router>
      <div id="wrapper">
    
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}
    
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
    
          {/* <!-- Main Content --> */}
          <div id="content">
    
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}
    
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
    
              {/* <!-- Page Heading --> */}
              {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800"></h1>
              </div> */}
              {/* <!-- Content Row --> */}
              <div className="row">
                <Route path="/" exact component={Dashboard}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/dashboard/create" component={CreateColaForm} /> 
              </div>
              {/* <!-- End Content Row--> */}
            </div>
            {/* <!-- /.container-fluid --> */}
    
          </div>
          {/* <!-- End of Main Content --> */}
    
          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; KIUS 2019</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
    
        </div>
        {/* <!-- End of Content Wrapper --> */}
  
        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
  
      </div>
      </Router>
      // <!-- End of Page Wrapper -->
    );
  }
}

export default App;
