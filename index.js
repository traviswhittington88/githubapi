

function getResults(githubHandle,numOfResults){
    
    const url = `/users/${githubHandle}/repos`;
    const options = {

    };
    console.log(url,options);
    
    fetch(url,options)
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
        const maxResults = $("#js-max-results").val();
        console.log(searchTerm,maxResults);
        getResults(searchTerm,maxResults);

    })
}


$(watchForm);