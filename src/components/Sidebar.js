import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
        // <!-- Sidebar -->
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          {/* <!-- Sidebar - Brand --> */}
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
              <i className="fab fa-kickstarter-k"></i>
            <div className="sidebar-brand-text mx-3">KIUS</div>
          </Link>
    
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0"></hr>
    
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard" >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
    
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider"></hr>
    
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard/create">
              <i className="fas fa-plus-circle"></i>
              <span>Crear nueva cola</span>
            </Link>
          </li>
    
    
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider"></hr>
    
          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          {/* <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div> */}
    
        {/* <!-- End of Sidebar --> */}
        </ul>
    )
  }
}

export default Sidebar
