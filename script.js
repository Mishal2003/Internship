document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript file is loaded and running!");

    const nameHeader = document.getElementById("name");
    
    if (nameHeader) {
        console.log("Found the name header:", nameHeader);
        nameHeader.addEventListener("click", () => {
            nameHeader.style.color = nameHeader.style.color === "blue" ? "black" : "blue";
            console.log("Name header clicked, color changed.");
        });
    } else {
        console.log("Error: Could not find the element with ID 'name'.");
    }
});
