const language = JSON.parse(localStorage.getItem("lang"));

export default {
    isSignIn: {value: false},
    user_username: { uname: "" },
    user_fullname: { fullname: "" },
    user_email: { email: null },
    user_password: { password: "" },
    user_id: { uid: "" },
}