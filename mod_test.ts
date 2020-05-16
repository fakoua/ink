import * as ink from './mod.ts'
import './mod.ts'

import { assertEquals } from './test_deps.ts'

Deno.test("test_output", function () {
    ink.list()
    let text = ink.colorize('<red>hello</red>')
    assertEquals(text, '\x1b[31mhello\x1b[39m')
});

Deno.test("test_extension", function () {
    assertEquals("deno".toColor(), "deno")
})

Deno.test("test_drawImage", async function () {
    //able to draw an image
    await ink.drawImage("https://placekitten.com/10/10")
    assertEquals(1, 1);
})

Deno.test("test_terminal", async function () {
    //able to draw an image
    await ink.terminal.log("h");
    assertEquals(1, 1);
})
