import app from 'express'
import { createConnection } from 'typeorm'

const caralho = app()

const connection = createConnection()

caralho.use(app.json())

caralho.post('/', (req, res) => {
  return res.json({ ok: req.body.fodase })
})

caralho.listen(3333)
