export const getAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthUser = state => state.auth.user;
export const getAuthError = state => state.auth.error;
export const getAuthLoginError = state => state.auth.isLoginError;


export const getAuthisRefreshingUser = state => state.auth.isRefreshing;


export const getAuthToken = state => state.auth.token;
export const getUserFavorite = state => state.auth.favorite;