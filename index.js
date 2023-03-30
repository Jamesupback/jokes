window.onload=()=>{fetchquote();generateRandomGradient()}
const text=document.getElementById("text");
const butt=document.getElementById("butt");
const auth=document.getElementById("author");
butt.addEventListener("click",()=>{
    fetchquote();
    generateRandomGradient();
})
function fetchquote(){
fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  .then(response => response.json())
  .then(data => {
    const joke = data.joke;
    const authe=data.category;
    console.log(authe)
    console.log(joke);
    auth.innerText="~"+authe;
    text.innerText=joke;
  })
}
function generateRandomGradient() {
  // Generate two random colors in hexadecimal format
  const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
  document.body.style.background=gradient;
}
