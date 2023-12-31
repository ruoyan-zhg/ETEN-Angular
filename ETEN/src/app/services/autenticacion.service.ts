import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }

  public guardarToken(token: string) {
    localStorage.setItem('token', token)
  }

  public eliminarToken() {
    if (this.getToken() != null) {
      localStorage.removeItem('token');
    }

  }

  //si falla el token es cuando intenta obtenerlo aqui
  public getToken() {
    return localStorage.getItem('token');
  }

  public isAdmin() {
    if (this.getToken() != null) {
      return this.obtenerUsuarioDelToken().es_administrador == 1;
    } else {
      return false;
    }
  }
  public isUsuarioLogueado() {
    return this.getToken() != null;
  }
  /*
  public verificarToken() {
    return this.httpClient.get<string>("http://localhost:8000/api/usuarios/verificacionToken");
  }
*/


  public comprobarToken() {
    const token = this.getToken();
    const decodedToken = jwt_decode(token!) as any;
    const expirationTime = decodedToken.exp * 1000; // Multiplica por 1000 para convertirlo a milisegundos
    const currentTime = Date.now();
    const timeRemaining = expirationTime - currentTime;
    if (timeRemaining > 0) {
      return true;
    } else {
      return false;
    }

  }

  public obtenerUsuarioDelToken() {
    let usuario = null;
    if (this.getToken() != null) {
      const token = this.getToken();
      const decodedToken = jwt_decode(token!) as any;
      usuario = decodedToken.usuario;
    }

    return usuario;
  }
}
