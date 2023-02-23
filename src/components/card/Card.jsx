import { items } from "../../book-json/Books";
import "./card.css";

function MediaCard({ books }) {
  const tableHead = [
    "Title",
    "Author",
    "Description",
    "Release Date",
    "Year",
    "Publisher",
    'Price',
    'Link to buy'
  ];
  return (
    <table className="card-table">
      <thead>
        <tr>
          {tableHead.map((table, id) => (
            <th key={id}>{table}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr className="card" key={book.id}>
            <td className="card-image-container">
              <img className="card-img" src={book.imageUrl} alt={book.title} />
            </td>
            <td className="card-title">{book.title}</td>
            <td className="card-author">{book.author}</td>
            <td className="card-description">{book.description}</td>
            <td className="card-release-date">{book.releaseDate}</td>
            <td className="card-publisher">{book.publisher}</td>
            <td className="card-price">{book.price}</td>
            <td className="card-buy-now">
              <button className="btn">Buy Now</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MediaCard;
