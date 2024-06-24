function moreInfo() {
    
    db.collection("property").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            moreInfo1.innerHTML += `<div onclick="moreInfo()" class="container">
            <img src="${doc.data().property_images}" alt="">
            <p>${doc.data().property_address}<p>
            <p>Zip code:${doc.data().property_zip_code}</p>
            <p>${doc.data().property_bath}</p>
            <p>price:$${doc.data().property_price}</p>
            </div>`
        });
    });
}
moreInfo()