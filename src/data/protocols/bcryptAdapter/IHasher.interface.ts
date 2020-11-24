export interface IHasher {
  hash (value: string): Promise<string>
}
