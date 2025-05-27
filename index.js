function showPost(language) {
  const PostBox = document.querySelector(".postBox");
  PostBox.innerHTML = "";

  let index = 0;
  while (true) {
    const key = language + index;
    const value = localStorage.getItem(key);
    if (!value) break;

    const post = JSON.parse(value);
    PostBox.innerHTML += `
        <div class="post" onclick="location.href='post.html'">
          <h3>${post.제목}</h3>
          <h4>${post.내용}</h4>
          <p>${post.시간}</p>
        </div>
      `;
    index++;
  }

  if (index === 0) {
    PostBox.innerHTML = "<p>게시물이 없습니다.</p>";
  }
}

document.addEventListener("click", function (e) {
  const postDiv = e.target.closest(".post");
  if (postDiv) {
    const title = postDiv.querySelector("h3").textContent;
    const content = postDiv.querySelector("h4").textContent;
    const time = postDiv.querySelector("p").textContent;

    const posted = {
      title: title,
      content: content,
      time: time,
    };

    localStorage.setItem("posted", JSON.stringify(posted));

    location.href = "post.html";
  }
});
