interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export default interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
// Now you can use these interfaces in your Angular components or services.
