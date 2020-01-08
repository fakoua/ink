import { IStyleBase } from "./IStyleBase.ts";
import { normalizeColorString } from "../utils.ts";

export class StyleBase implements IStyleBase {
    name: string;
    rules: string;

    constructor(name: string, rules: string) {
        this.name = name;
        this.rules = normalizeColorString(rules);
    }

    ansiStart(): string {
        throw new Error("Method not implemented.");
    }
    ansiEnd(): string {
        throw new Error("Method not implemented.");
    }

}