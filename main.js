const cbtn = document.querySelector('.copy-btn')
const txtArea1 = document.querySelector('.text-area1')
cbtn.addEventListener('click', (e) => {
    navigator.clipboard.writeText(txtArea1.value).then(() => {
        alert("Text copied to clipboard! Ohhh yeah boiii!")
    })
})

const pbtn = document.querySelector('.paste-btn')
pbtn.addEventListener('click', (e) => {
    navigator.clipboard.readText().then((clipboardText) => {
        txtArea1.value += clipboardText;
    }, () => {
        alert('Failed to access clipboard! Allow permission to access the clipboard in your browser. Wachu doin dude? Cmon dawg!')
    })
})