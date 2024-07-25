import React from "react";
import upIcon from "../../icons/ArrowUp.svg";
import downIcon from "../../icons/ArrowDown.svg";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === "") {
    return down;
  } else if (sort === down) {
    return up;
  } else if (sort === up) {
    return "";
  } else {
    return down;
  }
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : null;

  return (
    <span id={`${id}-sort-${value}`} onClick={onChangeCallback}>
      <span style={{ display: "flex", flexDirection: "column", width: "10px" }}>
        {icon === null && (
          <>
            <img
              id={`${id}-icon-up`}
              src={upIcon}
              alt="up icon"
              style={{ cursor: "pointer" }}
              onClick={() => onChange(pureChange("", down, up))}
            />
            <img
              id={`${id}-icon-down`}
              src={downIcon}
              alt="down icon"
              style={{ cursor: "pointer" }}
              onClick={() => onChange(pureChange("", down, up))}
            />
          </>
        )}
        {icon !== null && (
          <img
            id={`${id}-icon-${sort}`}
            src={icon}
            alt="sort icon"
            style={{ filter: "brightness(0)", cursor: "pointer" }}
            onClick={onChangeCallback}
          />
        )}
      </span>
    </span>
  );
};

export default SuperSort;
