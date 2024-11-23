document.title = "Css Practice";
window.onload = function () {
  alert("Welcome to the Dark css practice");
  let user = prompt("What is your name?", "");
  if (user) {
    alert(
      `Welcome ${user} to Dark Css Practice, As you can see this is just a test of the css tutorial, it is not complete as time goes on more things will be added to the tutorial, Pls bear with our Team.`
    );
  } else {
    alert(
      `Welcome  to Dark Css Practice, As you can see this is just a test of the css tutorial, it is not complete as time goes on more things will be added to the tutorial, Pls bear with our Team.`
    );
  }
  let confirm1 = confirm(
    "Are you a developer, if you are click the ok button,if not pls click the cancel button"
  );
  if (confirm1) {
    alert(`Welcome developer ${user}`);
  } else {
    alert(`Welcome ${user}`);
  }
};

// let uniforms;
// const gl = initShaders();
// createControls();

// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();
// render();

// window.addEventListener("mousemove", (e) => {
//   updateMousePosition(e.clientX, e.clientY);
// });

// window,
//   addEventListener("touchmove", (e) => {
//     updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
//   });

// window.addEventListener("click", (e) => {
//   updateMousePosition(e.clientX, e.clientY);
// });
