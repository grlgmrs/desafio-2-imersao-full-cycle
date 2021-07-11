export interface LatLong {
  lat: number;
  long: number;
}

export interface Route {
  title: string;
  startPosition: LatLong;
  endPosition: LatLong;
}
