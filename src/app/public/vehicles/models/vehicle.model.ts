import { Manufacturer } from './manufacturer.model';

export class Vehicle {
  id: number;
  manufacturer: Manufacturer;
  model: string;
  price: number;
  link: string;
  image: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  year: number;
}
