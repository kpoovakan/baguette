window.addEventListener("load", function() {
    console.log("load");
});

function userLogin() {
    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
        `${worker}/login`,
        'login to Baguette with GitHub OAuth',
        `width=${width},height=${height},top=${top},left=${left}`
    );
}
const worker = "https://baguette.kpoovakan.workers.dev";
window.addEventListener("message", (event) => {
    if (event.origin !== worker) return;
    const data = event.data;
    if (data && data.type === 'GITHUB_AUTH_SUCCESS') {
        console.log("Received data from GitHub OAuth: ", data.payload);
        const username = data.payload.username;
        document.getElementById("userInfo").innerText = username;
    }    
});
