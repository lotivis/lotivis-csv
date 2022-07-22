import { csvParse, csvParseRows } from "./parse.js";

export async function csvFetch(path) {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => csvParse(text));
}

export async function csvFetchRows(path, row = null) {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => csvParseRows(text, row));
}
