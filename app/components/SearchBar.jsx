export default function SearchBar({ value, changeInput, changeArticles }) {
  return (
    <>
      <div className="flex gap-2 mt-2 justify-center items-center">
        <input
          type="text"
          className="border py-0.5 px-2 rounded-lg"
          value={value}
          onChange={changeInput}
        ></input>
        <button
          onClick={changeArticles}
          className="px-1 py-0.5 border rounded-lg "
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
}
