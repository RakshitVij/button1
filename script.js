// This JavaScript code adds a dynamic visual effect to elements with the class .glassy-button by changing their CSS properties based on the mouse movement over them.


const glassyButtons = document.querySelectorAll(".glassy-button");
glassyButtons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;

//Calculating Offsets
// centerX and centerY calculate the center point of the button (half the button's width and height).
// offsetX and offsetY calculate the mouse position's offset from the center of the button. event.offsetX and event.offsetY give the mouse position relative to the button's top-left corner.

    const offsetX = event.offsetX - centerX;
    const offsetY = event.offsetY - centerY;


// This part sets two CSS custom properties (--_x-motion and --_y-motion) on the button element.
//These properties are set to the calculated offsetX and offsetY values, respectively.
//This allows us to use these properties in our CSS rules to animate the button's appearance.

    button.style.setProperty("--_x-motion", `${offsetX}px`);
    button.style.setProperty("--_y-motion", `${offsetY}px`);
  });
});
