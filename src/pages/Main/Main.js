import { useState } from "react";
import SearchId from "./SearchId";
import ASIDE_LIST from "./data";
import FeedList from "./FeedList";
import "./Main.scss";

function Mainjiyoung() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <nav>
        <div className="navContent">
          <div className="navInner">
            <div className="logoBox">
              <img
                src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                alt="logo"
              />
              <span className="mainLogo">westagram</span>
            </div>
            <div className="searchBox">
              <img
                src={`${process.env.PUBLIC_URL}/images/search.png`}
                alt="search"
                className="searchImg"
              />
              <input
                type="text"
                placeholder="search"
                id="searchInput"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              {searchInput.length > 0 && (
                <div className="filterBox">
                  <SearchId searchInput={searchInput} />
                </div>
              )}
            </div>
            <div className="navIcon">
              <img
                src={`${process.env.PUBLIC_URL}/images/explore.png`}
                alt="explore"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/heart.png`}
                alt="heart"
              />
              <div className="navProfile">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt="profile"
                />
                <div className="hidemenu">
                  <ul>
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/profile.png`}
                        alt="profile"
                      />
                      프로필
                    </li>
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/save-instagram.png`}
                        alt="save"
                      />
                      저장됨
                    </li>
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/settings.png`}
                        alt="settings"
                      />
                      설정
                    </li>
                    <li className="logout">로그아웃</li>
                  </ul>
                </div>
                {/* <!--hidemenu --> */}
              </div>
              {/* <!--navProfile --> */}
            </div>
            {/* <!--navIcon --> */}
          </div>
          {/* <!--navInner --> */}
        </div>
        {/* <!--navContent --> */}
      </nav>

      <main>
        <div className="wrap">
          <div className="feeds">
            <FeedList />
          </div>
          {/* <!--feeds --> */}

          {/* <!-- mainRight --> */}
          <div className="mainRight">
            <div className="mainProfile">
              <div className="profileInfo">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/zhwltlr.png`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">zhwltlr</span>
                    <span className="userMessage">zhwltlr 입니다</span>
                  </p>
                </div>
              </div>
            </div>
            {/* <!--mainProfile --> */}
            <div className="storyBox">
              <div className="innerTitle">
                <h2>스토리</h2>
                <span>모두 보기</span>
              </div>
              <div className="rightBox">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/song.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_music</span>
                    <span className="userMessage">9시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/dog.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_dog</span>
                    <span className="userMessage">5시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/movie.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_movie</span>
                    <span className="userMessage">10시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/christmas.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">christmas_soon</span>
                    <span className="userMessage">8시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/trip.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">gonnatrip</span>
                    <span className="userMessage">2시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/itzy.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">itzy.all.in.us</span>
                    <span className="userMessage">8시간전</span>
                  </p>
                </div>
              </div>
              {/* <!--storyInner --> */}
            </div>
            {/* <!--storyBox --> */}

            <div className="recommend">
              <div className="innerTitle">
                <h2>회원님을 위한 추천</h2>
                <span>모두 보기</span>
              </div>
              <div className="rightBox">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/detective.png`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_conan</span>
                    <span className="userMessage">코난을 좋아해요</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/itzy.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_itzy</span>
                    <span className="userMessage">있지 사랑해...</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/baseball.png`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_baseball</span>
                    <span className="userMessage">
                      삼성라이온즈 팬. 우승좀..
                    </span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/flower.jpg`}
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyp_0808</span>
                    <span className="userMessage">이제 쓸 아이디도 없네요</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
              </div>
            </div>
            {/* <!--recommend --> */}
            <aside>
              <ul className="asideList">
                {ASIDE_LIST.map((el) => {
                  return (
                    <li key={el.id} className="asideMenu">
                      {el.text}•
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
          {/* <!--mainRight --> */}
        </div>
        {/* <!--wrap --> */}
      </main>
    </>
  );
}

export default Mainjiyoung;
