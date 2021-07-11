export class LatLong {
  lat: number;
  long: number;
}

export class Route {
  origin: {
    name: string;
    point: LatLong;
  };
  destination: {
    name: string;
    point: LatLong;
  };
}

export const routes: Route[] = [
  {
    origin: {
      name: 'Manaus',
      point: { lat: -3.1317917, long: -60.0204352 },
    },
    destination: {
      name: 'Palmas',
      point: {
        lat: -10.2508738,
        long: -48.3271399,
      },
    },
  },
  {
    origin: {
      name: 'Belo horizonte',
      point: { lat: -19.9161684, long: -43.9454672 },
    },
    destination: {
      name: 'Rio de Janeiro',
      point: { lat: -22.9081269, long: -43.1848695 },
    },
  },
  {
    origin: {
      name: 'Londrina',
      point: { lat: -23.3453696, long: -51.0966428 },
    },
    destination: {
      name: 'Curitiba',
      point: { lat: -25.4953187, long: -49.2761781 },
    },
  },
  {
    origin: {
      name: 'São Luiz',
      point: { lat: -2.6351682, long: -44.2986359 },
    },
    destination: {
      name: 'Belém',
      point: { lat: -1.4486251, long: -48.4728933 },
    },
  },
  {
    origin: {
      name: 'Florianópolis',
      point: { lat: -27.6055634, long: -48.5757742 },
    },
    destination: {
      name: 'Porto Alegre',
      point: { lat: -30.0212198, long: -51.1604492 },
    },
  },
];
