
var happyArray = ["happy", "hilarious", "histerical", "funny", "lol", "happy babies"];
var sadArray = [" unhappy", "regretful", "tantrum", "dissapointed", "melancholy", "crying"];
var counter = 0;
var emotion=[];



function buttonSwitch() {
    
    
    $("#emotions").empty()
    $("#buttons").empty()
    $("#buttons").append('<button type="button" class="btn btn-primary" id="like">Like</button>')
    $("#buttons").append('<button type="button" class="btn btn-primary" id="unlike">Unlike</button>')
};


function wordSelector(array){
var selectorWord= array[0];
return selectorWord;
}

function apiCall(emotion) {
    
    var emotion = emotion
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        emotion + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=100";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);




        // var results = response.data;
    })
}

$("#happy").on("click", function () {


    var emotion =happyArray[0]

    buttonSwitch();

    apiCall(emotion);

    


});

$("#sad").on("click", function () {


    var emotion =sadArray[0]

    buttonSwitch();

    apiCall(emotion);


    


});