import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCompanies1596748286665 implements MigrationInterface {
  private readonly companies = new Table({
    name: 'companies',
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
        type: 'varchar(100)',
        isNullable: false,
      },
      {
        name: 'cnpj',
        type: 'varchar(14)',
        isNullable: false,
      },
      {
        name: 'user_id',
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
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.companies)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.companies)
  }
}
