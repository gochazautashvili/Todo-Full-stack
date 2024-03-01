export type userType = {
  name: string;
  age: number;
  gmail: string;
  password: string;
};

export type loginUserType = {
  name: string;
  password: string;
  gmail: string;
};

export type userTypes = {
  value: userType;
};

export type todoType = {
  _id: string | undefined;
  title: string | undefined;
  completed: boolean | undefined;
};

export type updateTodoType = {
  _id: string | undefined;
  title: string | undefined;
  setUpdate: (update: boolean) => void;
};

export type counterType = {
  count: number;
};

export type actionsType = { type: "increment" } | { type: "decrement" };
