export default function SearchBar({ value, changeInput, changeArticles }) {
  return (
    <>
      <div className="flex gap-2 my-4 justify-center items-center lp:justify-start lpl:justify-center">
        <input
          type="text"
          className="border py-0.5 px-2 rounded-lg grow tb:grow-0 basis-1/2"
          value={value}
          onChange={changeInput}
        ></input>
        <button
          onClick={changeArticles}
          className="px-1 py-0.5 border rounded-lg"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
}
