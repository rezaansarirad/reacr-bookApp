import { IoSearchSharp } from "react-icons/io5";
import styles from './SearchBox.module.scss'
function SearchBox({ serachHandler, setSearch, search }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={serachHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
