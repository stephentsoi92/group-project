function previewFile(){
    var preview = document.querySelector('#user-face');
    var preview1 = document.querySelector('#user-face1'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview1.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
        preview1.src = "";
    }
}

previewFile();

// CAMERA  OPTION
