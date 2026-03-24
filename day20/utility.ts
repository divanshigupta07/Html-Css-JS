// Partial<T> is a utility type that makes all properties of T optional.
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type UpdateUser = Partial<User>;
// const user1: UpdateUser = {
//   name: "Divanshi"
// };

// Required<T> is a utility type that makes all properties of T required.
// interface User {
//   name?: string;
//   age?: number;
// }

// type StrictUser = Required<User>;

// Readonly<T> is a utility type that makes all properties of T read-only.
// interface User {
//   name: string;
//   age: number;
// }

// const user1: Readonly<User> = {
//   name: "Divanshi",
//   age: 22
// };

// user1.age = 25 //❌ Error

// Pick<T, K> is a utility type that constructs a type by picking the set of properties K from T.

interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;

// Omit<T, K> is a utility type that constructs a type by omitting the set of properties K from T.

type UserWithoutEmail = Omit<User, "email">;
//Output:  {
//   name: string;
//   age: number;
// }

// Record<K, T> is a utility type that constructs a type with a set of properties K of type T.
type Roles = "admin" | "user" | "guest";

type RolePermissions = Record<Roles, boolean>;
// Result: {
//   admin: boolean;
//   user: boolean;
//   guest: boolean;
// }

// Exclude<T, U> is a utility type that constructs a type by excluding from T all properties that are assignable to U.
// type Status = "success" | "error" | "loading";

// type FinalStatus = Exclude<Status, "loading">;
// Result: "success" | "error"

// Extract<T, U> is a utility type that constructs a type by extracting from T all properties that are assignable to U.
type Status = "success" | "error" | "loading";

type NetworkStatus = Extract<Status, "success" | "error">;
// Result: "success" | "error"

// NonNullable<T> is a utility type that constructs a type by excluding null and undefined from T.
type Value = string | null | undefined;

type CleanValue = NonNullable<Value>;
// Result: string

// ReturnType<T> is a utility type that constructs a type consisting of the return type of function T.
function getUser() {
  return { name: "Divanshi", age: 22 };
}

type UserType = ReturnType<typeof getUser>;
// Result: { name: string; age: number }

// Parameters<T> is a utility type that constructs a type consisting of the parameters of function T as a tuple.
function login(username: string, password: string) {}

type LoginParams = Parameters<typeof login>;
// Result: [string, string]