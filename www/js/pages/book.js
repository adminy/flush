// main.js - changePageEvent
const bookPage = appendElement(document.body, "div", {
    id: 'bookPage',
    display: 'none',
    textAlign: 'center',
    verticaAlign: 'text-bottom',
    backgroundColor: "green",
    children: [
        {
            button: {
                text: 'got to login :D',
                onclick: () => changePage('book', 'login')
            }
        },
        {
            div: {
                text: '...',
            }
        },
    ]
})
document.addEventListener('changePage', (args) => {
    //i'm open
    // loginPage.style.display = 'block'
})