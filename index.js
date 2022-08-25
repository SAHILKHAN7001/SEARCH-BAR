let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(event) {
   let allListNames = document.getElementsByClassName("name");
   let searching = event.target.value.toLowerCase();
   for(let k=0; k<allListNames.length;k++) {
       const loop = allListNames[k].textContent.toLowerCase();
      
       if(loop.includes(searching)) {
           allListNames[k].style.display = "block";
        }
        else {
            allListNames[k].style.display ="none";
        }
   }
})