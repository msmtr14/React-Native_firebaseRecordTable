export interface userDataInterface {
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePhoto: string;
  longitude: string | number;
  latitude: string | number;
}

export interface locationInterface {
  lat: string | number;
  lng: string | number;
}
