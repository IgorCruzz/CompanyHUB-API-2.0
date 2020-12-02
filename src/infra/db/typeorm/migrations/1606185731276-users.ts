import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUsers1596747360485 implements MigrationInterface {
  private readonly user = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
        isNullable: false,
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password_hash',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'administrator',
        type: 'boolean',
        default: false,
      },
      {
        name: 'activation',
        type: 'boolean',
        default: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.user)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.user)
  }
}
