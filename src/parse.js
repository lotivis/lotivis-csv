import * as d3 from "d3-dsv";

export const DEFAULT_ROW = (d, i) => {
  label: d[0];
  location: d[1];
  date: d[2];
  value: d[3];
  group: d[4];
};

export function csvParse(text) {
  return d3.csvParse(text, d3.autoType);
}

export function csvParseRows(text, row = DEFAULT_ROW) {
  return d3.csvParseRows(text, row || DEFAULT_ROW);
}
