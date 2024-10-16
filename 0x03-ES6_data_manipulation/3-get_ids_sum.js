export default function getStudentIdsSum(arr) {
  return arr.reduce(
    (accumulator, data) => accumulator + data.id, 0,
  );
}
