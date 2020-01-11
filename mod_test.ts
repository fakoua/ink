import * as ink from './mod.ts'
import './mod.ts'

import { test, assertEquals } from './test_deps.ts'

test( function test_output() {
    ink.list()
    let text = ink.colorize('<red>hello</red>')
    assertEquals(text, '\x1b[31mhello\x1b[39m')
});

test(function test_extension() {
    assertEquals("deno".toColor(), "deno")
})

