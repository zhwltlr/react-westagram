const SearchId = (props) => {
  const idData = [
    { id: "zhwltlr", profile: `${process.env.PUBLIC_URL}/images/zhwltlr.png` },
    { id: "jyp_0808", profile: `${process.env.PUBLIC_URL}/images/flower.jpg` },
    {
      id: "jyinfo_music",
      profile: `${process.env.PUBLIC_URL}/images/song.jpg`,
    },
    { id: "jyinfo_dog", profile: `${process.env.PUBLIC_URL}/images/dog.jpg` },
    {
      id: "jyinfo_movie",
      profile: `${process.env.PUBLIC_URL}/images/movie.jpg`,
    },
    {
      id: "christmas_soon",
      profile: `${process.env.PUBLIC_URL}/images/christmas.jpg`,
    },
    { id: "gonnatrip", profile: `${process.env.PUBLIC_URL}/images/trip.jpg` },
    {
      id: "jyfav_conan",
      profile: `${process.env.PUBLIC_URL}/images/detective.png`,
    },
    { id: "jyfav_itzy", profile: `${process.env.PUBLIC_URL}/images/itzy.jpg` },
    {
      id: "jyfav_baseball",
      profile: `${process.env.PUBLIC_URL}/images/baseball.png`,
    },
  ];
  return (
    <>
      {idData.map((el, i) => {
        if (props.searchInput && el.id.includes(props.searchInput)) {
          return (
            <div key={i} className="filterId">
              <img src={el.profile} alt="img" className="filterImg" />
              {el.id}
            </div>
          );
        }
      })}
    </>
  );
};

export default SearchId;
