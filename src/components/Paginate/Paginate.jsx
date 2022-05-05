import styles from "./paginate.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import {getPagesArray, getNumbersShowedRepositories, getPagesArrayForRender, getPageCount} from "./helpers";

export const Paginate = ({ totalRepositories }) => {
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.manageUserDataReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
  }, [user.login]);

  let pageCount = getPageCount(totalRepositories, 4);
  let pagesArray = getPagesArray(pageCount);

  const createDispatch = (page) => {
    return dispatch({
      type: ACTIONS.GET_USER_REPOSITORIES_REQUEST,
      userName: user.login,
      page: page,
    });
  };

  const onClickPreviousArrow = (page) => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    createDispatch(page - 1);
  };

  const onClickNextArrow = (pages, page) => {
    if (page === pages.length) {
      return;
    }
    setPage(page + 1);
    createDispatch(page + 1);
  };

  const onClickPage = (page) => {
    setPage(page);
    createDispatch(page);
  };

  const numbersShowedRepositories = getNumbersShowedRepositories(page, pagesArray, totalRepositories);
  const RepositoryPages = getPagesArrayForRender(pagesArray, page);

  return (
    <>
      {RepositoryPages.length <= 1 ? (
        ""
      ) : (
        <div className={styles["paginate-wrap"]}>
          <pre>{`${numbersShowedRepositories[0]} - ${numbersShowedRepositories[1]} of ${totalRepositories} items`}</pre>

          <PreviousArrow
            onClick={() => onClickPreviousArrow(page)}
            disabled={page === 1}
            className={styles.arrow}
          />
          {RepositoryPages.map((pageItem) => {
            if (pageItem === "...") {
              return "...";
            }
            return (
              <button
                key={pageItem}
                className={styles[page === pageItem ? "active-page" : "page"]}
                onClick={() => onClickPage(pageItem)}
              >
                {pageItem}
              </button>
            );
          })}
          <NextArrow
            disabled={page === pagesArray.length}
            onClick={() => onClickNextArrow(pagesArray, page)}
            className={styles.arrow}
          />
        </div>
      )}
    </>
  );
};

const NextArrow = ({ onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <i className={`fa fa-solid fa-angle-right`}></i>
    </button>
  );
};

const PreviousArrow = ({ onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <i className=" fa fa-solid fa-angle-left"></i>
    </button>
  );
};
