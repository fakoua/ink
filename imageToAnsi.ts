import { decode, Pixel, Image } from "https://deno.land/x/jpeg.ts/mod.ts"

/**
 * draw an image to the terminal.
 * @param imagePath local path or URL
 */
export async function drawImage(imagePath: string) {
    let raw: Uint8Array

    if (isUrl(imagePath)) {
        let res = await fetch(imagePath)
        let data = await res.body
        let tempRaw = new Uint8Array(1000000)
        let rd = await data.read(tempRaw)
        raw = tempRaw.slice(0, rd as number)
    } else {
        raw = await Deno.readFile(imagePath)
    }
    

    let image = decode(raw);
    let rImage = resizeImage(image, image.width, Math.ceil(image.height/2))
    let appender = '';
    for (let y = 0; y < rImage.height; y++) {
        for (let x = 0; x < rImage.width; x++) {
            let pix = rImage.getPixel(x, y);
            appender += pixelToAnsi(pix)
        }
        appender += '\r\n' + '\x1b[0m'
    }
    console.log(appender)
}

function isUrl(path: string): boolean {
    return path.toLowerCase().startsWith("http://") || path.toLowerCase().startsWith("https://")
}

function pixelToAnsi(pix: Pixel) {
    let bgStart = `\x1b[48;2;${pix.r};${pix.g};${pix.b}m`

    let cStart = `\x1b[38;2;${pix.r};${pix.g};${pix.b}m`

    return `${bgStart}${cStart}▀`
    //return `${cStart}.${cEnd}`
}


function resizeImage(image: Image, w2: number, h2: number): Image {
    let result = new Image();
    result.width= w2
    result.height= h2
    result.data= new Uint8Array(w2*h2*4);

    let x_ratio = image.width/w2;
    let y_ratio = image.height/h2;
    let px: number, py: number, pix: Pixel
    for (let i = 0; i < h2; i++) {
        for (let j = 0; j < w2; j++) {
            px = Math.floor(j*x_ratio)
            py = Math.floor(i*y_ratio)
            pix = image.getPixel(px, py)
            //set pixel
            result.setPixel(j, i, pix)
        }        
    }
    
    return result
}