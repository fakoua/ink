import { StyleBase } from "./StyleBase.ts";
import { rgbToAnsi, hexToAnsi } from "../utils.ts";

export class ColorStyle extends StyleBase {

    constructor(rules: string) {
        super("color", rules)
    }

    ansiStart(): string {
        let rgb = this.rules.indexOf("rgb") >= 0 ? rgbToAnsi(this.rules) : hexToAnsi(this.rules);
        return `\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m`
    }
    ansiEnd(): string {
        return '\x1b[39m';
    }
}