import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'


export enum IS_ENUM {
  NO,
  IS_DIGITAL,
  BEEN,
}
export const IS_MAP = {
  [IS_ENUM.NO]: '否',
  [IS_ENUM.IS_DIGITAL]: '是',
  [IS_ENUM.BEEN]: '曾经是',
}

export const A_MAP = {
  0: '港台',
  1: '内地',
}

@Index('t_id', ['id'], { unique: true })
@Index('Finsert_time', ['finsertTime'], {})
@Entity('t_test', { schema: 'db_a' })
export class TTest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number

  @Column('varchar', { name: 'Fcreate_user', length: 255 })
  fcreateUser?: string

  @Column('int', { name: 'Fis', comment: '', default: () => "'0'" })
  fis: IS_ENUM

  @Column('datetime', { name: 'Finsert_time', default: () => "'1970-01-01 00:00:00'" })
  finsertTime?: Date

  @Column('datetime', { name: 'Fmodify_time', default: () => "'1970-01-01 00:00:00'" })
  fmodifyTime?: Date
}
