const buttonTop = document.getElementById("btnTop")

window.onscroll = () => {
    scroll()
}

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block"
  } else {
    buttonTop.style.display = "none"
  }
}

function topPage() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}