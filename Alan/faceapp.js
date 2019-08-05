//Globarl Variable Declaration 
var happyArray = ["happy", "hilarious", "histerical", "funny", "lol", "happy babies"];
var sadArray = ["unhappy", "regretful", "tantrum", "dissapointed", "melancholy", "crying"];
var keyword_counter = 0;
var gif_response_storage;
var like_counter = 0;
var unlike_counter = 0;
var total_counter = 0;

function buttonSwitch() {  
    $("#buttons").empty()
    $("#buttons").append('<button type="button" class="btn btn-primary" id="forward">next</button>')
    $("#buttons").append('<button type="button" class="btn btn-danger" id="back">back</button>')
};

// function gif_generator(response, counter)
// {
//     // Saving the gif_original_url property
//     var gif_url = response.data[counter].images.original.url;

//     // Creating and storing an image tag
//     var gifImage = $("<img>");

//     // Setting the gif src, class and alt
//     gifImage.attr("src", gif_url);
//     gifImage.attr("class", "display")
//     gifImage.attr("alt", "gif");

//     // Appending the gif to the App_response div
//     $(".App_response").empty();
//     $(".App_response").append(gifImage);
//     console.log(gif_url);
//     var objLength = response.data.length
//     console.log(objLength)
// }

function img_generator(response)
{
    // Saving the gif_original_url property
    var img_url = response.results[total_counter].urls.small;

    // Creating and storing an image tag
    var imgApi = $("<img>");

    // Setting the gif src, class and alt
    imgApi.attr("src", img_url);
    imgApi.attr("class", "display")
    imgApi.attr("alt", "img");

    // Appending the gif to the App_response div
    $(".App_response").empty();
    $(".App_response").append(imgApi);
    console.log(img_url);
    var objLength = response.data.length
    console.log(objLength)
}

// function giphyApiCall(keyword) 
// {
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     keyword + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=100";
//     var queryURL
//     $.ajax(
//     {
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) 
//     {      
//         // Saving the response 
//         gif_response_storage = response;
//         console.log(gif_response_storage)                
//         gif_generator(gif_response_storage, like_counter);
//     })
// }

function apiCall(keyword) 
{
    var queryURL = "https://api.unsplash.com/search/photos?page=1&query=" +
    keyword + "&client_id=85b8d3c3eeda1d3e99f256d19ed5228b2c9bacf053fd33e7b1303b9dec097df3";
    var queryURL
    $.ajax(
    {
        url: queryURL,
        method: "GET"
    }).then(function (response) 
    {      
        // Saving the response 
        gif_response_storage = response;
        console.log(response)                
        img_generator(gif_response_storage, total_counter);

    })
}


$("#happy").on("click", function () 
{
    var keyword = happyArray[keyword_counter];
    apiCall(keyword);
    buttonSwitch();
});

$("#sad").on("click", function () 
{
    var keyword = sadArray[keyword_counter]
    apiCall(keyword);
    buttonSwitch();
});

// $(document).on("click", "#like", function(){
//     like_counter ++;
//     total_counter ++;
//     gif_generator(gif_response_storage, total_counter);
// });


// $(document).on("click", "#unlike", function(){
//     unlike_counter ++;
//     total_counter ++;
//     gif_generator(gif_response_storage, total_counter);
//     if (unlike_counter >= 2)
//     {
//         like_counter = 0;
//         unlike_counter = 0;
//         total_counter = 0;
//         keyword_counter ++
//             if(keyword_counter === happyArray.length)
//             {
//                 keyword_counter = 0;
//             }
//         var keyword = sadArray[keyword_counter];
//         apiCall(keyword);
//     }
    
// });
// var sample = "https://api-us.faceplusplus.com/facepp/v3/face/analyze"
// var apiKey = "Q2UNdD9Ah7-NQIg59Uii-NnJq3kG09BD"
// var apiSecret = "dyUuVeYF7MItpPikHlx-9-n6BqC6DgSv"

// const request = require('request');

