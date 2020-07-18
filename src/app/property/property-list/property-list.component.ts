import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { iProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  constructor(private houseingService: HousingService) {}
  properties: Array<iProperty>;

  ngOnInit(): void {
    /*  this.http.get('data/properties.json').subscribe((data) => {
      this.properties = data;
      console.log(data);
    });

    */
    this.houseingService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
