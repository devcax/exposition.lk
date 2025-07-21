export const navigateBack = () => {
  window.history.back();
};

export const navigateTo = (url: string) => {
  window.location.href = url;
};