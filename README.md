# Vite X-Clacks-Overhead

A simple Vite plugin to send X-Clacks-Overhead headers.

## Installation

`npm i vite-clacks-overhead`

## Usage

Import the plugin in your `vite.config.js`, and add to your plugins.

```js
import { defineConfig } from 'vite'
import xClacksOverhead from 'vite-clacks-overhead'

const clacks_opts = {
     // The in memoriam part of the clacks.  Defaults to "GNU"
    memoriam: "GNU",
     // Array of the names of those you wish to remember.
    names: ["Terry Pratchett"],
    // The seperator between the names for the header.
    seperator: ", ",
    // Custom message (string) in case you don't want to follow the
    // <memoriam> <name>, <name>, <name>... template (defaults to null)
    custom: null,
}

export default defineConfig({
  plugins: [xClacksOverhead(clacks_opts)],
})
```

### Why?

Pratchett wrote this passage in his book "Going Postal", and it stuck with me:
> His name, however, continues to be sent in the so-called Overhead of the clacks. The full message is "GNU John Dearheart", where the G means, that the message should be passed on, the N means "Not Logged" and the U that it should be turned around at the end of the line. So as the name "John Dearheart" keeps going up and down the line, this tradition applies a kind of immortality as "a man is not dead while his name is still spoken".

This plugin was inspired by [this post](https://www.reddit.com/r/bestof/comments/2yyop7/rdiscworld_redditors_with_web_servers_start/).  It was made in memory of my mother, who loved Terry Pratchett's stories very much.  Cancer sucks.
