
function copyEmail() {
    const email = "ILprimarii@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied!");
    }).catch(err => {
        console.error("Failed to copy email:", err);
    });
}