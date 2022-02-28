import {rest} from 'msw';

export const handlers = [
    rest.post('/todo', (req, res, ctx) => {
        const id = Math.floor((Math.random() * 1000));

        return res(
            ctx.status(200),
            ctx.json({
                ...req.body,
                id
            })
        )
    }),
    rest.get('/todo', (req, res, ctx) => {
        const data = [];

        for (let i = 0; i < 10; i++) {
            data.push({
                id: i,
                text: `todo-${i}`
            });
        }

        return res(
            ctx.status(200),
            ctx.json(data),
        )
    }),
    rest.delete('/todo/:id', (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    }),
    rest.patch('/todo/:id', (req, res, ctx) => {
        const {body} = req;

        return res(
            ctx.status(200),
            ctx.json(body)
        )
    }),
]
