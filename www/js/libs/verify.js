// marin.js - $
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const nameRegex = /^[0-9A-Za-z_]+$/

const assertEmail = (value) => (emailRegex.test(value) && value.length < 40)
const assertUsername = (value) => nameRegex.test(value) && value.length > 3 && value.length < 33
const assertNicknameOrPass  = (value) => value.length > 3 && value.length < 33

