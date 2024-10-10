export default function taskBlock(trueOrFalse) {
  const task = false; /* eslint-disable-line no-unused-vars */
  const task2 = true; /* eslint-disable-line no-unused-vars */

  if (trueOrFalse) {
    const task = true; /* eslint-disable-line no-unused-vars */
    const task2 = false; /* eslint-disable-line no-unused-vars */
  }

  return [task, task2];
}
