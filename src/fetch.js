import { csvParse, csvParseRows } from "./parse.js";

export async function fetchCSV(path) {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => csvParse(text));
}

export async function fetchCSVRows(path, row = null) {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => csvParseRows(text, row));
}
