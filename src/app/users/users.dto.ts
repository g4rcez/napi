import { extendApi } from "@anatine/zod-openapi";
import { z } from "zod";
import { createZodDto } from "@anatine/zod-nestjs";

export const Users = extendApi(
  z.object({
    name: z.string(),
    birthDate: z.date(),
    skills: z.array(z.string())
  }),
  { title: "Users", description: "Users" }
);

export type Users = z.infer<typeof Users>;

export class UsersDto extends createZodDto(Users) {
}