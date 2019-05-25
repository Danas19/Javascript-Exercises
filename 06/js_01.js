var restoran = {
    name: "Vegetable Restoran",
    placesTotal: 50,
    placesReserved: 10
};

function doFreePlacesExist() {
    if (restoran.placesTotal > restoran.placesReserved) {
        return true;
    }
    return false;
}

function reservePlaces(placeCountToReserve) {
    if (doFreePlacesExist()) {
        if (restoran.placesReserved + placeCountToReserve > restoran.placesTotal) {
            placeCountToReserve = restoran.placesTotal - restoran.placesReserved;
            console.log("! Not enough free places.");
        }

        restoran.placesReserved += placeCountToReserve;
        console.log("New reserved places: " + placeCountToReserve);
    }
    showCurrentSituation();
}

function unreservePlaces(placeCountToUnreserve) {
    if (restoran.placesReserved < placeCountToUnreserve) {
        console.log("! Not enough reserved places.");
        placeCountToUnreserve = restoran.placesReserved;
    }

    restoran.placesReserved -= placeCountToUnreserve;
    console.log("new free places: " + placeCountToUnreserve);
    showCurrentSituation();
}

function showCurrentSituation() {
    console.log("Number of free places: " + (restoran.placesTotal - restoran.placesReserved));
    console.log("Number of reserved places: " +
        restoran.placesReserved);
}

console.log("Welcome to the restoran '" + restoran.name + "'.");
console.log("functions: reservePlaces(placeCount) unreservePlaces(placeCount) doFreePlacesExist().");
console.log("Object: restoran. Object's variables: name, placesTotal, placesReserved.");
showCurrentSituation();
