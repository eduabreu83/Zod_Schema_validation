import z from 'zod';

const schema = z.object({
    name: z.string().min(2).max(50),
    age: z.number().positive().min(18).max(100),
    email: z.string().email(),
    isActive: z.boolean().optional(),
    });

let data = {
    name: 'John Doe',
    age: 88,
    email: 'john.doe@example.com',
    isActive: true
};

const result = schema.safeParse(data);
if (result.success) {
    console.log('Validation succeeded:', result.data);
} else {
    console.error('Validation failed:', result.error);
}

const result2 = schema.parse(data);
console.log('Parsed data:', result2);
