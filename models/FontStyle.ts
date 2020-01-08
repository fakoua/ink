import { StyleBase } from "./StyleBase.ts";

type FontStyleType = {
    mode: string
    ansiStartCode: number
    ansiEndCode: number
}

export class FontStyle extends StyleBase {

    private fonts: Array<FontStyleType> = [
        {
            mode: "bold",
            ansiStartCode: 1,
            ansiEndCode: 22
        },
        {
            mode: "dim",
            ansiStartCode: 2,
            ansiEndCode: 22
        },
        {
            mode: "italic",
            ansiStartCode: 3,
            ansiEndCode: 23
        },
        {
            mode: "underline",
            ansiStartCode: 4,
            ansiEndCode: 24
        },
        {
            mode: "inverse",
            ansiStartCode: 7,
            ansiEndCode: 27
        },
        {
            mode: "hidden",
            ansiStartCode: 8,
            ansiEndCode: 28
        },
        {
            mode: "strikethrough",
            ansiStartCode: 9,
            ansiEndCode: 29
        },
    ];

    private fontModes: Array<string>;

    private modeToAnsi(mode: string): { start: string, end: string } {
        mode = mode.trim().toLowerCase();
        let f = this.fonts.find(f => {
            return f.mode == mode
        })
        return {
            start: `\x1b[${f.ansiStartCode}m`,
            end: `\x1b[${f.ansiEndCode}m`
        }
    }

    constructor(rules: string) {
        super("font", rules)
        this.fontModes = rules.split(",");
    }

    ansiStart(): string {
        let rntVal =""
        this.fontModes.map(m => {
            rntVal += this.modeToAnsi(m).start;
        })
        return rntVal;
    }
    ansiEnd(): string {
        let rntVal =""
        this.fontModes.map(m => {
            rntVal += this.modeToAnsi(m).end;
        })
        return rntVal;
    }
}