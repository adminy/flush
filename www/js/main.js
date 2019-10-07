// marin.js - css, $
css('html', {
    background: 'red',
    'font-family': 'Arial',
    'font-size': '240%',
})
css('button', {
    '-webkit-appearance': 'none',
    marginBottom: '7px',
})
css('div > input, div > button', {
    'font-size': 'inherit'
})
const changePageEvent = new CustomEvent("changePage")
changePage = (currentPageName, nextPageName, args) => {
    console.log(`off: ${currentPageName} to: ${nextPageName}`)
    $(currentPageName + 'Page').style.display = 'none'
    $(nextPageName + 'Page').style.display = 'block'
    
    document.dispatchEvent(changePageEvent, args)
}
changePage('login', 'login')

appendElement(document.body, 'div', {
    id: 'net_status',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '48px',
    background: 'gray'
})


const connect = () => {
    $('net_status').style.background = 'gray'
    socket = new Socket()
    socket.open(ADDR, PORT, function() {
            $('net_status').style.background = 'green'
                socket.write(encoder.encode('aaaaaaaaaaaaaaaa connected'));
            },
            function(errorMessage) {
                $('net_status').style.background = 'red'
                setTimeout(() => connect(), 1000)
            });

    socket.onClose = (errorMsg) => {
        $('net_status').style.background = 'red'
        setTimeout(() => connect(), 1000)
    }
    socket.onData = (DATA) => {
        console.log('cccccccccc ....', DATA)
    }
}

let socket; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ADDR = '192.168.1.77'
const PORT = 8888
document.addEventListener('deviceready', () => {
    connect()
    
}, false)


