function dropdownLanguage() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = (e) => {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}