const info = window;
// console.log(info.screen);
document.querySelector('button').onclick=()=>{
  // window.open('https://google.com', "", "width=1200,height=900")
  // location.assign('https://google.com')
  console.log(window.location.href.slice(42,99));
  console.log(window.location.href.length);
}