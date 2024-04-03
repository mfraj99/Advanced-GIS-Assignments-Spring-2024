//on clicking a borough button, go to the webpage of that borough, replace image with the borough seal

$(':button').on('click', function () {

    //any button click removes the original text
    $("#textToChange").remove();

    //buttons now have a position that can be referenced in an array
    var position = parseInt($(this).data('position'))

    //print to console as a breakpoint
    console.log(position)

    // storing links to bp websites and seal images
    // both arrays are in the order of Man, Brk, Qns, Brx Sta
    var boroPresLinks = [

        "https://www.manhattanbp.nyc.gov/",

        "https://www.brooklynbp.nyc.gov/",

        "https://queensbp.org/",

        "https://bronxboropres.nyc.gov/",

        "https://www.statenislandusa.com/"
    ]

    var boroPresSeals = [

        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Seal_of_Borough_of_Manhattan.svg/743px-Seal_of_Borough_of_Manhattan.svg.png",

        "https://upload.wikimedia.org/wikipedia/commons/7/75/Seal_of_Brooklyn%2C_New_York.svg",

        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Seal_of_Borough_of_Queens.svg/1997px-Seal_of_Borough_of_Queens.svg.png",

        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Seal_of_Borough_of_the_Bronx.svg/1200px-Seal_of_Borough_of_the_Bronx.svg.png",

        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Seal_of_Staten_Island_2016.svg/1024px-Seal_of_Staten_Island_2016.svg.png"

    ]

    //open a new tab with the boro president's website and display the seal based on position in the array
    window.open(boroPresLinks[position], '_blank');
    $("#imageToChange").attr('src', boroPresSeals[position]);

})
