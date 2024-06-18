import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/models/IProperty';
import { HousingService } from 'src/app/services/housing.service';
import { faSortAlphaAsc , faSortAlphaDesc } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent  implements OnInit{

  SellRent = 1;
  properties! : IProperty[];
  datenow =  new Date();
  City = ''
  searchCity=''
  sortByProp = 'Price'
  sortDirection='asc'
  faSortAlphaAsc=faSortAlphaAsc;
  faSortAlphaDesc = faSortAlphaDesc
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data => {
        this.properties = data;
        // if(localStorage.getItem("newProperty")){
        //   // let newproperty = JSON.parse(localStorage.getItem("newProperty")!);
        //   // if(newproperty.SellRent === this.SellRent){
        //   //   this.properties = [newproperty , ...this.properties]
        //   // }
        // }
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }

  onSearch(){
    this.searchCity = this.City;
  }
  onClearSearch(){
    this.City='';
    this.searchCity='';
  }
  onSortDirection(){
    if(this.sortDirection=='asc') this.sortDirection='desc';
    else this.sortDirection='asc';
  }

}
