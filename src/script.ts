import z from "zod";

const pattern = z.string();

const result = pattern.parse("eduardo")
console.log(result) // true


const person = z.object({
    name: z.string().min(2).max(50),})

    const employee = z.object({
    role: z.string().min(2).max(50),})

    const personWithEmployee = z.intersection(person, employee);

    const result2 = personWithEmployee.safeParse({
        name: 'John Doe',
        role: 'Software Engineer'
    });

    console.log(result2); // true