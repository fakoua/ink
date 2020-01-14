# ink

Terminal string color for deno

[![Build Status](https://api.travis-ci.com/fakoua/ink.svg?branch=master)](https://travis-ci.com/fakoua/ink)
[![Build Status](https://github.com/fakoua/ink/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/fakoua/ink/actions)

## Run the welcome page for interactive demo:

```bash
deno -A https://deno.land/x/ink/welcome.ts
```

## Examples

```ts
import * as ink from 'https://deno.land/x/ink/mod.ts'

let text = ink.colorize('<red>Hello World</red>')
console.log(text)
```

Output:

```diff
- Hello World
```

You can use nested style:

```ts
import * as ink from 'https://deno.land/x/ink/mod.ts'

let text = ink.colorize('<bg-blue><red>Hello World</bg-blue></red>')

console.log(text)
```

## Support tags [Simple Mode]

- &lt;b>: bold
- &lt;i>: italic
- &lt;u>: underline
- &lt;s>: strikethrough
- &lt;hidden>: hidden text
- &lt;inv>: inverted color
- &lt;dim>: dim light
- &lt;u>: underline

- &lt;red>: text red
- &lt;green>: text green
- &lt;blue>: text blue
- &lt;yellow>: text yellow
- &lt;magenta>: text magenta
- &lt;cyan>: text cyan
- &lt;white>: text white
- &lt;black>: text black

- &lt;bg-red>: background red
- &lt;bg-green>: background green
- &lt;bg-blue>: background blue
- &lt;bg-yellow>: background yellow
- &lt;bg-magenta>: background magenta
- &lt;bg-cyan>: background cyan
- &lt;bg-white>: background white
- &lt;bg-black>: background black

## Alias to console

You can use the object terminal to call console.log, console.trace ... directly form ink module.

```ts
import * as ink from 'https://deno.land/x/ink/mod.ts'

ink.terminal.log('<red>Hello</red> %s', '<b>World</b>')
```

## Advanced mode

You can use html like style for advanced and nested mode using the `ink` tag:

```ts
import * as ink from 'https://deno.land/x/ink/mod.ts'

let result = ink.html("<ink style='color: #ff0000;font:bold;'>Hello World</ink>")
console.log(result);
```

**ink** also supports nested styles:

```ts
let html = `
<ink style="color: rgb(255, 0, 0); background-color: #00ff00;font: underline, bold">
    I'm Red, background Green, underlined and bold! 
    <ink style="background-color: rgb(0, 0, 0); font: italic;">
        My BG is black again, but I'm italic :(
    </ink>
    My BG is Green Again!
</ink>
No Format here
`

let result = ink.html(html)
console.log(result);
```

Output:

![output](https://github.com/fakoua/ink/blob/master/forgit/img01.png)

## String Extension

`ink` also supports string extension:

```ts
import "https://deno.land/x/ink/mod.ts" //Import .toColor() extension

console.log("<ink style='color: #ff0000; font: bold'>Hello Deno</ink>".toColor())
```

### Supported Styles

- **color**: Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]
- **background-color**: Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]
- **font**: comma separated values [bold, dim, italic, underline, inverse, hidden, strikethrough]

## Draw Image

Ink module also can draw a JPEG image from local or remote source into the terminal:

```ts
import * as ink from "./mod.ts"

await ink.drawImage("https://placekitten.com/50/50")

```

![output](https://github.com/fakoua/ink/blob/master/forgit/img02.png)

## License

[MIT](LICENSE)
