import z from 'zod';

export const postSchema = z.array(
    z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string().min(1, 'Título não pode ser vazio'),
        body: z.string().min(1, 'Corpo não pode ser vazio'),
    })
);