//  request.post({url:'https://api-us.faceplusplus.com/facepp/v3/face/analyze', formData: {
//    api_key: Q2UNdD9Ah7-NQIg59Uii-NnJq3kG09BD,
//    api_secret: dyUuVeYF7MItpPikHlx-9-n6BqC6DgSv,
//    image_url1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/George_Lucas_cropped_2009.jpg/220px-George_Lucas_cropped_2009.jpg',
//    image_url2: 'https://imgix.bustle.com/uploads/getty/2018/6/13/e4c5921d-3e23-4f13-87fe-0180005d0ace-getty-929360234.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70'
//  }}, (err, httpResponse, body) => {
//    if (err) {
//      return console.error('error', err);
//    }
//    console.log('success ', JSON.parse(body));
//  });
 //https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=Q2UNdD9Ah7-NQIg59Uii-NnJq3kG09BD&?api_secret=dyUuVeYF7MItpPikHlx-9-n6BqC6DgSv&face_tokens=1&return_landmark=2

// var gifForward = 0

//  function NextOrPrevious (){
//      $(document).on("click", "#forward", function(){
//         total_counter++
//         if(total_counter >=100)
//         {
//             total_counter = 0
//             total_counter++
//             gif_generator(gif_response_storage, total_counter);
//         }
//         else
//         {
//             total_counter++
//             gif_generator(gif_response_storage, total_counter);
//         }
//     })
//      $(document).on("click", "#back", function(){
//         total_counter--
//         if(total_counter <= 0)
//         {
//             total_counter = 100
//             total_counter--
//             gif_generator(gif_response_storage, total_counter);
//         }
//         else
//         {
//             total_counter--
//             gif_generator(gif_response_storage, total_counter);
//         }
//     })
//  }
//  NextOrPrevious()



    $(document).on("click", "#forward", function(){
       total_counter++
       img_generator(gif_response_storage, total_counter);
       if(total_counter < objLength)
       {
           total_counter = 0
           img_generator(gif_response_storage, total_counter);
       }
       else
       {
           total_counter++
           img_generator(gif_response_storage, total_counter);
       }
   })
    $(document).on("click", "#back", function(){
        total_counter--
        img_generator(gif_response_storage, total_counter);
       if(total_counter < 0)
       {
           total_counter = objLength
           img_generator(gif_response_storage, total_counter);
       }
       else
       {
           total_counter--
           img_generator(gif_response_storage, total_counter);
       }
   })



//MOVIES  API


// var moviesHappy = ["Meet the Parents", "Mean  Girls", "Zoolander", "Superbad", "School of Rock", "Toy Story", "Borat", "Dumb and Dumber", "The Hangover"]
// var moviesSad = ["The Notebook", "The Boy In The Striped Pajamas", "Irreplaceable You",  "Room", "One Day", "6 Years", "Lion", "Seven Pounds", "Boyhood", "Mudbound", "The Pianist"]

// var request = new XMLHttpRequest()
// request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=4cdfed9af962e1cca4e214fecde9e1d5&query='+ movie, true)
// request.onload = function() {
//   var data = JSON.parse(this.response)
//   console.log(data.results)
//   var titles = []
//   var overviews = []
//   var poster_paths = []
//   if (request.status >= 200 && request.status < 400) {
//     data.results.forEach(results => {
     
//       overviews.push(results.overview)
//       poster_paths.push(results.poster_path)
//       titles.push(results.title)
//     })
//   }
//   else {
//     const errorMessage = document.createElement('marquee')
//     errorMessage.textContent = `Gah, it's not working!`
//     app.appendChild(errorMessage)
//   }
//     /* titles = []
//     overviews = []
//     poster_paths = [] */
//     var x
//     titles.forEach(function(x) {
//         $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         $("#movie-view").text(JSON.stringify(response));
//         var myObject=JSON.parse
//      });
//     });
//     var y
//     overviews.forEach(function(y) {
//     console.log(y);
//     });
//     var z
//     poster_paths.forEach(function(z) {
//     console.log(z);
//     });
//     }
//     request.send()
