// main.js - changePageEvent
// marin.js - css, BR, appendElement

const registerPage = appendElement(document.body, "div", {
    id: 'registerPage',
    display: 'none',
    backgroundColor: 'blue',
    height: '100vh',
    textAlign: 'center',
})
const registerContentWrapper = appendElement(registerPage, 'div', {
    id: 'registerContentWrapper',
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

const centeredRegisterDiv = appendElement(registerContentWrapper, 'div', {
    fontSize: '28px',
    child: {
        p: {
            color: 'white',
            text: 'Register page',
            marginTop: '20%',
        }
    },
})

const nicknameInput = appendElement(centeredRegisterDiv, 'input', {
    type: 'text', placeholder: 'nickname'
})
appendElement(centeredRegisterDiv, 'br')
const usernameInput = appendElement(centeredRegisterDiv, 'input', {
    type: 'text', placeholder: 'username'
})
appendElement(centeredRegisterDiv, 'br')
const emailInput = appendElement(centeredRegisterDiv, 'input', {
    type: 'email', placeholder: 'example@domain@shit.com'
})
appendElement(centeredRegisterDiv, 'br')
const passwordInput = appendElement(centeredRegisterDiv, 'input', {
    type: 'password', placeholder: '******'
})
appendElement(centeredRegisterDiv, 'br')

const register = () => {
    const fieldChecksArray = [
        {   name: 'nickname',
            value: nicknameInput.value,
            passedCheck: assertNicknameOrPass(nicknameInput.value),
            errorMsg: 'Nickname should consist between 4-32 characters',
        },
        {   name: 'password',
            value: passwordInput.value,
            passedCheck: assertNicknameOrPass(passwordInput.value),
            errorMsg: 'Password should consist between 4-32 characters',
        },
        {   name: 'username',
            value: usernameInput.value,
            passedCheck: assertUsername(usernameInput.value),
            errorMsg: 'Username must contain now symbols and consist between 4-32 characters',
        },
        {
            name: 'email',
            value: emailInput.value,
            passedCheck: assertEmail(emailInput.value),
            errorMsg: 'Invalid email address :(',
        }
    ]
    const fieldObjArray = fieldChecksArray.filter(item => !item.passedCheck)
    
    if (fieldObjArray.length > 0) {
        fieldObjArray.forEach(fieldObj => alert(fieldObj.errorMsg))
    } else {
        const cleanedObjArray = fieldChecksArray.map(({ name, value }) => ({ name, value }))
        socket.write(encoder.encode(JSON.stringify(cleanedObjArray)))
    }
}
const registerButton = appendElement(centeredRegisterDiv, 'button', {
    borderRadius: '2px',
    border: '1px solid red',
    background: 'rgba(25, 255, 25, 0.3)',
    color: '#EAEAEA',
    text: 'register',
        onclick: register,
})
const toLoginPage = appendElement(centeredRegisterDiv, 'button', {
    border: '1px solid #0000',
    background: 'rgba(25, 255, 25, 0)',
    color: '#EAEAEA',
    position: 'absolute',
    margin: 'auto',
    bottom: '10%',
    overflow: 'hidden',
    left: 'calc(50% - 100px)',
    text: 'Login page',
    textDecoration: 'underline',
    onclick: () => changePage('register', 'login', {
        token: 'ergju453g8ure'
    }),
    /* 100px is 1/2 of 200, used for centering aboslute with no flex box*/
    width: '200px',
})
document.addEventListener('changePage', (args) => {
    //i'm open
    // loginPage.style.display = 'block'
})