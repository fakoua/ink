export interface IStyleBase {
    name: string
    rules: string
    ansiStart(): string
    ansiEnd(): string
}
