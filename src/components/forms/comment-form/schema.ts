import z from "zod";

export const createCommentSchema = z.object({
  comment: z
    .string()
    .min(1, "Comment is required")
    .max(500, "Comment must be less than 500 characters"),
});
