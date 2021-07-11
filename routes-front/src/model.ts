export interface LatLong {
  lat: number;
  long: number;
}

export interface Route {
  origin: {
    name: string;
    point: LatLong;
  };
  destination: {
    name: string;
    point: LatLong;
  };
}
