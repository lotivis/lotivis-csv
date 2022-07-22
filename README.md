# lotivis-csv [![Node.js CI](https://github.com/lukasdanckwerth/lotivis-csv/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lukasdanckwerth/lotivis-csv/actions/workflows/node.js.yml)

This module provides functions for reading and writing [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files with [lotivis](https://github.com/lukasdanckwerth/lotivis).

To read CSV data use the [`csvParse`](./src/parse.js) function.

```js
var text = `
label,location,date,value,group
label-1,paris,1999-01-01,1,group-1
label-1,berlin,1999-01-02,2,group-1
`;

var data = lotivis.csvParse(text);
```

Using the correct names the order of the headlines is variable.

```js
var text = `
value,label,location,group,date
1,label-1,paris,group-1,1999-01-01
...
`;

var data = lotivis.csvParse(text);
```

## Installing

If you use npm, `npm install lotivis-csv`. You can also download the [latest realease on GitHub](https://github.com/lukasdanckwerth/lotivis-csv/releases/latest). For using in browsers, you can load the UMD bundle from an npm-based CDN such as jsDelivr.

```html
<script src="https://cdn.jsdelivr.net/..."></script>
<script>

// ...

</script>

```

## Development
```bash
# build module
yarn build

# develop module
yarn build:watch
```