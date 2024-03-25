import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import s2 from "../../s1-main/App.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s from "./Loader.module.css";
import { loadingAC } from "./bll/loadingReducer";
import { getIsLoading } from "./bll/store";
// import { Loader } from "./Loader";

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const setLoading = () => {
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    // setTimeout
    const action = loadingAC(true);
    dispatch(action);

    setTimeout(() => {
      const action = loadingAC(false);
      dispatch(action);
    }, 1500);
  };

  return (
    <div id={"hw10"}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={s2.hw}>
        {isLoading ? (
          <div id={"hw10-loading"}>
            <CircularProgress color="secondary" size={70} />
            {/* <Loader /> */}
          </div>
        ) : (
          <SuperButton
            className={s.button}
            id={"hw10-button-start-loading"}
            onClick={setLoading}
          >
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
