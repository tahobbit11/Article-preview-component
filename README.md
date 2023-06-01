# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Screenshot%202023-06-01%20183254.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use JavaScript to display new things and hide other things.

To see how you can add code snippets, see below:

```html
<div class="profile-info" style="display: flex;">
            <img src="./images/avatar-michelle.jpg" alt="Michelle's pic" class="profile-pic">
            <div class="name-n-date">
              <h2>Michelle Appleton</h2>
              <span>28 Jun 2020</span>
            </div>
          </div>
          <div class="share" style="display: none;">
            <div class="socials">
              <span id="share-text">SHARE</span>
              <ul>
                <li><img src="./images/icon-facebook.svg" alt="facebook"></li>
                <li><img src="./images/icon-twitter.svg" alt="twitter"></li>
                <li><img src="./images/icon-pinterest.svg" alt="pinterest"></li>
              </ul>
            </div>
          </div>
```
```css
  .share {
    right: -5%;
    bottom: 45%;
    transform: translate(0%, -100%);
  }

  .share:after{
    content: "";
    height: 15px;
    width: 15px;
    background: hsl(217, 19%, 35%);
    margin: 0 auto;
    transform: rotate(225deg);
    border-radius: 0 0 12px 0;
    margin-top: -22px;
    position: absolute;
    bottom: -0.5rem;
    right: 0;
    left: 91%;
  }
```
```js
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
```

### Continued development

In the future I would like to make the JS much more compact by making each of them a toggle instead of multiple if else statements. I might also come back and change some of my css around so that the share button on the computer display version doesn't look as weird.

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
