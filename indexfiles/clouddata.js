"use strict";

window.addEventListener("message", (event) => {
    if (event.origin !== worker) return;
    const data = event.data;
    if (data && data.type === 'GITHUB_AUTH_SUCCESS') {
        console.log("Received data from GitHub OAuth: ", data.payload);
        /*const username = data.payload.username;
        console.log(`Your username is ${username}`);*/
        globalThis.temp = JSON.stringify(data.payload);
        document.getElementById("debugger").innerHTML = globalThis.temp;
        window.localStorage.setItem("temp", globalThis.temp);
        globalThis.temp = data.payload;
        window.localStorage.setItem("etag", data.payload.etag);
    } else if (data && data.type === 'GITHUB_SAVE_SUCCESS') {
        globalThis.backendSave.postMessage({
            type: "GITHUB_SAVE_SEND",
            payload: localStorage.getItem("temp")
        }, worker);
    }
});

function userLogin() {
    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    if(window.localStorage.getItem("temp") && window.localStorage.getItem("etag")) {
        var loginLink = `${oauthLogin}?state=${window.localStorage.getItem("etag")}`;
    } else {
        var loginLink = oauthLogin;
    }

    globalThis.backendAuth = window.open(
        `${loginLink}`,
        "login to Baguette with GitHub OAuth",
        `width=${width},height=${height},top=${top},left=${left}`
    );
}

async function userSave() {
    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    try {
        await fetch(`${worker}/send`, {
            method: "POST",
            body: window.localStorage.getItem("temp"),
            headers: {
                "Content-type": "application/json"
            }
        });
    } catch (error) {}
    finally {
        globalThis.backendSave = window.open(
            `${oauthSave}`,
            "login to Baguette with GitHub OAuth",
            `width=${width},height=${height},top=${top},left=${left}`
        );
    }
}

const worker = "https://baguette.kpoovakan.workers.dev";
const clientId = "Ov23liAFMkeev404onXY";
const oauthLogin = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user&redirect_uri=https://baguette.kpoovakan.workers.dev/callback`;
const oauthSave = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user&redirect_uri=https://baguette.kpoovakan.workers.dev/success`;