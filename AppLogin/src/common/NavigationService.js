import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params = {}) {
  return navigationRef.current && navigationRef.current.navigate(name, params);
}

export function getRouteName() {
  return navigationRef.current && navigationRef.current?.getCurrentRoute().name;
}

export function reset(name, params = {}) {
  return navigationRef.current.reset({
    index: 0,
    routes: [
      {
        name,
        params,
      },
    ],
  });
}

export function gotoTopScreen() {
  return navigationRef.current && navigationRef.current.popToTop();
}
