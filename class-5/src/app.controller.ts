/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("user") //decorator // aikhane user holo route
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return "data fetch successfull"
  }
// aikhane ami boltesi j jokhon kew user route e get request pathabe tokhon getUser call koriyo jaa  retune korbe akta string
}
/*
aiikhane @Controller likhar maddhome amra nextjs ke bole disi j vai ai j AppController class toiri hoise ake tumi as a cotroller treat korbe jar kaj request accept kora and response kora */