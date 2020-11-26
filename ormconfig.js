require('dotenv').config

const postgres = {
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

const sqlite = {
  type: 'sqlite',
  database: 'data/dev.db',
  logging: true,
  entities: ['src/infra/db/typeorm/entities/*.entity.ts'],
  migrations: ['src/infra/db/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/infra/db/typeorm/migrations'
  }
}

module.exports = process.env.NODE_ENV === 'test' ? sqlite : postgres
