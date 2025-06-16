import express from 'express';
import z from 'zod';
import { postSchema } from './schemas/postsSchema';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/ping', (req, res) => {
    res.json({pong:true});
});


server.post('/user', (req, res) => {
    const userSchema = z.object({
        name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
        email: z.string().email('Email inválido'),
        age: z.number().min(0, 'Idade deve ser um número positivo')
    });

    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: 'Dados inválidos',

        });
    }

    const { name, email, age } = result.data;

    //processo
    console.log('Processando...');
    console.log(name, email, age);

    res.status(201).json({
        message: 'tudo ok'});

});


server.get('/posts', async (req, res) => {
    
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json();

    const result2 = postSchema.safeParseAsync(data);
    if (!(await result2).success) {
        return res.status(500).json({
            message: 'Dados inválidos',
        });
    }

    // Processamento dos posts
    let totalPosts = result2.data.length;
    console.log(`Total de posts: ${totalPosts}`);
    res.json({

    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})