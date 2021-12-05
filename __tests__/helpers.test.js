const { format_date } = require("../utils/helpers");
test("format_date() returns a date string", () => {
  const date = new Date("2021-11-28 16:12:03");
  expect(format_date(date)).toBe("11/28/2021");
});
