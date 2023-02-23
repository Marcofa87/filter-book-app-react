import { items } from "../../book-json/Books";
import "./bookfilter.css";

function BookFilter({ handleFilterChange }) {
  const handleSelectChange = (event) => {
    const filterType = event.target.value;
    handleFilterChange(filterType);
  };

  return (
    <div className="filter">
      <label htmlFor="filter-select">Filter by:</label>
      <select id="filter-select" onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="price">Price</option>
        <option value="releaseDate">Release Date</option>
      </select>
    </div>
  );
}

export default BookFilter;
