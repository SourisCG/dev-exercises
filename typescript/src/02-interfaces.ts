// 02 - Interfaces. Shape of an object. Like Rust struct, but only shape.
// Run: pnpm test 02-inter

export interface User {
  readonly id: number;
  name: string;
  age: number;
  email?: string; // ? = may be missing
}

// TODO: "Ana (30) <ana@mail>" or "Bob (17)" when no email.
export function formatUser(_user: User): string {
  if (_user.email != undefined) {
    return _user.name + " (" + _user.age + ") " + "<" + _user.email + ">";
  } else {
    return _user.name + " (" + _user.age + ")";
  }
}

// TODO: true if user.age >= 18
export function isAdultUser(_user: User): boolean {
  if (_user.age >= 18){
    return true;
  } else{
    return false;
  }
}

// TODO: return a NEW user with the email. Do NOT change the original!
// HINT: return { ...user, email };
export function withEmail(_user: User, _email: string): User {
  if (_user.email != undefined){
    throw new Error("The user has a email already");
  }
  const NEW_USER: User = {
    id: _user.id,
    name: _user.name,
    age: _user.age,
    email: _email
  }
  return NEW_USER
}
