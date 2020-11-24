import 'reflect-metadata'
import '../infra/db/typeorm'
import app from 'express'

const caralho = app()

caralho.use(app.json())

caralho.post('/', (req, res) => {
  return res.json({ ok: req.body.fodase })
})

caralho.listen(3333, () => {
  console.log('Server is running on port 3333')
})
