import { test, assertEquals } from './test_deps.ts'
import * as utils from "./utils.ts"

test(function test_utils_hexToAnsi() {
    assertEquals(utils.hexToAnsi("#ff0000"), {r: 255, g: 0, b: 0})
    assertEquals(utils.hexToAnsi("ff0000"), {r: 255, g: 0, b: 0})
    assertEquals(utils.hexToAnsi(" #ff0000"), {r: 255, g: 0, b: 0})
    assertEquals(utils.hexToAnsi(" ff0000 "), {r: 255, g: 0, b: 0})
    assertEquals(utils.hexToAnsi("#ffffff"), {r: 255, g: 255, b: 255})
    assertEquals(utils.hexToAnsi("#32640c"), {r: 50, g: 100, b: 12})
    assertEquals(utils.hexToAnsi("#fFFffF"), {r: 255, g: 255, b: 255})
})

test(function test_utils_rgbToAnsi() {
    assertEquals(utils.rgbToAnsi("rgb(1,1,1)"), {r: 1, g: 1, b: 1})
    assertEquals(utils.rgbToAnsi(" rgb(1,1,1)"), {r: 1, g: 1, b: 1})
    assertEquals(utils.rgbToAnsi(" rgb(1,1,1) "), {r: 1, g: 1, b: 1})
    assertEquals(utils.rgbToAnsi(" rgb(   1  ,1  ,   1   )   "), {r: 1, g: 1, b: 1})
    assertEquals(utils.rgbToAnsi("RGB(1,1,1)"), {r: 1, g: 1, b: 1})
    assertEquals(utils.rgbToAnsi("rgb(10,255,0)"), {r: 10, g: 255, b: 0})
})

test(function test_utils_rgbLoop() {
    for (let r = 0; r < 256; r++) {
        let rgbCalculated = utils.rgbToAnsi(`rgb(${r}, 0, 0)`)
        let rgbReal = {r: r, g: 0, b: 0}
        assertEquals(rgbCalculated, rgbReal)
    }
})

test(function test_util_normalizeColorString() {
    assertEquals(utils.normalizeColorString(" hello "), "hello")
    assertEquals(utils.normalizeColorString(" #hello "), "hello")
    assertEquals(utils.normalizeColorString(" #he llo "), "hello")
    assertEquals(utils.normalizeColorString(" # hEllO "), "hello")
})