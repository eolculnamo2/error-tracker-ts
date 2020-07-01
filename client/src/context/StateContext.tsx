import { createContext } from "react";

interface IEmail {
  email: string;
}

interface IFirstName {
  first_name: string;
}

export const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  organization_name: "",
  url: "",
  password: "",
};

export const appActions = {
  UPDATE_EMAIL: (state: IEmail, actions: any) => {
    return { ...state, email: actions.payload };
  },

  UPDATE_FIRST_NAME: (state: IFirstName, actions: any) => {
    return { ...state, first_name: actions.payload };
  },

  UPDATE_LAST_NAME: (state: any, actions: any) => {
    return { ...state, last_name: actions.payload };
  },
};

// export const reducer = (state: any, action: any) => {
//   return appActions[action.type](state, action);
// };

export const StateContext: any = createContext(initialState);
