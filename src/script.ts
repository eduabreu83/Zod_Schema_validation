import z from "zod";

const pattern = z.string();

const result = pattern.parse("hello")
console.log(result) // true