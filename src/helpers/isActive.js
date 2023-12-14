const isActive = (nActive = "") => {
  return nActive?.toLowerCase() === window.location.pathname?.toLowerCase();
};

export default isActive;
