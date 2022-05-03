import { useState } from "react";
import { ACTIONS } from "../../redux/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./paginate.module.scss";
import { useEffect } from "react";
import {
  getPagesArray,
  getNumbersShowedRepositories,
  getPagesArrayForRender,
  getPageCount,
} from "./helpers";
import { useMemo } from "react";

export const Paginate = ({ totalRepositories }) => {
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.manageUserDataReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setPage(1)
  },[user.login])
  

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
    if (page === pages[pages.length - 1]) {
      return;
    }
    setPage(page + 1);
    createDispatch(page + 1);
  };

  const onClickPage = (i) => {
    setPage(i);
    createDispatch(page);
  };

  const numbersShowedRepositories = getNumbersShowedRepositories(
    page,
    pagesArray,
    totalRepositories
  );

  const RepositoryPages = useMemo(() => {
    return getPagesArrayForRender(pagesArray, page);
  }, [totalRepositories]);

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

          {RepositoryPages.map((i) => {
            if (i === "...") {
              return "...";
            }
            return (
              <button
                key={i}
                className={styles[page === i ? "active-page" : "page"]}
                onClick={() => onClickPage(i)}
              >
                {i}
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
