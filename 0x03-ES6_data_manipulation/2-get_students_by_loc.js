export default function getStudentsByLocation(arr, city) {
  return arr.filter((data) => data.location === city);
}
