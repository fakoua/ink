import { parse, HTMLElement, Node, TextNode } from "./tsdom/tsdom.ts"
import { StyleParser } from "./tsdom/styleparser.ts"

export function toAnsi(html: string): string {
    let data = `<ink>${html}</ink>`
    data = data.replace(/\<ink\>/gi, "<div>")
    data = data.replace(/\<ink\/\>/gi, "</div>")
    data = data.trim()
    const root = parse(data)
    if (root instanceof HTMLElement) {
        const res = getInked(root.firstChild);
        return res;
    }    
    return html; // in case of error
}

function getInked(n: Node, parentAnsiStart: string = ""): string {
    let rtnVal = ""
    n.childNodes.forEach(el => {
        if (el instanceof TextNode) {
            rtnVal += el.text
        }
        if (el instanceof HTMLElement) {
            const style = el.attributes.style
            StyleParser.parse(style);
            const ansiStart = StyleParser.toAnsiStart()
            const ansiEnd = `${StyleParser.toAnsiEnd()}${parentAnsiStart}`

            rtnVal += `${ansiStart}${getInked(el, ansiStart)}${ansiEnd}`
        }
    })
    return rtnVal
}
