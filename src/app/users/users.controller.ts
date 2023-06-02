import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "@anatine/zod-nestjs";
import { UsersDto } from "./users.dto";


@Controller("users")
@UsePipes(ZodValidationPipe)
export class UsersController {
  @Post()
  async create(@Body() usersDto: UsersDto) {
  }

  @Get()
  async getAll() {
    return [{
      name: "testing",
      birthDate: new Date(),
      skills: ["typescript", "javascript"]
    }];
  }

}
