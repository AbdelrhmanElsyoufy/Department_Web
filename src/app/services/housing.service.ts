import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';
import { IProperty } from '../models/IProperty';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {




  constructor(private http : HttpClient) { }


  getCities(){
    return this.http.get("https://localhost:7031/api/city");
  }

  getProperty(id: number) {
    return this.http.get<IProperty[]>("data/db.json").pipe(
      map(properties =>{
        return properties.find( p=> p.Id ===id );
      })
    )

  }

  getAllHousing() : Observable<IProperty[]>{
    console.log();
 let data = this.http.get<IProperty[]>("data/db.json")
    console.log();
    return data
  }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get<IProperty[]>('data/db.json').pipe(
      map(data => {
      const propertiesArray: Array<IProperty> = [];
      if(localStorage.getItem("newProperty")){
        let localStorageData =JSON.parse(localStorage.getItem("newProperty")!)
        for (const id in localStorageData) {
          if (localStorageData.hasOwnProperty(id) && localStorageData[id].SellRent === SellRent) {
            propertiesArray.push(localStorageData[id]);
          }
        }
      }

      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );

    return this.http.get<IProperty[]>('data/properties.json');
  }


//   getproperty(id : number) : Observable<IProperty>{
//  let data = this.http.get<IProperty>("data/db.json").pipe(
//   filter(p >= p.id == id)
//  )
//     return data
//   }

  addProperty(prop:Property){
    let newProperty = [prop]
    if(localStorage.getItem("newProperty")){
     newProperty = [prop , ...JSON.parse(localStorage.getItem("newProperty")!)]
    }
    localStorage.setItem("newProperty",JSON.stringify(newProperty));
    this.http.post("data/db.json",prop);
  }

  newPropertyId(){
    if(localStorage.getItem("PID")){
      localStorage.setItem("PID" , String(+localStorage.getItem("PID")! + 1))
      return +localStorage.getItem("PID")!;
    }else{
      localStorage.setItem("PID","101");
      return 101;
    }

  }
}
