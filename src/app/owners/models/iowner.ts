export interface IOwner{
  id?:number;
  createdAt: string;
  name:string;
  avatar:string;
  phone:string;
  email: string;
  properties: Array<string>;
}
