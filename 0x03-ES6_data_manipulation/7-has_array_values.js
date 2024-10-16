export default function hasValuesFromArray(setA, arrA) {
  for (const i of arrA) {
    if (!setA.has(i)) { return false; }
  }
  return true;
}
