import {TypeCustomer} from './type-customer';

export interface Customer {
  id?: string;
  nameCustomer?: string;
  birthday?: string;
  idCard?: number;
  phoneNumber?: string;
  email?: string;
  address?: string;
  typeCustomer?: TypeCustomer;
  link?: string;
}
