import assert from "assert";
import { readFileSync } from "fs";
import { csvParse, csvParseRows } from "../src/index.js";

it("csvParse(string) parses the expected data", () => {
  let data = csvParse(
    'label,location,date,value,group\n"label-1","paris","1999",0,"group-1"'
  );
  assert.strictEqual(data.length, 1);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(data[0].date, 1999);
  assert.strictEqual(data[0].value, 0);
  assert.strictEqual(data[0].group, "group-1");
});

it("csvParse(string) parses file data/csv.default.csv", () => {
  let data = csvParse(readFileSync("test/data/csv.default.csv", "utf-8"));
  assert.strictEqual(data.length, 4);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(
    data[0].date.getMilliseconds(),
    new Date("1999-01-01T00:00:00.000Z").getMilliseconds()
  );
  assert.strictEqual(data[0].value, 1);
  assert.strictEqual(data[0].group, "group-1");
});

it("csvParse(string) parses file data/csv.custom.csv", () => {
  let data = csvParse(readFileSync("test/data/csv.custom.csv", "utf-8"));
  assert.strictEqual(data.length, 4);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(
    data[0].date.getMilliseconds(),
    new Date("1999-01-01T00:00:00.000Z").getMilliseconds()
  );
  assert.strictEqual(data[0].value, 1);
  assert.strictEqual(data[0].group, "group-1");
});

it("csvParseRows(string) parses the expected data", () => {
  let data = csvParseRows('"label-1","paris","1999",0,"group-1"');
  assert.strictEqual(data.length, 1);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(data[0].date, "1999");
  assert.strictEqual(data[0].value, "0");
  assert.strictEqual(data[0].group, "group-1");
});

it("csvParseRows(string) parses file data/csv.default.csv", () => {
  let data = csvParseRows(
    readFileSync("test/data/csv.rows.default.csv", "utf-8")
  );

  assert.strictEqual(data.length, 4);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(data[0].date, "1999-01-01");
  assert.strictEqual(data[0].value, "1");
  assert.strictEqual(data[0].group, "group-1");
});

it("csvParseRows(string) parses file data/csv.custom.csv", () => {
  let data = csvParseRows(
    readFileSync("test/data/csv.rows.custom.csv", "utf-8"),
    (d, i) => {
      return {
        value: d[0],
        label: d[1],
        location: d[2],
        group: d[3],
        date: d[4],
      };
    }
  );
  assert.strictEqual(data.length, 4);
  assert.strictEqual(data[0].label, "label-1");
  assert.strictEqual(data[0].location, "paris");
  assert.strictEqual(data[0].date, "1999-01-01");
  assert.strictEqual(data[0].value, "1");
  assert.strictEqual(data[0].group, "group-1");
});
