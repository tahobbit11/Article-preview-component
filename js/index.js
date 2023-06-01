const button = document.querySelector(".share-button");
const profileInfo = document.querySelector(".profile-info");
const share = document.querySelector(".share");
const profile = document.querySelector(".profile");
const shareFill = document.querySelector(".share-fill")

// I know that just doing toggles would be much easier but I am practicing
button.addEventListener("click", (e) => {
    console.log(e);
    if(window.innerWidth < 768){
        if (profileInfo.style.display == "flex"){
            profileInfo.style.display = "none";
            share.style.display = "flex";
            profile.style.backgroundColor = "hsl(217, 19%, 35%)";
            profile.style.borderRadius = "0 0 20px 20px";
            profile.style.padding = "0 30px 14.94px 30px";
            button.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareFill.style.fill = "white";
        } else {
            profileInfo.style.display = "flex";
            share.style.display = "none";
            profile.style.backgroundColor = "white";
            profile.style.padding = "0 30px 20px 30px";
            shareFill.style.fill = "#6E8098";
            button.style.backgroundColor = "hsl(210, 46%, 95%)";
        }
    } else{
        if (share.style.display == "none"){
            share.style.display = "initial";
            share.style.position = "relative";
            share.style.borderRadius = "10px 10px 0 10px";
            share.style.padding = "0 10px";
            button.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareFill.style.fill = "white";
        } else {
            share.style.display = "none";
            profile.style.backgroundColor = "white";
            shareFill.style.fill = "#6E8098";
            button.style.backgroundColor = "hsl(210, 46%, 95%)";
        }
    }
});

