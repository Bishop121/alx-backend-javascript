import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];
  try {
    const user = await signUpUser(firstName, lastName);
    results.push({ status: 'fulfilled', value: user });
  } catch (err) {
    results.push({ status: 'rejected', value: err.toString() });
  }

  try {
    const photo = await uploadPhoto(fileName);
    results.push({ status: 'fulfilled', value: photo });
  } catch (err) {
    results.push({ status: 'rejected', value: err.toString() });
  }

  return results;
}
