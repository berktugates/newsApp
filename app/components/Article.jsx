export default function Article({
  author,
  title,
  content,
  description,
  source,
  url,
  urlToImage,
}) {
  return (
    <>
      <div id="article" className="border p-2 mb-2 rounded-md">
        <img src={urlToImage? urlToImage : "https://coflex.com.tr/wp-content/uploads/2021/01/resim-yok.jpg"} alt={url} className="rounded-lg mx-auto" />
        <h1 className="mt-2 font-medium">{title}</h1>
        <p className="mt-1">{description}</p>
        <div className="flex justify-between mt-3">
          <p className="border rounded-lg p-1">{source?.name ? source.name : <a href={source.name}>Link</a>}</p>
          <p className="border rounded-lg p-1" >
            {" "}
            {author?.length < 20 ? author : null}
          </p>
        </div>
      </div>
    </>
  );
}
