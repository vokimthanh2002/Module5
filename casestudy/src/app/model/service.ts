import {TypeService} from './type-service';

export interface Service {
  id?: string;
  nameService?: string;
  acreage?: number;
  numberOfFloors?: number;
  maximumNumberOfPeople?: number;
  rentalCosts?: number;
  status?: string;
  typeService?: TypeService;
}
