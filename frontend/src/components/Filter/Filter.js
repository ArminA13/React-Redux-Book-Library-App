import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handelTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handelAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handelFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handelFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handelResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
