const getUrlParam = (key) => {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(key);
  return value;
};
