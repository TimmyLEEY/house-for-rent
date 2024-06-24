let allProduct = [] 
function fetchProduct() {
    db.collection("property").get().then((querySnapshot) => {
        if (querySnapshot.docs == "") {
            productScreen.innerHTML = `<h1>There are no product currently</h1>`
            return;
        }
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            

            productScreen.innerHTML += `
            <div class="card shpw w-50">
                <h2>${doc.data().property_address}</h2>
                <img class ="w-25" src = "${doc.data().property_images}"/>
                <h1>${doc.data().property_price}</h1>
                <h1>${doc.data().property_description}</h1?
            <div> 
             <div>
                <button onclick="addToCart('${doc.id}')" class = "btn btn-info">Add to cart </button>
             </div>`
        });
    });




}
fetchProduct()

function addToCart(id) {
    console.log(id);


    var docRef = db.collection("property").doc(id);

docRef.get().then((doc) => {
if (doc.exists) {
    console.log("Document data:", doc.data());
    db.collection("cart").doc(id).set(doc.data())


.then(() => {
console.log("Document successfully written!");
})
.catch((error) => {
console.error("Error writing document: ", error);
});
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}
}).catch((error) => {
console.log("Error getting document:", error);
});

    // Add a new document in collection "cities"

}