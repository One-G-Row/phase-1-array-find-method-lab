const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

const superbowlWin = function (record) {
  if (record.result === "W") {
    return record.year;
  }
};
console.log(record.find(superbowlWin));
