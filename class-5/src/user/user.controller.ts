import { Controller, Get } from '@nestjs/common';

@Controller('user') //decorator // aikhane user holo route
export class UserController {
    @Get()
  getUser(): string {
    return "data fetch successfull!"
  }
// aikhane ami boltesi j jokhon kew user route e get request pathabe tokhon getUser call koriyo jaa  retune korbe akta string
}
/*
aiikhane @Controller likhar maddhome amra nextjs ke bole disi j vai ai j AppController class toiri hoise ake tumi as a cotroller treat korbe jar kaj request accept kora and response kora */