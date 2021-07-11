export class LatLong {
  lat: number;
  long: number;
}

export class Route {
  title: string;
  startPosition: LatLong;
  endPosition: LatLong;
}

export const routes: Route[] = [
  {
    title: 'De Manaus até Palmas',
    startPosition: { lat: -3.1317917, long: -60.0204352 },
    endPosition: { lat: -10.2429431, long: -48.347958 },
  },
  {
    title: 'De Belo horizonte até Rio de Janeiro',
    startPosition: { lat: -19.9161684, long: -43.9454672 },
    endPosition: { lat: -22.9081269, long: -43.1848695 },
  },
  {
    title: 'De Londrina até Curitiba',
    startPosition: { lat: -23.3453696, long: -51.0966428 },
    endPosition: { lat: -25.4953187, long: -49.2761781 },
  },
  {
    title: 'De São Luiz até Belém',
    startPosition: { lat: -2.6351682, long: -44.2986359 },
    endPosition: { lat: -1.4486251, long: -48.4728933 },
  },
  {
    title: 'De Florianópolis até Porto Alegre',
    startPosition: { lat: -27.6055634, long: -48.5757742 },
    endPosition: { lat: -30.0212198, long: -51.1604492 },
  },
];
