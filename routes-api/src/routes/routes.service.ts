import { Injectable } from '@nestjs/common';
import { Route, routes } from './entities/route.entity';

@Injectable()
export class RoutesService {
  findAll(): Route[] {
    return routes;
  }
}
