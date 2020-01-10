import { replacer, tags } from "./utils.ts"
import { toAnsi } from "./htmlToAnsi.ts"

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

export const html = function (html: string): string {
    return toAnsi(html);
}

export const list = function (): void {
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

function processArgs(args) {
    return args.map((value) => {
        if (typeof value === 'string') {
            return replacer(value)
        } else {
            return value
        }
    })
}

//CLI
if (Deno.args.length == 1) {
    let cmd = Deno.args[0]
    cmd = cmd.replace('--', '').replace('-', '')
    if (cmd == 'list') {
        list()
    }
}