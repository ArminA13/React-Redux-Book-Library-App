import { useDispatch, useSelector } from "react-redux";
import { setTitleFilter } from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector((state) => state.filter.title);

  const handelTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
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
      </div>
    </div>
  );
};

export default Filter;
