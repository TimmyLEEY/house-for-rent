// let property_address = document.getElementById('property_address')
// let property_price = document.getElementById('property_price')
// let property_description = document.getElementById('property_description')
// let property_images = document.getElementById('property_images')
function addProduct(ev) {
    ev.preventDefault()
    let file = property_images.files[0];



    // Create the file metadata
    var metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);

                // Add a new document in collection "cities"
                db.collection("property").doc().set({

                    property_address: property_address.value,
                    property_images: downloadURL,
                    property_images2: downloadURL,
                    property_images3: downloadURL,
                    property_images4: downloadURL,
                    property_images5: downloadURL,
                    property_price: property_price.value,
                    property_description: property_description.value,
                    property_bath : property_bath.value,
                    property_zip_code : property_zip_code.value
                })
                    .then(() => {
                        console.log("Document successfully written!");
                        alert("Document successfully written!")
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

            });
        }
    );










}