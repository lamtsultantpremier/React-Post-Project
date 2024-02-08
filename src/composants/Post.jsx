export default function Post({ data, liker, effacerLike }) {
  return (
    <div className={data.liker ? "post active" : "post"}>
      <div>
        <h4>{data.titre}</h4>
        <p>{data.description}</p>
      </div>
      <div className="btn">
        <button onClick={() => liker(data)}>
          {data.liker == false ? "Liker" : "Deja Liker"}
        </button>
        <button onClick={() => effacerLike(data.id)} className="delete">
          Effacer
        </button>
      </div>
    </div>
  );
}
