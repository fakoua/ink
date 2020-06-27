import { replacer, tags } from "./utils.ts"
import { toAnsi } from "./htmlToAnsi.ts"
export { drawImage } from "./imageToAnsi.ts"

declare global {
    interface String {
        toColor(): string
    }
}

String.prototype.toColor = function (): string {
    return html(this as string);
}

// tslint:disable-next-line
export class terminal {
    // @ts-ignore
    static log(...args): void {
        args = processArgs(args)
        console.log(...args)
    }
    // @ts-ignore
    static trace(...args): void {
        args = processArgs(args)
        console.trace(...args)
    }
    // @ts-ignore
    static warn(...args): void {
        args = processArgs(args)
        console.warn(...args)
    }
    // @ts-ignore
    static error(...args): void {
        args = processArgs(args)
        console.error(...args)
    }
    // @ts-ignore
    static debug(...args): void {
        args = processArgs(args)
        console.debug(...args)
    }
}

export const colorize = function (input: string): string {
    return replacer(input)
}

export const html = function (htm: string): string {
    return toAnsi(htm);
}

export const list = function (): void {
    Object.keys(tags).forEach(key => {
        if (key.indexOf("/") < 0) {
            const tagName = key.replace("<", "").replace(">", "")
            const tagStart = `<${tagName}>`
            const tagEnd = `</${tagName}>`
            let text = `-->${tagStart}tag: ${tagName}${tagEnd}`
            text = replacer(text)
            console.log(text)
        }
    })
}

// Extension

// @ts-ignore
function processArgs(args) {
    // @ts-ignore
    return args.map((value) => {
        if (typeof value === "string") {
            return replacer(value)
        } else {
            return value
        }
    })
}

// CLI
if (Deno.args.length === 1) {
    let cmd = Deno.args[0]
    cmd = cmd.replace("--", "").replace("-", "")
    if (cmd === "list") {
        list()
    }
}
