# ink

Terminal string color for Deno

## Examples

```ts
import * as ink from 'https://raw.githubusercontent.com/fakoua/ink/master/mod.ts'

let text = ink.colorize('<red>Hello World</red>')
console.log(text)
```

Output:

```diff
- Hello World
```

You can use nested style:

```ts
import * as ink from 'https://raw.githubusercontent.com/fakoua/ink/master/mod.ts'

let text = ink.colorize('<bg-blue><red>Hello World</bg-blue></red>')

console.log(text)
```

Output: ![Output](https://via.placeholder.com/220x40/0000FF/FF0000/?text=Hello%20World)

## Support tags

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
import * as ink from 'https://raw.githubusercontent.com/fakoua/ink/master/mod.ts'

ink.terminal.log('<red>Hello</red> %s', '<b>World</b>')
```

## CLI

List all the available tags:

```bash
deno https://raw.githubusercontent.com/fakoua/ink/master/mod.ts --list
```

## License

[MIT](LICENSE)
