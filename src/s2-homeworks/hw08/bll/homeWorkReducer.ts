import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case "sort":
      return state.slice().sort((a, b) => {
        if (action.payload === "up") {
          return a.name < b.name ? -1 : 1;
        } else {
          return a.name > b.name ? -1 : 1;
        }
      });
    case "check":
      return state.filter((e) => e.age >= 18);
    default:
      return state;
  }
};
