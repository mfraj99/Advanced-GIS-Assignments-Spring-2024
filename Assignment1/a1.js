//on clicking a borough button, go to the webpage of that borough, replace image with the borough seal

//any button click removes the original text
$(":button").on("click", function () {
    $("#textToChange").remove();
})

$("#Manhattan").on("click", function () {
    window.open("https://www.manhattanbp.nyc.gov/", '_blank');
    $("#imageToChange").attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Seal_of_Borough_of_Manhattan.svg/743px-Seal_of_Borough_of_Manhattan.svg.png");
})

$("#Brooklyn").on("click", function () {
    window.open("https://www.brooklynbp.nyc.gov/", '_blank');
    $("#imageToChange").attr('src', "https://upload.wikimedia.org/wikipedia/commons/7/75/Seal_of_Brooklyn%2C_New_York.svg");

})

$("#Queens").on("click", function () {
    window.open("https://queensbp.org/", '_blank');
    $("#imageToChange").attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Seal_of_Borough_of_Queens.svg/1997px-Seal_of_Borough_of_Queens.svg.png");

})

$("#Bronx").on("click", function () {
    window.open("https://bronxboropres.nyc.gov/", '_blank');
    $("#imageToChange").attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Seal_of_Borough_of_the_Bronx.svg/1200px-Seal_of_Borough_of_the_Bronx.svg.png");

})

$("#Staten").click(function () {
    window.open("https://www.statenislandusa.com/", '_blank');
    $("#imageToChange").attr('src', "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Seal_of_Staten_Island_2016.svg/1024px-Seal_of_Staten_Island_2016.svg.png");

})
