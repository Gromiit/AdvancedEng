function postBackBtn() {
  history.back();
}

window.onload = function () {
  const posted = JSON.parse(localStorage.getItem("posted"));

  if (posted) {
    const postContainer = document.getElementById("postTitDet");
    const h2 = postContainer.querySelector("h2");
    const h3 = postContainer.querySelector("h3");
    const p = postContainer.querySelector("p");

    h2.textContent = posted.title;
    h3.textContent = posted.content;
    p.textContent = posted.time;
  } else {
    document.getElementById("postTitDet").innerHTML =
      "<p>저장된 게시글이 없습니다.</p>";
  }
};
