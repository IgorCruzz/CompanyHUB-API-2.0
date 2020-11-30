import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createProducts1596748845029 implements MigrationInterface {
  private readonly products = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
        isNullable: false
      },
      {
        name: 'name',
        type: 'varchar(50)',
        isNullable: false
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false
      },
      {
        name: 'company_id',
        type: 'integer'
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false
      }
    ],
    foreignKeys: [
      {
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.products)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.products)
  }
}
