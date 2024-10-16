import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((user) => console.log(`${user[0].body} ${user[1].firstName} ${user[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
