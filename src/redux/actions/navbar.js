import { SET_MENU } from "./type";

export const setMenuActive = (active) => ({
  type: SET_MENU,
  payload: { active }
})