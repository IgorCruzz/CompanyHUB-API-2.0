import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createServices1596749081582 implements MigrationInterface {
  private readonly services = new Table({
    name: 'services',
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
        type: 'varchar(50)',
        isNullable: false,
      },
      {
        name: 'description',
        type: 'varchar(125)',
        isNullable: false,
      },
      {
        name: 'product_id',
        type: 'integer',
        isNullable: false,
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
    foreignKeys: [
      {
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.services)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.services)
  }
}
