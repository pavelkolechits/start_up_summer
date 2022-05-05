export const getPageCount = (totalRepositories, limit) => {
  return Math.ceil(totalRepositories / limit);
};

export const getPagesArray = (totalPages) => {
  const pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
};

export const getPagesArrayForRender = (PageArray, pageNumber) => {
  let lastPage = PageArray.length;

  if (lastPage < 5) {
    return PageArray;
  } else if (pageNumber < 4 && pageNumber !== 3) {
    return [1, 2, 3, "...", lastPage];
  } else if (pageNumber > lastPage - 3 && pageNumber !== lastPage - 2) {
    return [1, "...", lastPage - 2, lastPage - 1, lastPage];
  }

  return [
    1,
    "...",
    ...PageArray.slice(pageNumber - 2, pageNumber + 1),
    "...",
    lastPage,
  ];
};

export const getNumbersShowedRepositories = (page, pagesArray, totalRepositories) => {
  if (page === pagesArray.length) {
    return [page * 4 - 3, totalRepositories];
  }
  return [page * 4 - 3, page * 4];
};
