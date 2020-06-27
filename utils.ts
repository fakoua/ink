export const rgbToAnsi = function (rgb: string): { r: number, g: number, b: number } {
    rgb = normalizeColorString(rgb)
    const result = /^rgb\((\d+)\,(\d+)\,(\d+)\)$/i.exec(rgb);
    return {
        // @ts-ignore
        r: parseInt(result[1], 10),
        // @ts-ignore
        g: parseInt(result[2], 10),
        // @ts-ignore
        b: parseInt(result[3], 10),
    }
}

export const hexToAnsi = function (hex: string): { r: number, g: number, b: number } {
    hex = normalizeColorString(hex)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        // @ts-ignore
        r: parseInt(result[1], 16),
        // @ts-ignore
        g: parseInt(result[2], 16),
        // @ts-ignore
        b: parseInt(result[3], 16),
    }
}

export const normalizeColorString = function (input: string): string {
    input = input.replace("#", "");
    input = input.replace(/\s/g, "");
    input = input.trim();
    input = input.toLowerCase();
    return input;
}

export const tags = {
    "<b>": 1,
    "</b>": 22,
    "<dim>": 2,
    "</dim>": 22,
    "<i>": 3,
    "</i>": 23,
    "<u>": 4,
    "</u>": 24,
    "<inv>": 7,
    "</inv>": 27,
    "<hidden>": 8,
    "</hidden>": 28,
    "<s>": 9,
    "</s>": 29,
    "<black>": 30,
    "</black>": 39,
    "<red>": 31,
    "</red>": 39,
    "<green>": 32,
    "</green>": 39,
    "<yellow>": 33,
    "</yellow>": 39,
    "<blue>": 34,
    "</blue>": 39,
    "<magenta>": 35,
    "</magenta>": 39,
    "<cyan>": 36,
    "</cyan>": 39,
    "<white>": 37,
    "</white>": 39,
    "<gray>": 90,
    "</gray>": 39,
    "<bg-black>": 40,
    "</bg-black>": 49,
    "<bg-red>": 41,
    "</bg-red>": 49,
    "<bg-green>": 42,
    "</bg-green>": 49,
    "<bg-yellow>": 43,
    "</bg-yellow>": 49,
    "<bg-blue>": 44,
    "</bg-blue>": 49,
    "<bg-magenta>": 45,
    "</bg-magenta>": 49,
    "<bg-cyan>": 40,
    "</bg-cyan>": 46,
    "<bg-white>": 47,
    "</bg-white>": 49,
}

export function replacer(input: string): string {
    let output = input
    Object.keys(tags).forEach(key => {
        const re = new RegExp(key, "gi")
        // @ts-ignore
        output = output.replace(re, `\x1b[${tags[key]}m`)
    })
    output = output.replace(/\&lt\;/g, "<")
    return output
}
