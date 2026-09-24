"use strict";
const contentLoggedOut = `
            <div class="mainHeader">
                <h3>Baguette</h3>
                <div class="mainHeaderButtonsContainer">
                    <a href="#plans"><button class="mainHeaderButtons mainHeaderLess">view plans</button></a>
                    <button class="mainHeaderButtons" onclick="clouddataLogin()">login&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1.0rem" viewBox="0 -960 960 960" fill="currentcolor" style="vertical-align: middle;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                </div>
                <div class="clear"></div>
            </div>
            <h1>Overview</h1>
            <p>FOR BAKERIES, FROM KPOOVAKAN — Built with small businesses in mind, Baguette is a web app for managing your commercial bakery. Organize orders and plan baking times for every item, and save all data to the cloud to sync across multiple devices.</p>
            <p>Baguette is free for any professional bakery, including yours!</p>
            <h1>Features</h1>
            <p>Nothing yet...</p>
            <h1 id="plans">Plans</h1>
            <p>Baguette is completely free, but there are two different clouddata plans to suit your needs.</p>
            <div class="plansContainer">
                <div class="plansBlock">
                    <h2>Guest</h2>
                    <p>Free access to all of Baguette's tools. Saved clouddata may be overrided by other guests or deleted by the developer at any time. This plan is built for testing Baguette as a "demo" and is the default plan when you login.</p>
                    <button style="float: right;" onclick="clouddataLogin()">try now&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1.0rem" viewBox="0 -960 960 960" fill="currentcolor" style="vertical-align: middle;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                </div>
                <div class="plansBlock">
                    <h2>Premium</h2>
                    <p>Free access to all of Baguette's tools, plus exclusive features. This plan includes a private clouddata account specifically for your bakery, so that your bakery planning data will not be overrided by Guest users.</p>
                    <button style="float: right;" onclick="alert('please contact the developer');">request premium plan&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1.0rem" viewBox="0 -960 960 960" fill="currentcolor" style="vertical-align: middle;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></button>
                </div>
            </div>
            <h1>Legal</h1>
            <p>If you are concerned about your user privacy, you can read our privacy policy <a href="privacy">here</a>. The privacy policy is a disclosure and is not legally binding.</p>
            <p>Baguette is licensed under the <a target="_blank" href="https://github.com/kpoovakan/baguette/blob/main/LICENSE.md">PolyForm Internal Use License</a>. You can use Baguette as a tool for your commercial bakery for internal business use. You can make derivatives of Baguette's source code, but any derivatives you create may not be distributed. The developer and creator of Baguette cannot be held liable for any damages or losses from the use (or inability to use) Baguette. By using Baguette, you agree to the terms defined by our <a target="_blank" href="https://github.com/kpoovakan/baguette/blob/main/LICENSE.md">license</a>.</p>
            <h1>About</h1>
            <p>Built by <a href="https://kpoovakan.github.io">kpoovakan</a>, Baguette is a web app for professional bakeries.</p>
`;
const contentLoggedIn = `
    <h1 style="margin: 0;">Baguette</h1>
    <p class="header">
        <a href="javascript:void(0);" id="saveNowButton" style="pointer-events: none; color: color-mix(in oklab, #00000000 50%, var(--colorForeground))">cloud sync</a>⠀⠀⠀
        <a href="https://github.com/kpoovakan/baguette/blob/main/README.md">docs</a>⠀⠀⠀
        <a href="javascript:void(0);">settings</a>⠀⠀⠀
        <a href="javascript:void(0);" onclick="clouddataLogout()">logout</a>
    </p>
`;

window.addEventListener("load", function() {
    if (!window.localStorage.getItem("temp")) {
        document.getElementById("contentMain").innerHTML = contentLoggedOut;
        document.getElementById("contentMain").style.width = "70vw";
    } else {
        uiLoginSetup();
    }
});

function clouddataLogin() {
    userLogin();
    uiLoginSetup();
}
function clouddataLogout() {
    const confirmLogout = window.confirm("are you sure you want to log out? unsaved changes will be permanently lost.");
    if (!confirmLogout) {
        return;
    }
    window.localStorage.removeItem("temp");
    window.localStorage.removeItem("sha");
    window.localStorage.removeItem("etag");
    window.location.reload();
}

function saveNowButton(save) { // 1 for save, 0 for saved, changes the appearnace of the button and doesn't actually save anything
    const button = document.getElementById("saveNowButton");
    if (save === 1) {
        button.style.color = "var(--colorForeground)";
        button.style.pointerEvents = "auto";
        button.innerText = "save now";
    } else if (save === 0) {
        button.style.color = "color-mix(in oklab, #00000000 50%, var(--colorForeground))";
        button.style.pointerEvents = "none";
        button.innerText = "saved to cloud";
    } else {
        console.error(`function saveNowButton has wrong parameter: ${save}`);
    }
}
function uiLoginSetup() {
    document.getElementById("contentMain").innerHTML = contentLoggedIn;
    document.getElementById("contentMain").style.width = "100%";
}