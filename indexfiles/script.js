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
    <button class="svgAddNew" onclick="itemAddOpen()">${svgAddNew}</button>

    <div class="dayContainer">
        <div class="dayColumn" id="day1"></div>
        <div class="dayColumn" id="day2"></div>
        <div class="dayColumn" id="day3"></div>
        <div class="dayColumn" id="day4"></div>
        <div class="dayColumn" id="day5"></div>
        <div class="dayColumn" id="day6"></div>
        <div class="dayColumn" id="day7"></div>
    </div>

    <dialog id="itemAdd" class="addItem">
        <p class="str">add item to Baguette</p>
        <input id="name" type="text" placeholder="item name" autocomplete="off" autofocus>
        <input id="customer" type="text" placeholder="customer name" autocomplete="off">
        <div class="addItemFlex">
            <input id="time" type="time" step="60" autocomplete="off">
            <input id="date" type="date" autocomplete="off">
        </div>
        <select id="paid" autocomplete="off">
            <option value="default" disabled selected hidden>payment status</option>
            <option value="true">item was paid</option>
            <option value="false">item is unpaid and will be paid</option>
            <option value="true">item is free and marked as paid on Baguette dashboard</option>
        </select>
        <select id="stage" autocomplete="off">
            <option value="default" disabled selected hidden>stage of production</option>
            <option value="make and bake">make and bake</option>
            <option value="make">make</option>
            <option value="make and chill">make and chill</option>
            <option value="preheat oven">preheat oven</option>
            <option value="bake">bake</option>
            <option value="leave to cool">leave to cool</option>
            <option value="cool and decorate">cool and decorate</option>
            <option value="packaging">packaging</option>
            <option value="sourdough general prep">sourdough general prep</option>
            <option value="sourdough levain">I sourdough levain</option>
            <option value="sourdough autolyse">sourdough autolyse</option>
            <option value="sourdough stretch and fold">sourdough stretch and fold</option>
            <option value="sourdough fermentation">sourdough fermentation</option>
            <option value="sourdough shape or proof">sourdough shape or proof</option>
            <option value="add poison">add poison</option>
            <option value="custom">custom...</option>
        </select>
        <select id="color" autocomplete="off">
            <option value="default" disabled selected hidden>item color-coding</option>
            <option value="yellow">sunshine yellow</option>
            <option value="green">green</option>
            <option value="teal">teal</option>
            <option value="purple">lavender purple</option>
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="pink">bright fuschia pink</option>
            <option value="orange">orange for the oven</option>
        </select>
        <textarea id="other" placeholder="additional notes..." autocomplete="off"></textarea>
        <div class="addItemFlex">
            <button onclick="itemAddPressed()" style="flex: 2;">add item to Baguette</button>
            <button onclick="itemAddClose()" style="flex: 1;">cancel changes</button>
        </div>
    </dialog>
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

const d = new Date();
const currentYear = d.getFullYear().toString();
const currentMonth = d.getMonth().toString();
const currentDay = d.getDate().toString();

