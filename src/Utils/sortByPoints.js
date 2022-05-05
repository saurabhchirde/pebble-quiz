export const sortByPoints = (usersList) => {
  let sortedList = [...usersList];
  return sortedList.sort((a, b) => b.totalScore - a.totalScore);
};
