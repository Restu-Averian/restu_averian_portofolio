const sortArrObj = ({ arr = [], key = "" }) => {
  return arr?.sort((a, b) => {
    if (a?.[key] > b?.[key]) {
      return 1;
    } else if (a?.[key] < b?.[key]) {
      return -1;
    }
    return 0;
  });
};
export default sortArrObj;
