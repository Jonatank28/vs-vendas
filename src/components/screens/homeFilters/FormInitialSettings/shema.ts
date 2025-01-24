import { z } from "zod";

export const schema = z.object({
  enterprise: z.string().min(1, "Campo obrigatório"),
  region: z.string().min(1, "Campo obrigatório"),
  state: z.string().min(1, "Campo obrigatório"),
  city: z.string().min(1, "Campo obrigatório"),
});