window.addEventListener("load", function() {
    if (!window.localStorage.getItem("temp")) {
        document.getElementById("contentMain").innerHTML = contentLoggedOut;
        document.getElementById("contentMain").style.width = "70vw";
    } else {
        if (window.location.href === "https://baguette.katanya.dev") {
            clouddataLogin();
            return;
        }
        globalThis.temp = window.localStorage.getItem("temp");
        globalThis.temp = JSON.parse(globalThis.temp);
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
    const thisYear = globalThis.temp[currentYear];
    const thisMonth = globalThis.temp[currentMonth];
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (currentYear % 4 === 0) daysInMonth[1] = 29;
    const array = getDaysThisWeek(daysInMonth);
    //console.log(array);
    for (let i = 0; i < 7; i++) {
        let current = array[i]; //the day's object of items
        if (current === undefined) {
            //console.log(`skipping ${i}`);
            continue;
        }
        let keys = Object.keys(current); //all keys for all items in this day
        let length = keys.length; //amount of items in this day
        //console.log(current);
        for (let i2 = 0; i2 < length; i2++) {
            let curData = (Object.keys(current))[i2];
            curData = current[curData];
            //console.log(curData);
            addItem(i+1, curData);
        }
    }
}
function getDaysThisWeek(daysInMonth) { // returns an array of the week's days and their content
    daysInMonth = daysInMonth[currentMonth];
    let end = Number(currentDay) + 6; // becuz if today is the 11th, then 11+6=17, and we display days 11-17, inclusive.
    const array = new Array(); //such a creative array name...
    if (!(end > daysInMonth)) {
        //all days displayed are in current month
        for (let i = 0; i < 7; i++) {
            let day = Number(currentDay);
            day = day + i;
            let cur = globalThis.temp[currentYear][currentMonth];
            if (cur === undefined) return array;
            cur = cur[day];
            if (cur === undefined) {
                array.push(undefined);
            } else {
                array.push(cur);
            }
        }
        return array;
    } else { //oh no, this week includes two months!
        const firstMonth = daysInMonth - currentDay; //days in first month that will be "fetched"
        const secondMonth = end - daysInMonth + 1; //days in second month that will be "fetched"
        //this sets up data for the first month
        for (let i = 0; i < firstMonth; i++) {
            let day = Number(currentDay);
            day = day + i; //the day being tracked for this i
            let cur = globalThis.temp[currentYear][currentMonth];
            if (cur === undefined) {
                array.push(undefined);
                continue; //cancels rest of loop for the turn and goes to next i
            }
            cur = cur[day];
            if (cur === undefined) {
                array.push(undefined);
            } else {
                array.push(cur);
            }
        }
        //ok, now we must check if the next month is January and change the year
        if (currentMonth === "11") {
            var newYear = (Number(currentYear)) + 1;
        } else {
            var newYear = currentYear;
        }
        if (newYear === currentYear) {
            var month = (Number(currentMonth)) + 1;
        } else {
            var month = 0;
        }
        //this sets up data for the second month
        for (let i = 0; i < secondMonth; i++) {
            //so here, you would get the first day, then the second, then the third, and keep going, until you get the secondMonth variable's day, then you stop. like.. get the i+1 day?
            let day = i + 1;
            let cur = globalThis.temp[newYear][month];
            if (cur === undefined) {
                array.push(undefined);
                continue;
            }
            cur = cur[day];
            if (cur === undefined) {
                array.push(undefined);
            } else {
                array.push(cur);
            }
        }
        return array; //I hope this works...
    }
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
async function itemComplete(thisElement) {
    if (thisElement.getAttribute("src") == "/indexfiles/true.svg") return;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (currentYear % 4 === 0) daysInMonth[1] = 29;
    var daysInMonth = daysInMonth[currentMonth]; //days in current month

    const id = thisElement.parentNode.parentNode.id;
    var day = thisElement.parentNode.parentNode.parentNode.id;
    var day = day.toString();
    var day = day.at(-1);
    var day = Number(day); //day of the week and column number, not the actual day
    var day = (day - 1) + Number(currentDay); //now it's the actual day

    if (day > daysInMonth) { //this item is part of next month
        var month = Number(currentMonth);
        var month = month + 1;
        var month = month.toString();
        if (currentMonth === "11") { //next month is next year
            var year = Number(currentYear);
            var year = year + 1;
            var year = year.toString();
        } else {
            var year = currentYear;
        }
        var day = day - daysInMonth;
    } else {
        var month = currentMonth;
        var year = currentYear;
    }
    var day = day.toString();
    //console.log(year);console.log(month);console.log(day);
    const item = globalThis.temp[year][month][day][id]["name"];
    const confirm = window.confirm(`You are about to mark ${item} as complete. Press cancel if ${item} has not been completed.`);
    if (!confirm) return;
    thisElement.src = "/indexfiles/true.svg";
    globalThis.temp[year][month][day][id]["check"] = true;
    var json = JSON.stringify(globalThis.temp);
    window.localStorage.setItem("temp", json);
    console.log(json);
    var color = window.getComputedStyle(thisElement);
    var color = color.getPropertyValue("--color");
    document.getElementById(id).style.setProperty("--color", `color-mix(in oklab, #00000000 50%, ${color})`)
}

function addItem(column, data) { //actually adds the items
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
    check.setAttribute("onclick", "itemComplete(this)");
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
    next.innerHTML = next.innerHTML + "<br>";
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

    if (data.check === true) {
        var color = window.getComputedStyle(thisItem);
        var color = color.getPropertyValue("--color");
        thisItem.style.setProperty("--color", `color-mix(in oklab, #00000000 50%, ${color})`)
    }
}

function itemAddOpen() { //opens itemAdd dialog
    document.getElementById("itemAdd").showModal();
}
function itemAddClose() { //closes itemAdd dialog
    document.getElementById("itemAdd").close();
}
function itemAddPressed() { //grabs data from itemAdd dialog then runs addItem()
    //grab data from the dialog
    const value = (id) => document.getElementById(id).value;
    const name = value("name");
    const customer = value("customer");
    const time = value("time");
    const date = value("date");
    var paid = value("paid");
    const stage = value("stage");
    const color = value("color");
    const other = value("other");
    //check for empty values
    const focus = (id) => document.getElementById(id).focus();
    if (name === "") { focus("name"); alert("please add item name"); return; };
    if (customer === "") { focus("customer"); alert("please add customer name"); return; };
    if (time === "") { focus("time"); alert("please add item time"); return; };
    if (date === "") { focus("date"); alert("please add item due date"); return; };
    if (paid === "default") { focus("paid"); alert("please add item payment status"); return; };
    if (stage === "default") { focus("stage"); alert("please add item production stage"); return; };
    if (color === "default") { focus("color"); alert("please add item color-coding"); return; };
    //convert some data into the format required
    var paid = JSON.parse(paid);
    var hour = time.at(0).toString() + time.at(1).toString();
    if ((hour - 12) > 0) {
        var hour = hour - 12;
        var clock = "pm";
    } else var clock = "am";
    var hour = Number(hour);
    const minute = Number( time.at(3).toString() + time.at(4).toString() );
    const year = date.at(0).toString() + date.at(1).toString() + date.at(2).toString() + date.at(3).toString();
    const month = String(Number( date.at(5).toString() + date.at(6).toString() ));
    const day = String(Number( date.at(8).toString() + date.at(9).toString() ));
    //convert data into a JSON object
    var itemId = Math.random().toString(36).substring(2);
    let temp = globalThis.temp;
    temp = JSON.stringify(temp);
    while (temp.includes(itemId) || itemId === 0 || itemId === "0") {
        var itemId = Math.random().toString(36).substring(2);
    }
    console.log(`this item's id is: ${itemId}`);
    var object = {};
    object.name = name;
    object.customer = customer;
    object.hour = hour;
    object.minute = minute;
    object.clock = clock;
    object.month = month;
    object.day = day;
    object.paid = paid;
    object.stage = stage;
    object.check = false; //becuz if you're adding the item it shouldn't be completed yet
    object.color = color;
    object.other = other;
    object.id = itemId;
}