// Contained elements 
const navIcon = document.querySelector(".icon");

/* Toggle between adding and removingthe "responsive" class to topnav when the
    user clicks on the icon
 */

function topNavClassToggle() {
    let myTopNav = document.getElementById("myTopNav");
    
    if (myTopNav.className === "topnav") {
        myTopNav.className += " responsive";
    } else {
        myTopNav.className = "topnav";
    }
}

// Waits for user click to run function (topNavClassToggle)
// navIcon.addEventListener('click', topNavClassToggle);

