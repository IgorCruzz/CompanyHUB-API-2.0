import app from './config/app'
import { connection } from '../infra/db/typeorm'

connection.create()

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
