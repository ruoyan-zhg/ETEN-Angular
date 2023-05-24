import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../models/oferta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpClient: HttpClient) { }

  public obtenerOfertasPorCategoria(num_categoria: number, pagina: number) {
    return this.httpClient.get<any[]>(environment.apiUrl + "ofertas/obtenerOfertasPorCategoria/" + num_categoria + "/" + pagina);
  }

  public obtenerTodasOfertas() {
    return this.httpClient.get<Oferta[]>(environment.apiUrl + "ofertas/ObtenerTodasOfertas");
  }

  public sumarVisita(id_oferta: number) {
    return this.httpClient.get(environment.apiUrl + "5ofertas/SumarVisitas/" + id_oferta);
  }
}
