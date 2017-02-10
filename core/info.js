export const MY_PROFILE = 'MY_PROFILE';
export const MY_SERVICES = 'MY_SERVICES';
export const MY_BRANDS = 'MY_BRANDS';
export const MY_REVIEWS = 'MY_REVIEWS';

export const infoReducer = (state = {
  profile: {},
  services: [],
  brands: {
    photos: [],
  },
  reviews: {list:[]},
}, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return { ...state, profile: action.data };
    case MY_SERVICES:
      return { ...state, services: action.data };
    case MY_BRANDS:
      return { ...state, brands: action.data };
    case MY_REVIEWS:
      return { ...state, reviews: action.data };
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
export const getBrands = () => async (dispatch, getState) => {
  if (getState().infoReducer.brands.title) {
    return;
  }
  const brands = await fetch('/json/brands.json').then(r => r.json());
  dispatch({
    type: MY_BRANDS,
    data: brands,
  });
};
export const getReviews = () => async (dispatch, getState) => {
  if (getState().infoReducer.reviews.list.length) {
    return;
  }
  const reviews = await fetch('/json/reviews.json').then(r => r.json());
  dispatch({
    type: MY_REVIEWS,
    data: reviews,
  });
};
