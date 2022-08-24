const copyEmail = () => {
    const email = "recco.fred01@gmail.com"
    let inputTest = document.createElement("input")
    inputTest.value = email
    document.body.appendChild(inputTest)
    inputTest.select()
    document.execCommand('copy')
    document.body.removeChild(inputTest)
    alert("Email successfully copied: " + email)
}