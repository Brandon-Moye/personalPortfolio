<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Brandon Moye</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="header headerOrangeBuffer">
      <nav class="allNavContainer">
        <div class="landingScreenButtonContainer">
          <a class="navButton landingScreenButton" href="">Brandon Moye</a>
        </div>
        <div class="otherButtonContainer">
          <a class="navButton projectsButton" href="#">Projects</a>
          <a class="navButton resumeButton" href="#">Resume</a>
          <a class="navButton contactButton" href="#">Contact</a>
        </div>
      </nav>
    </header>
    <div class="heroContainer">
      <section id="LHS" class="LHS">
        <p class="hello">Hello,</p>
        <p class="intro">my name is</p>
        <p class="name">
          Brandon<br />
          Moye
        </p>
      </section>
      <nav id="background-change" class="RHS">
        <!-- <a class="link about" href="#">About</a>

        <a
          id="background-trigger"
          class="link projects"
          href="/ProjectsPage/projectsIndex.html"
          >Projects</a
        >
        <a class="link resume" href="#">Resume</a> -->
      </nav>
    </div>

    <!--             -->
    <!--ABOUT SECTION-->
    <!--             -->

    <section class="aboutSection">
      <!-- <nav id="background-change" class="standardNav">
        <a class="standardLink standardAbout" href="#">About</a>

        <a
          id="background-trigger"
          class="standardLink standardProjects"
          href="/ProjectsPage/projectsIndex.html"
          >Projects</a
        >
        <a class="standardLink standardResume" href="#">Resume</a>
      </nav> -->

      <p>
        I am a self taught developer with a Bachelor's Degree in Chemical
        Engineering. I enjoy front end developement.
      </p>
      <!-- 
        will have an about title section, a nav bar on top, a text block with a 
        brief description on what I have been doing and want to do and a little section
        that displays all of the languages I am comfortable with (HTML, CSS, JS)
        
        ?? How do I want to design the nav bar?? Would the circles still work??
        
      -->
    </section>
    <!--                -->
    <!--PROJECTS SECTION-->
    <!--                -->
    <section class="projectsSection">
      <div class="project1Container">
        <div id="imageContainer" class="imageContainer">
          <img
            id="project1Image"
            class="project1Image"
            src="img/DF673D1D-CD37-46AF-B2BF-062DC27D973A_1_201_a.jpeg"
            alt=""
          />
        </div>
        <div class="project1Description">
          <h3>Hangman</h3>
          <br />
          <span class="project1BodyText">
            This is a hangman game that allows players to input a letter via
            keyboard. All of the words are a favorite thing of mine to help the
            player get to know me!
            <br />
            - A correct guess will be displayed in the blank boxes <br />
            - An incorrect guess will generate a line in the picture box <br />
            - Once a player guesses all the correct letters it will prompt for
            them to play again <br />
            - A player can reload to generate a new word if they feel it is a
            repeat <br />
            - Every potential word has a category to help the player
            <div class="linkContainer">
              <a class="projectLink project1LinkToGithub" href="#"
                >See in Github &rarr;</a
              >
              <a class="projectLink project1LinkToLive" href="#"
                >See Live &rarr;</a
              >
            </div>
          </span>
        </div>
      </div>
      <div class="project1Container">
        <div id="imageContainer" class="imageContainer">
          <img
            id="project1Image"
            class="project1Image"
            src="img/DF673D1D-CD37-46AF-B2BF-062DC27D973A_1_201_a.jpeg"
            alt=""
          />
        </div>
        <div class="project1Description">
          <h3>Tic-Tac-Toe</h3>
          <br />
          <span class="project1BodyText">
            This is a two player tic-tac-toe game
            <br />
            - Players will click on a cell to put down their game piece <br />
            - Once a cell has been clicked it is set for that game and can't be
            changed <br />
            - A winner or tie will be displayed and then the player will be
            prompted to play again
            <div class="linkContainer">
              <a class="projectLink project1LinkToGithub" href="#"
                >See in Github &rarr;</a
              >
              <a class="projectLink project1LinkToLive" href="#"
                >See Live &rarr;</a
              >
            </div>
          </span>
        </div>
      </div>
    </section>

    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
