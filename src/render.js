import * as d3 from "d3-dsv";

export const DEFAULT_COLUMNS = ["label", "location", "date", "value", "group"];

export function csvRender(data, columns = DEFAULT_COLUMNS) {
  return d3.csvFormat(data.data ? data.data() : data, columns);
}

export function csvRenderRows(data, columns = DEFAULT_COLUMNS) {
  return d3.csvFormatBody(data.data ? data.data() : data, columns);
}
