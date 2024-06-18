import { Component, Input } from '@angular/core';
import { faContactBook, faEdit } from '@fortawesome/free-solid-svg-icons';
import { IProperty } from 'src/app/models/IProperty';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

@Input() property! : IProperty;
@Input() hideIcons : boolean = false;
editIcon = faEdit;
concatIcon = faContactBook;



}
