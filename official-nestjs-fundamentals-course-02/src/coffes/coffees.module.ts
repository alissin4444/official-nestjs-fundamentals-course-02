import { Coffee } from './entities/coffee.entity';
import { CoffeesController } from 'src/coffes/coffes.controller';
import { CoffeesService } from 'src/coffes/coffes.service';
import { Event } from '../events/entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
