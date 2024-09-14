import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  const handelTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handelFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          value={titleFilter}
          type="text"
          placeholder="Filter by Title..."
          onChange={handelTitleFilterChange}
        />
        <button type="button" onClick={handelFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
