import { z } from "zod";

export const movieVideoSchema = z.object({
  folder_id: z.string().optional(),
  workspace_id: z.string(),
});
 