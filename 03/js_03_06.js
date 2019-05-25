(function () {
    var button = document.querySelector("button");
    var list = document.querySelector("select");
    
    var container = document.getElementsByClassName("container")[0];
    
    var backgroundSources = [
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Falk_Oberdorf_Wiehengebirge_Winter_Heidbrink.JPG",
        "https://cdn.pixabay.com/photo/2016/02/13/10/35/spring-awakening-1197602_960_720.jpg",
        "https://cdn12.picryl.com/photo/2016/12/31/summer-sun-field-01208f-1024.jpg",
        "https://www.publicdomainpictures.net/pictures/30000/nahled/yellow-autumn.jpg"
    ];
    
//    container.style.width = "1000px";
//    container.style.height = "1000px";
//    container.style.backgroundRepeat = "no-repeat";
//    container.style.backgroundSize = "contain";

    button.addEventListener("click", function(e) {
        e.preventDefault();
        
        let selectedIndex =  list.selectedIndex;
        container.style.backgroundImage=`url(${backgroundSources[selectedIndex]})`;
});
})();
