let fetchInfo = document.getElementById('fetchInfo')

function displayInfo() {
    db.collection("property").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            fetchInfo.innerHTML += `<div  class="container">
            <img src="${doc.data().property_images}" alt="">
            <p>${doc.data().property_address}<p>
            <p>Zip code:${doc.data().property_zip_code}</p>
            <p>${doc.data().property_bath}</p>
            <p>price:$${doc.data().property_price}</p>
            <p>ID:${doc.id}</p>
            <button onclick="moreInfo('${doc.id}')">More Info</button>

            </div>`
        });
    });
}
displayInfo()


function moreInfo(getid) {

    // window.location.href = "moreInfo.html"

    console.log(getid);
    var docRef = db.collection("property").doc(getid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            fetchInfo.style.display = "none"
            map.style.display = "none"
            console.log("Document data:", doc.data());
            fullInfo.innerHTML = `<div  class="moreInfo">
       <div class="imagee"> 
       <img src="${doc.data().property_images}" alt="">
       <img src="${doc.data().property_images2}" alt="">
       <img src="${doc.data().property_images3}" alt="">
       <img src="${doc.data().property_images4}" alt="">
       <img src="${doc.data().property_images5}" alt="">
       </div>
        <div><p>${doc.data().property_address}<p>
        <p>Zip code:${doc.data().property_zip_code}</p>
        <p>${doc.data().property_bath}</p>
        <p>price:$${doc.data().property_price}</p>
        <p>${doc.data().property_description}</p> 
         <div><button onclick="tour()">Schedule a tour</button>
        </div>
        
        </div>`
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });




}
 getTour.style.display = "none"
function tour() {
    if (fullInfo.style.display = "block") {
        fullInfo.style.display = "none"
        alert(`We'll have to schedule a time to walk you through the house and conduct an interview. Hopefully after you've successfully applied for the house`)
        getTour.style.display = "block"
       
    } else {
        
    }
    // console.log(tour());
} 




const form = document.querySelector('form')
const desire = document.getElementById('desire')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const birth = document.getElementById('birth')
const licence = document.getElementById('licence')
const state = document.getElementById('state')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const adult = document.getElementById('adult')
const children = document.getElementById('children')
const front = document.getElementById('front')
const back = document.getElementById('back')
const sign = document.getElementById('sign')

function sendEmail() {
    const bodyMessage = `Desire Date:${desire.value}<br> First Name:${firstName.value}<br> Last Name:${lastName.value}<br> DOB:${birth.value}<br>
    licence-no:${licence.value}<br> state:${state.value} <br>phone: ${phone.value} <br> email-address : ${email.value}<br>
    adult: ${adult.value} <br> children:${children.value} 
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "timmyleeycode@gmail.com",
        Password : "EC92C143C1F4DEB74F2B4548DC094F8DF5A6",
        To : 'timmyleeycode@gmail.com',
        From : "timmyleeycode@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => alert('You can now proceed to pay your application fee to approved your application')

    );
    
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();


    sendEmail()
})