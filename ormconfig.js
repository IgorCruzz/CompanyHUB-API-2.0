require('dotenv').config

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['src/infra/db/typeorm/entities/*.entity.ts'],
  migrations: ['src/infra/db/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/infra/db/typeorm/migrations'
  }
}
