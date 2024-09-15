import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handelTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handelAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handelResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            type="text"
            placeholder="Filter by Title..."
            onChange={handelTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            type="text"
            placeholder="Filter by Author..."
            onChange={handelAuthorFilterChange}
          />
        </div>
        <button type="button" onClick={handelResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
