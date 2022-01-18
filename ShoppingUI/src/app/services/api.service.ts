import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers={  headers: new HttpHeaders({ 'Content-Type': 'application/json'
})
}
private baseUrl ="https://localhost:44357/api";

constructor(private http: HttpClient) { }

postProduct(data : any){
return this.http.post<any>("https://localhost:44357/api/products",data)
.pipe(map((res:any) =>{return res;})
)
}

getProducts(){
return this.http.get<any>("https://localhost:44357/api/products")
.pipe(map((res:any) =>{return res;})
)
}
// getProducts(page, size) : Observable<ProductModule>{
//  return this.http.get<ProductModule>(`${this.baseUrl}?page=${page}$size=${size}`)
// .pipe(map((res:any) =>{return res;})
// )
// }

postOrders(data : any){
return this.http.post<any>("https://localhost:44357/api/orders",data)
.pipe(map((res:any) =>{return res;})
)
}

postCarts(data : any){
return this.http.post<any>("https://localhost:44357/api/carts",data)
.pipe(map((res:any) =>{return res;})
)
}
}
