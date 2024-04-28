document.addEventListener("DOMContentLoaded", () => {
  // Click event listener for the entire document (right-click prevention)

  document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Try to prevent default right-click behavior
  });
  const catButton = document.getElementById("cat");
  catButton.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Try to prevent default right-click behavior
  });
  const noCopyElements = document.querySelectorAll("body");
  for (const element of noCopyElements) {
    element.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  }
  // Click event listener for the entire document (explosion on click)
  let LC = document.getElementById("LC");
  let NC = document.getElementById("NC");
  let kitten = document.getElementById("kitten");
    function LCF(){
      if(count > 100){
        setInterval(count++,1000);
      }
      else{
      setInterval(LC.style.background = "red", 1000);
      LC.style.background = "transparent";
      }
    }
  
    
  document.addEventListener("click", (event) => {
    // Create a new explosion image element
    const explosion = document.createElement("img");
    explosion.src = "explosion.svg";

    explosion.style.position = "absolute"; // Make it positioned based on the click

    // Set the position of the explosion image based on the click coordinates
    explosion.style.left = `${event.clientX-32}px`;
    explosion.style.top = `${event.clientY-32}px`;

    // Add some size to the explosion image
    explosion.style.width = "64px";
    explosion.style.height = "64px";
    explosion.style.pointerEvents = "none";

    // Append the explosion image to the body element
    document.body.appendChild(explosion);
    
    // Optional: You can add a timeout to remove the explosion image after a while
    setTimeout(() => {
      explosion.remove();
    }, 125); // Remove after 1 second (adjust as needed)
  });

  // Click event listener for the cat element (optional)
  let cat = document.getElementById("cat");
  let count = 0; // Initialize count outside the function
 /* if(count >= 1){
    let creation = document.createElement("div");
    let text = creation.textContent = "test";
    creation.setAttribute("style", "background-color:red; font-size:2em;");
    creation.appendChild(text);
    function point(){
creation.style.display = "none";
    }
    setInterval(point(), 5000);
  }*/
  cat.addEventListener("click", () => {
    cat.style.scale = 1.1;
    count++;
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = count + " 🐕";
    
  });
  cat.addEventListener("mousedown",()=>{
    cat.style.scale = 1;
  })
});
