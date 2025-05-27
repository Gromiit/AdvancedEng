const Title = document.getElementById("title");
const Board = document.getElementById("board");
const Details = document.getElementById("detail");
const Time = new Date();
const reTime = Time.toLocaleString();

function backBtn() {
  history.back();
}

let javaIndex = Number(localStorage.getItem("Java_index")) || 0;
let pythonIndex = Number(localStorage.getItem("Python_index")) || 0;
let rIndex = Number(localStorage.getItem("R_index")) || 0;

function FinishBtn() {
  const postDetail = {
    제목: Title.value,
    옵션: Board.value,
    내용: Details.value,
    시간: reTime,
  };

  let key = "";

  if (postDetail.옵션 === "Java") {
    key = "Java" + javaIndex;
    javaIndex++;
    localStorage.setItem("Java_index", javaIndex);
  } else if (postDetail.옵션 === "Python") {
    key = "Python" + pythonIndex;
    pythonIndex++;
    localStorage.setItem("Python_index", pythonIndex);
  } else if (postDetail.옵션 === "R") {
    key = "R" + rIndex;
    rIndex++;
    localStorage.setItem("R_index", rIndex);
  } else {
    alert("옵션이 잘못되었습니다. Java, Python, R 중 하나여야 합니다.");
    return;
  }

  localStorage.setItem(key, JSON.stringify(postDetail));
  console.log("저장된 게시물:", key, postDetail);

  Title.value = "";
  Board.value = "";
  Details.value = "";
  history.back();
}
