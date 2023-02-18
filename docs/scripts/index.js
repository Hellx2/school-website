document.getElementById("showpwd").checked = false;
let geid = x => document.getElementById(`${x}`) || document.createElement("div");

document.getElementById("showpwd").addEventListener("change", () => {
    document.getElementById("pwd").type = document.getElementById("showpwd").checked ? "text" : "password";
})

function login() {
    let name = geid("username").innerText;
    let pwd = geid("pwd").innerText;
    let valid = true;
    if(pwd.length < 8) {
        
    }
    if(name.split(/[a-z]+/).length > 1) {}
    if(valid) main();
}

function main() {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
}