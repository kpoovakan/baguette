"use strict";

window.addEventListener("message", (event) => {
    if (event.origin !== worker) return;
    const data = event.data;
    if (data && data.type === 'GITHUB_AUTH_SUCCESS') {
        console.log("Received data from GitHub OAuth: ", data.payload);
        /*const username = data.payload.username;
        console.log(`Your username is ${username}`);*/
        globalThis.temp = data.payload;
        if (typeof globalThis.temp === "object") {
            var idk = JSON.stringify(globalThis.temp.content);
        } else {
            for (var idk = globalThis.temp; typeof idk === "string";) {
                var idk = JSON.parse(idk);
                console.log(idk);
            }
            var idk = JSON.stringify(idk);
        }
        console.log(idk);
        window.localStorage.setItem("temp", idk);
        globalThis.temp = JSON.parse(idk);
        //window.localStorage.setItem("etag", globalThis.temp.etag);
        //window.localStorage.setItem("sha", globalThis.temp.sha);
        // etag and sha don't seem to be working... fix this later
        globalThis.temp = idk;
        globalThis.info = data.frontend;
        if (typeof globalThis.info === "object") {
            var json = JSON.stringify(globalThis.info);
        } else {
            for (var json = globalThis.info; typeof json === "string";) {
                var json = JSON.parse(json);
                console.log(json);
            }
            var json = JSON.stringify(json);
        }
        window.localStorage.setItem("info", json);
        globalThis.info = json;
        //window.location.reload();
    } else if (data && data.type === 'GITHUB_SAVE_SUCCESS') {
        globalThis.backendSave.postMessage({
            type: "GITHUB_SAVE_SEND",
            payload: localStorage.getItem("temp")
        }, worker);
        backendSave.close();
        saveNowButton(0);
    }
});

function userLogin() {
    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    if(window.localStorage.getItem("temp") && window.localStorage.getItem("etag")) {
        var loginLink = `${oauthLogin}&state=${window.localStorage.getItem("etag")}`;
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
        if(window.localStorage.getItem("sha")) {
            let sha = window.localStorage.getItem("sha");
            var loginLink = `${oauthSave}&state=${sha}`;
        } else {
            var loginLink = oauthSave;
        }
        globalThis.backendSave = window.open(
            `${loginLink}`,
            "login to Baguette with GitHub OAuth",
            `width=${width},height=${height},top=${top},left=${left}`
        );
    }
}

const worker = "https://baguette.kpoovakan.workers.dev";
const clientId = "Ov23liAFMkeev404onXY";
const oauthLogin = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user&redirect_uri=https://baguette.kpoovakan.workers.dev/callback`;
const oauthSave = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user&redirect_uri=https://baguette.kpoovakan.workers.dev/success`;