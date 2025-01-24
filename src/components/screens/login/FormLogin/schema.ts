import { z } from "zod";

export const schema = z.object({
  username: z
    .string()
    .max(50, "O Usuário deve ter no máximo 50 caracteres")
    .min(6, "O Usuário deve ter pelo menos 6 caracteres")
    .trim(),
  password: z
    .string()
    .max(50, "A Senha deve ter no máximo 50 caracteres")
    .min(3, "A Senha deve ter pelo menos 3 caracteres"),
});
