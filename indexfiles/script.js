"use strict";
const svgAddNew = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0,0,29.86787,29.86787"><g transform="translate(-225.06606,-165.06607)"><g fill="none" stroke="currentcolor" stroke-width="6.5" stroke-linecap="round" stroke-miterlimit="10"><path d="M240,168.31607v23.36787"/><path d="M228.31606,180h23.36787"/></g></g></svg><!--rotationCenter:14.933935081565238:14.933934467116131-->
`;
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
    <h1 style="margin: 0; color: var(--colorAccent);">Baguette</h1>
    <p class="header">
        <a href="javascript:void(0);" id="saveNowButton" style="pointer-events: none; color: color-mix(in oklab, #00000000 50%, var(--colorForeground))">cloud sync</a>⠀⠀⠀
        <a href="https://github.com/kpoovakan/baguette/blob/main/README.md">docs</a>⠀⠀⠀
        <a href="javascript:void(0);">settings</a>⠀⠀⠀
        <a href="javascript:void(0);" onclick="clouddataLogout()">logout</a>
    </p>
    <button class="svgAddNew" onclick="itemAdd()">${svgAddNew}</button>

    <div class="dayContainer">
        <div class="dayColumn" id="day1"></div>
        <div class="dayColumn" id="day2"></div>
        <div class="dayColumn" id="day3"></div>
        <div class="dayColumn" id="day4"></div>
        <div class="dayColumn" id="day5"></div>
        <div class="dayColumn" id="day6"></div>
        <div class="dayColumn" id="day7"></div>
    </div>
`;
const reference1 = `
<div class="dayContainer">
    <div class="dayColumn" id="day1">
        <div class="dayItem">
            <button onclick="itemMoveUp(this.parentNode)">^</button>
            ONE
            <button onclick="itemMoveDown(this.parentNode)">v</button>
        </div>
        <div class="dayItem">
            <button onclick="itemMoveUp(this.parentNode)">^</button>
            TWO
            <button onclick="itemMoveDown(this.parentNode)">v</button>
        </div>
        <div class="dayItem">
            <button onclick="itemMoveUp(this.parentNode)">^</button>
            THREE
            <button onclick="itemMoveDown(this.parentNode)">v</button>
        </div>
    </div>
    <div class="dayColumn" id="day2">
        <div class="dayItem">
            <button onclick="itemMoveUp(this.parentNode)">^</button>
            ONE
            <button onclick="itemMoveDown(this.parentNode)">v</button>
        </div>
        <div class="dayItem">
            <button onclick="itemMoveUp(this.parentNode)">^</button>
            Everyday, I see the quick brown <br>fox jump over the lazy dog.
            <button onclick="itemMoveDown(this.parentNode)">v</button>
        </div>
    </div>
</div>
`;
const reference2 = `
            <div class="dayItem" id="sdkgxvbc">
                <div class="dayBar"><img src="/indexfiles/false.svg"><button onclick="itemMoveUp(this.parentNode.parentNode)">^</button><button onclick="itemMoveDown(this.parentNode.parentNode)">v</button></div>
                <div class="dayInfo">
                    <br>
                    <p class="str">Poisonous Muffins</p>
                    <p><span>For Ze Bald</span>⠀⠀⠀<span>Unpaid</span></p>
                    <p class="str">Delivery 3:14 AM on Wed 9/28</p>
                    <p>Make and bake</p>
                    <p class="str">No eggs</p>
                </div>
            </div>
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

function itemMove(thisElement, after, cont) {
    const before = cont.children[after];
    cont.insertBefore(thisElement, before);
}
function itemMoveUp(thisElement) {
    const parent = thisElement.parentNode;
    const thisIndex = Array.prototype.indexOf.call(parent.children, thisElement);
    const after = thisIndex - 1;
    itemMove(thisElement, after, parent);
}
function itemMoveDown(thisElement) {
    const parent = thisElement.parentNode;
    const thisIndex = Array.prototype.indexOf.call(parent.children, thisElement);
    var after = thisIndex + 2;
    if (after > parent.childElementCount) {
        var after = 0;
    }
    itemMove(thisElement, after, parent);
}

function addItem(column, data) {
    const colors = {
        pink:"#ff33dd",
        purple:"#bf96ca",
        teal:"#8bd5cd",
        yellow:"#ffd000",
        green:"#98c28a",
        blue:"#140094",
        red:"#d30000",
        orange:"#ff7700"
    };
    if (!column || !data) {
        console.error("no data given to addItem function");
        return;
    }
    column = String(column);
    const clmn = document.getElementById(`day${column}`);
    const thisItem = document.createElement("div");
    thisItem.className = "dayItem";
    thisItem.id = data.id;
    thisItem.style.setProperty("--color", colors[data.color]);

    const dayBar = document.createElement("div");
    dayBar.className = "dayBar";
    const check = document.createElement("img");
    check.src = `/indexfiles/${data.check}.svg`;
    const up = document.createElement("button");
    up.setAttribute("onclick", "itemMoveUp(this.parentNode.parentNode)");
    up.innerText = "^";
    const down = document.createElement("button");
    down.setAttribute("onclick", "itemMoveDown(this.parentNode.parentNode)");
    down.innerText = "v";
    dayBar.appendChild(check);
    dayBar.appendChild(up);
    dayBar.appendChild(down);

    const dayInfo = document.createElement("div");
    dayInfo.className = "dayInfo";
    const name = document.createElement("p");
    name.className = "str";
    name.innerText = data.name;
    const next = document.createElement("p");
    const customer = document.createElement("span");
    customer.innerText = data.customer;
    var paid = document.createElement("span");
    if (data.paid) {
        paid.innerText = "paid";
    } else {
        paid.innerText = "unpaid";
    }
    next.appendChild(customer);
    next.innerHTML = next.innerHTML + "⠀⠀⠀";
    next.appendChild(paid);
    const delivery = document.createElement("p");
    delivery.className = "str";
    delivery.innerText = `Delivery ${data.hour}\:${data.minute} ${data.clock.toUpperCase()} on ${data.month}/${data.day}`;
    const stage = document.createElement("p");
    stage.innerText = data.stage;
    if (!data.other == "" && !data.other == null && !data.other == undefined) {
        var other = document.createElement("p");
        other.innerText = data.other;
        other.className = "str";
    }
    dayInfo.appendChild(document.createElement("br"));
    dayInfo.appendChild(name);
    dayInfo.appendChild(next);
    dayInfo.appendChild(delivery);
    dayInfo.appendChild(stage);
    if (other) dayInfo.appendChild(other);

    thisItem.appendChild(dayBar);
    thisItem.appendChild(dayInfo);
    clmn.appendChild(thisItem);
}