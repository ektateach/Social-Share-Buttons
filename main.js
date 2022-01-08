/*
from:- https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/

facebook:
https://www.facebook.com/sharer.php?u=[post-url]

twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

instagram:

whatsapp:
https://api.whatsapp.com/send?text=[post-title] [post-url]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const instaBtn = document.querySelector(".instgram-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Share my page");
console.log("posturl = " + postUrl + " postTitle = " + postTitle);
    facebookBtn.setAttribute(
        "href",https://www.facebook.com/sharer.php?u=[post-url]
    );

    twitterBtn.setAttribute(
        "href",
        "https://twitter.com/share?url=${postUrl}&text=${postTitle}"
    );

    whatsappBtn.setAttribute(
        "href",
        "https://api.whatsapp.com/send?text=" + ${postTitle} + ${postUrl}
    );
}

init();


