import app from 'express'
const caralho = app()

caralho.use(app.json())

caralho.post('/', (req, res) => {
  return res.json({ ok: req.body.fodase })
})

caralho.listen(3333)
