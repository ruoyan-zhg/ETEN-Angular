import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private autenticacionService: AutenticacionService, private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit() {

    this.comprobarToken();

    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
  });

  }

  public comprobarToken() {
    if (this.autenticacionService.getToken() != null) {
      if (this.autenticacionService.comprobarToken()) {
        this.usuarioService.refreshToken().subscribe((data: any) => {
          this.autenticacionService.eliminarToken();
          this.autenticacionService.guardarToken(data.access_token);
          //console.log('Se ha refrescado el token. ' + data.access_token);
          setTimeout(() => {
            this.refrescarToken();
          }, 3000000);
        });
      } else {
        alert('Debe iniciar sesión');
        if (this.autenticacionService.getToken() != null) {
          this.autenticacionService.eliminarToken();
        }
        this.route.navigate(['login']);
      }
    }
  }

  public refrescarToken() {
    this.usuarioService.refreshToken().subscribe((data: any) => {
      this.autenticacionService.guardarToken(data.access_token);
      //console.log('Se ha refrescado el token. ' + data.access_token);
      setTimeout(() => {
        this.refrescarToken();
      }, 3000000);
    });

  }

  public esAdmin() {
    return this.autenticacionService.isAdmin();
  }

  public esUsuarioLogueado() {
    return this.autenticacionService.isUsuarioLogueado();
  }

  public cerrarSesion() {
    alert('Se ha cerrado sesión');
    this.autenticacionService.eliminarToken();
    this.route.navigate(['/']);
  }

  public imgUser() {
    if (this.autenticacionService.obtenerUsuarioDelToken().img != null) {
      return this.autenticacionService.obtenerUsuarioDelToken().img;
    } else {
      return 'assets/imgs/user_white.png';
    }
  }
}
