import Cookies from "universal-cookie";
import settings from "../app/settings";
import { AuthType, UserProps } from "../types/auth";

const cookies = new Cookies();

//auth cookie props
type AuthCookiePorps = {
  authType: AuthType;
  user: UserProps;
} | null;

//set auth cookie
const setAuthCookie = (authType: AuthType, user: UserProps) => {
  let value = "";
  try {
    value = window.btoa(JSON.stringify({ authType: authType, user: user }));
  } catch (error) {
    value = "";
  }
  cookies.set(settings.auth_session, value, {
    path: `${settings.basename}`,
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  });
};

//get auth cookie and parse as json
const getAuthCookie = () => {
  let getCookie: AuthCookiePorps;
  const authCookie = cookies.get(settings.auth_session);
  try {
    getCookie = JSON.parse(window.atob(authCookie));
  } catch (error) {
    getCookie = null;
  }
  return getCookie;
};

//get user from cookie
export const getUserCooke = function (): UserProps {
  let user: UserProps = null;
  const authCookie = getAuthCookie();
  if (authCookie?.user) {
    user = authCookie.user;
  }
  return user;
};

//get auth type from
export const getAuthType = function (): AuthType {
  let authType: AuthType = null;
  const authCookie = getAuthCookie();
  if (authCookie?.authType) {
    authType = authCookie.authType;
  }
  return authType;
};

//check if the user is authenticated
export const isAuthenticated = function (): boolean {
  let isAuthenticated = false;
  const authCookie = getAuthCookie();
  if (authCookie) {
    isAuthenticated = true;
  }
  return isAuthenticated;
};

//remove auth cookie
const removeAuthCookie = () => {
  cookies.remove(settings.auth_session);
};

export { getAuthCookie, removeAuthCookie, setAuthCookie };
