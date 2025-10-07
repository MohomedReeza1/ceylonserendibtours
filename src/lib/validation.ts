import { z } from "zod";

export const leadSchema = z.object({
  tourSlug: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  nationality: z.string().optional(),
  paxAdults: z.coerce.number().int().min(1),
  paxChildren: z.coerce.number().int().min(0).default(0),
  startDate: z.string().optional(), // ISO date from <input type="date">
  nights: z.coerce.number().int().optional(),
  budgetBand: z.string().optional(),
  interests: z.array(z.string()).optional().default([]),
  message: z.string().max(2000).optional(),
  source: z.string().optional(),
});
