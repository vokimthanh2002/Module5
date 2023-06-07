import {LevelEmployee} from './level-employee';
import {LocationEmployee} from './location-employee';
import {PartEmployee} from './part-employee';

export interface Employee {
  id?: string;
  nameEmployee?: string;
  birthday?: string;
  idCard?: number;
  wage?: number;
  phoneNumber?: string;
  email?: string;
  address?: string;
  location?: LocationEmployee;
  level?: LevelEmployee;
  part?: PartEmployee;
}
