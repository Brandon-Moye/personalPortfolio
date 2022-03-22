"use strict";

// document.getElementById("imageContainer").addEventListener("mouseover", function() {
//     console.log("this is clicked");
// })

document.querySelector(".imageContainer").addEventListener("mouseover", function () {
      document.getElementById("githubLogo").classList.add("githubLogo2");
    });

    document.querySelector(".project1Description").addEventListener("mouseover", function () {
        document.getElementById("githubLogo").classList.remove("githubLogo2");
      });
  
