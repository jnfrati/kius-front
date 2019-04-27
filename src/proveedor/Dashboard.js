import React, { Component } from 'react'
import {colas} from '../fakedb';
export class Dashboard extends Component {
  state = {
    colas
  }
  renderFilas = ()=>{
    return this.state.colas.map((cola)=>{
      return  <tr>
              <td>{cola.nombre}</td> 
              <td>{cola.creador}</td>
              <td>{cola.permiso}</td>
              <td>{this.renderBotonEditar(cola.permiso)}</td>
              <td>{this.renderBotonBorrar(cola.permiso)}</td>
              <td>{this.renderBotonInvitar(cola.permiso)}</td>
              <td><button className="btn btn-danger">Salir</button></td>
              </tr>;
    })
  }
  renderBotonEditar = (permiso)=>{
    switch (permiso) {
      case "Gestor":
        return <button className="btn btn-warning" disabled>Editar</button>
      default:
        return <button className="btn btn-warning">Editar</button>
    }
  }

  renderBotonBorrar = (permiso)=>{
    switch (permiso) {
      case "Administrador":
        return <button className="btn btn-danger">Borrar</button>
      default:
        return <button className="btn btn-danger" disabled>Borrar</button>
    }
  }

  renderBotonInvitar = (permiso)=>{
    switch (permiso) {
      case "Gestor":
        return <button className="btn btn-primary" disabled>Invitar</button>
      default:
        return <button className="btn btn-primary">Invitar</button>
    }
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Colas</th>
            <th scope="col">Permiso</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
            <th scope="col">Invitar</th>
            <th scope="col">Salir</th>
          </tr>
        </thead>
        <tbody>
          {this.renderFilas()}
        </tbody>
      </table>
    )
  }
}

export default Dashboard
