function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

// function face_recognition(url) 
// {
//     console.log("facecall")
//     var queryURL = "https://api-us.faceplusplus.com/facepp/v3/face/analyze";
//     $.ajax(
//     {
//         url: queryURL,
//         method: "POST",
//         data:{
//             api_key: "Q2UNdD9Ah7-NQIg59Uii-NnJq3kG09BD",
//             api_secret: "dyUuVeYF7MItpPikHlx-9-n6BqC6DgSv",
//             return_landmark: 1,
//             face_tokens: "c2fc0ad7c8da3af5a34b9c70ff764da0",
//             image_url1: url
//         }
//     }).then(function (response) 
//     {      
//         // Saving the response 
//         console.log(response)                
  
// })
// }
function face_recognition(url) 
{
    console.log("facecall")
    var queryURL = "https://apis.paralleldots.com/v4/facial_emotion";
    $.ajax(
    {
        url: queryURL,
        method: "POST",
        data:{
            api_key: "26eKaRKtotWjy0z61BpGKOqaHNYhOH47MByh5ullhqY",
            return_landmark: 1,
            face_tokens: "c2fc0ad7c8da3af5a34b9c70ff764da0",
            url: url
        }
    }).then(function (response) 
    {      
        // Saving the response 
        console.log(response)                
        emotionLog (response)
})
}
function emotionLog (response)
{
    // The strongest emotion is obtained
    var strongEmotion = response.facial_emotion[0].tag
    console.log(strongEmotion)
    if (strongEmotion === "neutral")
    {
        var strongEmotion = "happy"
        console.log(strongEmotion)
    }
    else if (strongEmotion === "surprise")
    {
        var strongEmotion = "calm"
    }
}

// face_recognition()

//DATABASE FIREBASE
// var firebaseConfig = {
//     apiKey: "AIzaSyDfFuDAqRUF6Chbpie_eA2NFnl7JsejT9s",
//     authDomain: "faceapp-5fc2b.firebaseapp.com",
//     databaseURL: "https://faceapp-5fc2b.firebaseio.com",
//     projectId: "faceapp-5fc2b",
//     storageBucket: "",
//     messagingSenderId: "184233567521",
//     appId: "1:184233567521:web:118f845dba7376b3"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//     // User picture
//     var pictureUrl = "";
//     $(".img-url").on("DOMSubtreeModified", function(event){
//         // event.preventDefault();
//         pictureUrl = $(this).attr("src")
//         console.log(pictureUrl)
//     })

//STORAGE FIREBASE
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyDfFuDAqRUF6Chbpie_eA2NFnl7JsejT9s",
    authDomain: "faceapp-5fc2b.appspot.com",
    databaseURL: "https://faceapp-5fc2b.firebaseio.com",
    storageBucket: "gs://faceapp-5fc2b.appspot.com",
  };
  firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'
var fileName = "space.jpg"
var pictureUrl = "";
$(".img-url").on("DOMSubtreeModified", function(event){

    pictureUrl = $(this).attr("src")
    console.log(pictureUrl)

    // Child references can also take paths delimited by '/'
    var spaceRef = storageRef.child('images/space.jpg');
    // spaceRef now points to "images/space.jpg"
    // imagesRef still points to "images"

    // File path is 'images/space.jpg'
    var path = spaceRef.fullPath

    // File name is 'space.jpg'
    var name = spaceRef.name

    // Points to 'images'
    var imagesRef = spaceRef.parent;

    // Data URL string
    var message = pictureUrl;
    try {
        spaceRef.putString(message, 'data_url').then(function(snapshot) {
            console.log('Uploaded a data_url string!');
            storageRef.child('images/space.jpg').getDownloadURL().then(function(url) {
                console.log(url)
                face_recognition(url)
                });
            },function(error){
                console.log(error)
            }).catch(function(error){
                console.log(error)
            });
    } catch(err){
        console.log(err)
    }
  
    // Create the file metadata
    var metadata = {
    contentType: 'image/jpeg'
    };
    var file = document.querySelector('input[type=file]').files[0];
    // Upload file and metadata to the object 'images/mountains.jpg'
//var uploadTask = storageRef.child('images/' + file.name).put(pictureUrl, metadata);

// Listen for state changes, errors, and completion of the upload.
/*uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
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
    }})*/
})