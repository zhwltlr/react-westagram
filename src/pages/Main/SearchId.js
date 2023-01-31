const SearchId = (props) => {
  const idData = [
    { id: "zhwltlr", profile: "/images/zhwltlr.png" },
    { id: "jyp_0808", profile: "/images/flower.jpg" },
    { id: "jyinfo_music", profile: "/images/song.jpg" },
    { id: "jyinfo_dog", profile: "/images/dog.jpg" },
    { id: "jyinfo_movie", profile: "/images/movie.jpg" },
    { id: "christmas_soon", profile: "/images/christmas.jpg" },
    { id: "gonnatrip", profile: "/images/trip.jpg" },
    { id: "jyfav_conan", profile: "/images/detective.png" },
    { id: "jyfav_itzy", profile: "/images/itzy.jpg" },
    { id: "jyfav_baseball", profile: "/images/baseball.png" },
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
