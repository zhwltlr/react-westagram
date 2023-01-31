import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const saveUserId = (e) => {
    setIdValue(e.target.value);
  };
  const saveUserPw = (e) => {
    setPwValue(e.target.value);
  };
  const inputEnter = (e) => {
    if (e.code === "Enter") {
      navigate("/main");
    }
  };

  const validator =
    idValue && idValue.includes("@") && pwValue && pwValue.length >= 5;

  return (
    <main className="login">
      <div className="loginContainer">
        <div className="inputContainer">
          <div className="loginLogo">westagram</div>
          <form>
            <input
              onChange={saveUserId}
              type="text"
              name="idInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={saveUserPw}
              onKeyDown={inputEnter}
              type="password"
              name="pwInput"
              placeholder="비밀번호"
            ></input>
            <Button
              onClick={() => {
                validator
                  ? navigate("/main")
                  : alert("아이디와 비밀번호를 확인해주세요");
              }}
              variant="primary"
              id="loginBtn"
              disabled={!validator ? true : false}
            >
              로그인
            </Button>
            {/* <Link to="/main">main으로 이동</Link> */}
          </form>
        </div>
        <p>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
