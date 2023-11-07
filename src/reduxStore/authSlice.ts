import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  uid: string;
  email: string;
  emailVerified: true;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: [
    {
      providerId: string;
      uid: string;
      displayName: string;
      email: string;
      phoneNumber: null;
      photoURL: string;
    },
  ];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

type InitialState = {
  authUser: null | User;
};

const initialState: InitialState = {
  authUser: null,
};

const authSlice = createSlice({
  name: "auth slice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.authUser = action.payload;
    },
    logoutUser(state) {
      state.authUser = null;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
