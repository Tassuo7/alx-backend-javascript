export default function createIteratorObject(report) {
  const newArray = [];
  for (const emp of Object.values(report.allEmployees)) {
    newArray.push(...emp);
  }

  return newArray;
}
