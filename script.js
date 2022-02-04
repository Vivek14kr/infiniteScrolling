// Selecting The Container.
const container = document.querySelector(".container");
let count = 1

function dj(){
     let i = 25;
     for (let k = 0; k < i; k++) {
       var post = document.createElement("div");
       post.className = "text";
       post.innerHTML = `<h1>Masai School: ${count}</h1>`;
       //   Appending the post to the container.
       container.appendChild(post);
       count++
     }

}

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  console.log(scrollHeight, scrollTop, clientHeight)
  if (scrollTop + clientHeight > scrollHeight - 5) {
    setTimeout(createPost, 2000);
  }
});
// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost() {
    let i = 25
    for (let k = 0; k < i; k++){
  const post = document.createElement("div");
  post.className = "text";
  post.innerHTML = `<h1>Masai School: ${count}</h1>`;
  //   Appending the post to the container.
  container.appendChild(post);
  count++
    }

}
