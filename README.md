# lotivis-csv [![Node.js CI](https://github.com/lukasdanckwerth/lotivis-csv/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lukasdanckwerth/lotivis-csv/actions/workflows/node.js.yml)

This module provides functions for reading and writing [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files with [lotivis](https://github.com/lukasdanckwerth/lotivis) using [d3-dsv](https://github.com/d3/d3-dsv).

```js
var text = `
label,location,date,value,group
label-1,paris,1999-01-01,1,group-1
label-1,berlin,1999-01-02,2,group-1
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

## API Reference

### `lotivis.`**[`csvParse`](./src/parse.js)**`(string)`

To read csv data use the [`csvParse`](./src/parse.js) function.

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
2,label-1,berlin,group-1,1999-01-02
`;

var data = lotivis.csvParse(text);
```

### `lotivis.`**[`csvParseRow`](./src/parse.js)**`(string [, row])`

To read csv data without headlines use the [`csvParseRows`](./src/parse.js) function. If the csv data is in the default order ([label,location,data,value[,group]](./src/parse.js)).

```js
var text = `
label-1,paris,1999-01-01,1,group-1
label-1,berlin,1999-01-02,2,group-1
`;

var data = lotivis.csvParseRows(text);
```

When reading csv data in custom order without headlines specify a parse function as second parameter which handles each row.

```js
var text = `
1,label-1,paris,group-1,1999-01-01
2,label-1,berlin,group-1,1999-01-02
`;

let data = csvParseRows(text, (row, index) => {
    return {
        value: row[0],
        label: row[1],
        location: row[2],
        group: row[3],
        date: row[4],
    };
});
```

### `lotivis.`**[`csvRender`](./src/render.js)**`(data [, columns])`

Creates a csv string from the specified `data`. Optionally specifiy the order of the columns with `columns`. The default order is [["label", "location", "date", "value", "group"]](./src/render.js).

### `lotivis.`**[`csvRenderRows`](./src/render.js)**`(data [, columns])`

Creates a csv string without headlines from the specified `data`. Optionally specifiy the order of the columns with `columns`.

### `lotivis.`**[`csvFetch`](./src/fetch.js)**`(path)`

Fetches and parses the data from the csv files specified through the given `path`.

### `lotivis.`**[`csvFetchRows`](./src/fetch.js)**`(path [, row])`

Fetches and parses the data from the csv files specified through the given `path`. The `row` argument works in a simulary manner as in [csvParseRow](#lotiviscsvparserowstring--row).

## Development

```bash
# build module
yarn build

# develop module
yarn build:watch
```