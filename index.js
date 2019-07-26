

function displayResults(responseJson){
    console.log(responseJson);
    $("#js-results-list").empty();
    console.log($("#js-results-list").val());

    for(let i = 0; i < responseJson.length; i++){
        $("#js-results-list").append(`<li><h3><a href=${responseJson[i].html_url}>
        ${responseJson[i].name}</a></h3></li>`)
    };

    $(".js-results").removeClass("hidden");

}


function getResults(githubHandle){
    
    const url = ` https://api.github.com/users/${githubHandle}/repos`;

    console.log(url);

    fetch(url)
    .then(response => {if(response.ok){
        return response.json();
    }
        throw new Error(response.StatusText)}
    )
    .then(responseJson => displayResults(responseJson))
    .catch(err => {$("#js-error").text(`Something went wrong: ${err.message}`)});
}


function watchForm(){
    $("#js-form").submit(function(event){
        event.preventDefault();
        const searchTerm = $("#js-search-term").val();
        getResults(searchTerm);

    })
}


$(watchForm);