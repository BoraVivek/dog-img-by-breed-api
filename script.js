let breeds;
let breedSelector = $('#dog-breeds');
let actionBtn = $('#get-img-btn');
let nextBtn = $('#next-img');
let selectedBreed;

$.ajax({
    url: "https://dog.ceo/api/breeds/list/all",
    method: "GET",
    success: function(data){
        breeds = data.message;
        for(let breed in breeds){
            breedSelector.append(`<option value=${breed}>${breed}</option>`);
        }
    }
}).fail(function(){
    console.log("Error in fetching breeds");
})

actionBtn.click(function(){
    selectedBreed = $('#dog-breeds').val();
    $.ajax({
        url: `https://dog.ceo/api/breed/${selectedBreed}/images/random`,
        method: 'GET',
        success: function(data){
            $('#dog-img').attr('src',data.message);
        }
    }).fail(function(){
        console.log('Failed to fetch image');
    })
});


nextBtn.click(function(){
    $.ajax({
        url: `https://dog.ceo/api/breed/${selectedBreed}/images/random`,
        method: 'GET',
        success: function(data){
            $('#dog-img').attr('src',data.message);
        }
    }).fail(function(){
        console.log('Failed to fetch image');
    })
});