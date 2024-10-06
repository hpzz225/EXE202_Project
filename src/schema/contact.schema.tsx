"use client"

import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  phoneNumber: z.string().min(10).max(15),
  address: z.string().min(2).max(50),
  email: z.string().email(),
  feedback: z.string().min(2).max(50),
})

export type ContactType = z.infer<typeof contactFormSchema>