import { ColorStyle } from "../models/ColorStyle.ts"
import { BackgroundColorStyle } from "../models/BackgroundColorStyle.ts"
import { FontStyle } from "../models/FontStyle.ts"

export abstract class StyleParser {

    static color: ColorStyle
    static backgroundColor: BackgroundColorStyle
    static font: FontStyle

    static toAnsiStart(): string {
        let rtnVal = ""

        if (this.color) {
            rtnVal += this.color.ansiStart();
        }

        if (this.backgroundColor) {
            rtnVal += this.backgroundColor.ansiStart();
        }

        if (this.font) {
            rtnVal += this.font.ansiStart();
        }

        return rtnVal;
    }

    static toAnsiEnd(): string {
        let rtnVal = ""

        if (this.color) {
            rtnVal += this.color.ansiEnd();
        }

        if (this.backgroundColor) {
            rtnVal += this.backgroundColor.ansiEnd();
        }

        if (this.font) {
            rtnVal += this.font.ansiEnd();
        }

        return rtnVal;
    }

    static parse(style: string): void {
        let styles = style.split(";")
        styles.forEach(element => {
            this.parseSubStyle(element)
        });
    }

    private static parseSubStyle(subStyle: string) {
        subStyle = subStyle.trim();
        if (subStyle !== "") {
            let st = subStyle.split(":")
            let name = st[0].trim();
            let value = st[1].trim();

            switch (name.toLowerCase()) {
                case "color":
                    this.color = new ColorStyle(value);
                    break;
                case "background-color":
                    this.backgroundColor = new BackgroundColorStyle(value)
                    break;
                case "font":
                    this.font = new FontStyle(value)
                    break;
                default:
                    break;
            }
        }
    }
}