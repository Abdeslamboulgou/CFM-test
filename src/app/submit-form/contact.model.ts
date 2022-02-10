import { AddressModel } from './address.model';

export class ContactModel{
    id!: number ;
    name!: string ;
    surname!: string ;
    birthday!: string ;
    address!: AddressModel[] ;
}