import { createConnections } from 'typeorm'

createConnections().catch((err) => {
  console.log(err)
})
