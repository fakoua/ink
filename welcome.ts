import './mod.ts'
import * as ink from './mod.ts'


function waitConsole(msg: string) {
    ink.terminal.log(`<blue>${msg}</blue>`)
    let p = new Uint8Array(100);
    Deno.stdin.readSync(p)
    console.log('\x1b[2J');
}

function writeInfo(msg: string) {
    ink.terminal.log(`<bg-white><b><u><black>${msg}                               </black></u></b></bg-white>\r\n`)
}

console.log('\x1b[2J');
console.log("\n\r");
ink.terminal.log("<red><bg-yellow><b>[ Welcome to ink sandbox preview. ]</b></bg-yellow></red>");
ink.terminal.log("Ink is an <b>advanced</b> terminal tool for string <green>coloring</green> and <u>format</u>.")
waitConsole("Press ENTER to start ...")

writeInfo("1- Basic Mode:");
ink.terminal.log("   <green>//import the module</green>")
ink.terminal.log("   <red>import</red> <blue>*</blue> <red>as</red> <b>ink</b> <red>from</red> <green>'https://deno.land/x/ink/mod.ts'</green>")
ink.terminal.log("\r\n   <red>let</red> text = ink.<magenta>colorize</magenta>(<yellow>'&lt;red>Hello World&lt;/red>'</yellow>)")
ink.terminal.log("   <blue>console.log</blue>(text)\r\n")
ink.terminal.log("<b>Output:</b>")
ink.terminal.log("> <red>Hello World</red>\r\n___________________")
waitConsole("Press Enter to continue ...")

writeInfo("* You can use nested styles:")
ink.terminal.log("   <red>import</red> <blue>*</blue> <red>as</red> <b>ink</b> <red>from</red> <green>'https://deno.land/x/ink/mod.ts'</green>")
ink.terminal.log("\r\n   <red>let</red> text = ink.<magenta>colorize</magenta>(<yellow>'&lt;bg-blue>&lt;red>Hello World&lt;/bg-blue>&lt;/red>'</yellow>)")
ink.terminal.log("   <blue>console.log</blue>(text)\r\n___________________")
ink.terminal.log("<b>Output:</b>")
ink.terminal.log("> <bg-blue><red>Hello World</bg-blue></red>")

waitConsole("Press Enter to continue ...")
writeInfo("* Supported TAGs are:")
ink.list()

waitConsole("Press Enter to continue ...")
writeInfo("2- Alias to console object:")
ink.terminal.log("   <red>import</red> <blue>*</blue> <red>as</red> <b>ink</b> <red>from</red> <green>'https://deno.land/x/ink/mod.ts'</green>")
ink.terminal.log("   ink.terminal.<magenta>log</magenta>(<yellow>'&lt;red>Hello&lt;/red> %s'</yellow>, <yellow>'&lt;b>World&lt;/b>'</yellow>)")
ink.terminal.log("<b>Output:</b>")
ink.terminal.log("> <red>Hello</red> %s", '<b>World</b>')

waitConsole("Press Enter to continue ...")
writeInfo("3- Advanced mode:")
ink.terminal.log('You can use <b>html</b> like style for advanced and nested mode using the <u>ink</u> tag:')
ink.terminal.log("   <red>import</red> <blue>*</blue> <red>as</red> <b>ink</b> <red>from</red> <green>'https://deno.land/x/ink/mod.ts'</green>")
ink.terminal.log(`   <red>let</red> result = ink.<magenta>html</magenta>(<yellow>"&lt;ink style='color: #ff0000;font:bold;'>Hello World&lt;/ink>"</yellow>)`)
ink.terminal.log("   <blue>console.log</blue>(result);")
ink.terminal.log("<b>Output:</b>")
let result = ink.html("> <ink style='color: #ff0000;font:bold;'>Hello World</ink>")
console.log(result);
waitConsole("Press Enter to continue ...")
writeInfo("* ink also supports nested styles:")
let output = 
'   <red>let</red> html = <yellow>"&lt;ink style="color: rgb(255, 0, 0); background-color: #00ff00;font: underline, bold">' + '\r\n' +
'       I am Red, background Green, underlined and bold! ' + '\r\n' +
'       &lt;ink style="background-color: rgb(0, 0, 0); font: italic;">' + '\r\n' +
'           My BG is black again, but I am italic :(' + '\r\n' +
'       &lt;/ink>' + '\r\n' +
'       My BG is Green Again!' + '\r\n' +
'   &lt;/ink>' + '\r\n' +
'   No Format here"</yellow>' + '\r\n' +
'   <red>let</red> result = ink.<magenta>html</magenta>(html);' + '\r\n' +
'   <blue>console.log</blue>(result);' + '\r\n'

ink.terminal.log(output);
ink.terminal.log("<b>Output:</b>")

let html = 
'<ink style="color: rgb(255, 0, 0); background-color: #00ff00;font: underline, bold">' + '\r\n' +
'    I am Red, background Green, underlined and bold! ' + '\r\n' +
'    <ink style="background-color: rgb(0, 0, 0); font: italic;">' + '\r\n' +
'        My BG is black again, but I am italic :(' + '\r\n' +
'    </ink>' + '\r\n' +
'    My BG is Green Again!' + '\r\n' +
'</ink> \r\n No Format here'
ink.terminal.log(html.toColor() + '\r\n_______________');

waitConsole("Press Enter to continue ...")
writeInfo("* ink also supports string extension:")
ink.terminal.log('   <red>import</red> <b>"https://deno.land/x/ink/mod.ts"</b> <green>//Import .toColor() extension</green>')
ink.terminal.log(`   <blue>console.log</blue>(<yellow>"&lt;ink style='color: #ff0000; font: bold'>Hello Deno&lt;/ink>"</yellow>.<magenta>toColor()</magenta>)`)
ink.terminal.log("<b>Output:</b>")
console.log("> <ink style='color: #ff0000; font: bold'>Hello Deno</ink>".toColor())
console.log("______________________________")
waitConsole("Press Enter to continue ...")
writeInfo("* Supported Styles:        ")
ink.terminal.log("   * <b>color:</b> Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]")
ink.terminal.log("   * <b>background-color:</b> Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]")
ink.terminal.log("   * <b>font:</b> comma separated values [bold, dim, italic, underline, inverse, hidden, strikethrough]")
console.log("______________________________")

waitConsole("Press Enter to continue ...")
writeInfo("4 Draw Image:        ")
ink.terminal.log("Ink module also can draw a <red><b>JPEG</b></red> image from local or remote source into the terminal")
ink.terminal.log('   <red>await</red> ink.<magenta>drawImage</magenta>(<yellow>"https://placekitten.com/50/50"</yellow>)')
ink.terminal.log("<b>Output:</b>")
await ink.drawImage("https://placekitten.com/50/50")


waitConsole("Press Enter to continue ...")
ink.terminal.log("<b>For more information please visit:</b> https://github.com/fakoua/ink")
console.log("\n\r");