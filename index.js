function signUpBttn() {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const id = document.getElementById("id").value;
  const pw = document.getElementById("pw").value;

  if (!name || !age || !id || !pw) {
    alert("모든 정보를 입력해주세요.");
    return;
  }

  const info = { name, age, id, pw };
  let count = Number(localStorage.getItem("userCount") || 0) + 1;

  localStorage.setItem(`user${count}`, JSON.stringify(info));
  localStorage.setItem("userCount", count);

  alert("회원가입 완료!");

  location.reload(true);
}

function logInBttn() {
  event.preventDefault();

  const idLog = document.getElementById("idLog").value;
  const pwLog = document.getElementById("pwLog").value;
  const count = Number(localStorage.getItem("userCount") || 0);

  for (let i = 0; i <= count; i++) {
    const info = JSON.parse(localStorage.getItem(`user${i}`));
    if (info && info.id === idLog && info.pw === pwLog) {
      localStorage.setItem("loggedInUser", info.id);
      window.location.href = "welcome.html";
      return;
    }
  }

  alert("아이디 또는 비밀번호가 틀렸습니다.");
}
