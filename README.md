# Vite X-Clacks-Overhead

A simple Vite plugin to send X-Clacks-Overhead headers.

## Installation

`npm i vite-clacks-overhead`

## Usage

Import the plugin in your `vite.config.js`, and add to your plugins.

```js
import { defineConfig } from 'vite'
import xClacksOverhead from 'vite-clacks-overhead'

export default defineConfig({
  plugins: [xClacksOverhead()],
})
```

### Options:

```js
{
     // The in memoriam part of the clacks.  Defaults to "GNU"
    memoriam: "GNU",
     // Array of the names of those you wish to remember.
    names: ["Terry Pratchett"],
    // The seperator between the names for the header.
    seperator: ", ",
    // Custom message (string) in case you don't want to follow the
    // <memoriam> <name>, <name>, <name>... template
    custom: null,
}

```

*In memory of my mother, who loved Terry Pratchett.  Cancer sucks.*
