const tags = {
    "<b>": 1,
    "</b>": 22,
    "<red>": 31,
    "</red>": 39,
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

function processArgs(args) {
    return args.map((value) => {
            if (typeof value === 'string') {
                return replacer(value)
            } else {
                return value
            }
        })
}

function replacer(input: string): string {
    let output = input
    Object.keys(tags).forEach(key=> {
        output = output.replace(key, `\x1b[${tags[key]}m`)
    })
    return output
}

export abstract class terminal {
    static log(...args): void {
        args = processArgs(args)
        console.log(...args)
    }
    static trace(...args): void {
        args = processArgs(args)
        console.trace(...args)
    }
    static warn(...args): void {
        args = processArgs(args)
        console.warn(...args)
    }
    static error(...args): void {
        args = processArgs(args)
        console.error(...args)
    }
    static debug(...args): void {
        args = processArgs(args)
        console.debug(...args)
    }
}

export const colorize = function (input: string): string {
    return replacer(input)
}

export const list = function(): void {
    Object.keys(tags).forEach(key => {
        if (key.indexOf('/') < 0) {
            let tagName = key.replace("<", "").replace(">", "")
            let tagStart = `<${tagName}>`
            let tagEnd = `</${tagName}>`
            let text = `-->${tagStart}tag: ${tagName}${tagEnd}`
            text = replacer(text)
            console.log(text)
        }
    })
}

if (Deno.args.length>1) {
    let cmd = Deno.args[1]
    cmd = cmd.replace('--', '').replace('-', '')
    if (cmd=='list') {
        list()
    }
}