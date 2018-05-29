import { Manufacturer } from './manufacturer.model';

export class Vehicle {
  id: number;
  manufacturer_id: number;
  manufacturer: Manufacturer;
  model: string;
  price: number;
  link: string;
  image: string;
  rented: boolean;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  starts_on: string;
  ends_on: string;
  year: number;
}
