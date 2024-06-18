import { IPropertyBase } from "./i-property-base";

export class Property implements IPropertyBase {
  Id: number=0;
  SellRent: number=0;
  Name: string='';
  PType: string='';
  BHK: number=0;
  FType: string='';
  Price: number=0;
  BuiltArea: number=0;
  CarpetArea?: number=0;
  Address: string='';
  Address2?: string='';
  City: string='';
  FloorNo?: string='';
  TotalFloor?: string='';
  RTM: number=0;
  AOP?: string='';
  MainEntrance?: string='';
  Security?: number=0;
  Gated?: number=0;
  Maintenance?: number=0;
  Possession?: string='';
  Image?: string='../../assets/images/House-default.png';
  Description?: string='';
  PostedOn: string='';
  PostedBy: number=0;
}
