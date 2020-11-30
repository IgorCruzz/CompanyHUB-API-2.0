export interface ICompare {
  compare(firstValue: string, secondValue: string): Promise<boolean>
}
