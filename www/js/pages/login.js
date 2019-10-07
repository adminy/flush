// main.js - changePageEvent
// marin.js - BR, appendElement, conv2UInt8Array

const loginPage = appendElement(document.body, "div", {
    id: 'loginPage',
    display: 'none',
    backgroundColor: 'blue',
    height: '100vh',
    textAlign: 'center',
})
const loginContentWrapper = appendElement(loginPage, 'div', {
    id: 'loginContentWrapper',
    display: 'flex',

    background: 'rgba(15, 255, 15, .3)',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    // alignItems: 'center',
    // display: 'normal',
    // alignItems: 'center',
    // top: '50%',
    // paddingTop: '150px',
})

document.addEventListener('keypress', (event) => {
    if (event.charCode === 13) {
        socket.write(encode($("login-username").value))
    
    }
})
const login = () => {
    changePage('login', 'book')
}

const centeredContentWrapper = appendElement(loginContentWrapper, 'div', {
    class: 'centeredLoginContent',
    fontSize: '28px',
    children: [            
        {  
            p: {
                color: 'white',
                text: 'Login page',
                marginTop: '50%',
        }},
        { input: {id: 'login-username', type: 'text', placeholder: 'Username' } }, BR,
        { input: {id: 'login-password', type: 'password', placeholder: '******' } }, BR,BR,
        { button: {
            borderRadius: '2px',
            border: '1px solid red',
            background: 'rgba(25, 255, 25, 0.3)',
            color: '#EAEAEA',
            text: 'Login ...',
            onclick: login,
        } },
        { button: {
            // borderRadius: '2px',
            border: '1px solid #0000',
            background: 'rgba(25, 255, 25, 0)',
            color: '#EAEAEA',
            position: 'absolute',
            margin: 'auto',
            bottom: '10%',
            overflow: 'hidden',
            left: 'calc(50% - 100px)',
            text: 'Register page',
            textDecoration: 'underline',
                onclick: () => changePage('login', 'register', {
                    token: 'ergju453g8ure'
                }),
        width: '200px',
        } },

    ]
})
document.addEventListener('changePage', (args) => {
    //i'm open
    // loginPage.style.display = 'block'
})