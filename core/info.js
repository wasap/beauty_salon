export const MY_PROFILE = 'MY_PROFILE';
export const MY_SERVICES = 'MY_SERVICES';

export const infoReducer = (state = {
  profile: {},
  services: [],
}, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return { ...state, profile: action.data };
    case MY_SERVICES:
      return { ...state, services: action.data };
    default:
      return state;
  }
};

export const getProfile = () => async (dispatch, getState) => {
  if (Object.keys(getState().infoReducer.profile).length) {
    return;
  }
  const profile = await fetch('/json/profile.json').then(r => r.json());
  dispatch({
    type: MY_PROFILE,
    data: profile,
  });
};

export const getServices = () => async (dispatch, getState) => {
  if (getState().infoReducer.services.length) {
    return;
  }
  const services = await fetch('/json/services.json').then(r => r.json());
  dispatch({
    type: MY_SERVICES,
    data: services,
  });
};
