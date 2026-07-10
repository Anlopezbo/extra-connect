import { User } from "@/types/auth";

export async function getCurrentUser(): Promise<User> {

  return {

    id: "1",

    firstName: "Andrés",

    lastName: "López",

    email: "andres@extra.com",

    role: {

      id: "1",

      name: "Coordinador de Mercadeo",

    },

  };

}