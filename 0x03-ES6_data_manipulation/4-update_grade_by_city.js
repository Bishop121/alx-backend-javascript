export default function updateStudentGradeByCity(arr, city, newGrades) {
  const locArray = arr.filter((data) => data.location === city);
  const retArray = locArray.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });

  return retArray;
}
