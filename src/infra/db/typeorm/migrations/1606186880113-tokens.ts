import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createToken1596749910860 implements MigrationInterface {
  private readonly tokens = new Table({
    name: 'tokens',
    columns: [
      {
        name: 'user_id',
        type: 'integer',
        isPrimary: true,
        isNullable: false
      },
      {
        name: 'token',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }
    ],
    foreignKeys: [
      {
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.tokens)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tokens)
  }
}
