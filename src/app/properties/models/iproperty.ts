export interface IAddress{
  id?:number;
  cep:string;
  logradouro:string;
  number:string;
  complemento:string;
  bairro:string;
  localidade:string;
  uf?:string;
  ibge?:string;
  gia?:string;
  ddd?:string;
  siafi?:string;
}

export interface IProperty{
  id?: number;
  createdAt:string;
  type:Array<string>;
  value:string;
  area:number;
  bedRooms:number;
  BathRooms:number;
  vacancies:number;
  modality:string;
  furnished:boolean;
  condominium: boolean;
  address:IAddress;
  announcementAt:Date;
  idOwner:number;
}
