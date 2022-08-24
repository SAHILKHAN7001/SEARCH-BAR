let search = document.getElementById("searchInput");

search.addEventListener("keyup",function(event) {
    let searching = event.target.value.toLowerCase();
    let allList = document.getElementsByClassName("name");
    for(let i=0; i<allList.length;i++) {
        const searchName = allList[i].textContent.toLowerCase();
     
        if(searchName.includes(searching)) {
            allList[i].style.display = "block";
        }
        else {
            allList[i].style.display = "none";
        }
    }
})