//TODO: Eliminate the manual name translation from everywhere? 
// Or add color code info to json as well and create a resolve candidate method
function color_code(candidate, opacity) {
    if (candidate == 'amy-klobuchar')
        return 'rgba(52, 170, 224, ' + opacity.toString() + ')'; 
    else if (candidate == 'bernie-sanders')
        return 'rgba(28, 98, 178, ' + opacity.toString() + ')'; 
    else if (candidate == 'donald-trump')
        return 'rgba(255, 0, 0, ' + opacity.toString() + ')';
    else if (candidate == 'elizabeth-warren')
        return 'rgba(26, 149, 203, ' + opacity.toString() + ')';  
    else if (candidate == 'joe-biden')
        return "rgba(51, 51, 255, " + opacity.toString() + ")"; 
    else if (candidate == 'pete-buttigieg')
        return 'rgba(176, 206, 255, ' + opacity.toString() + ')'; 

    console.log("Candidate not in the list, throw error");
}

function trait_data(candidate) {
    traits = [];

    if (candidate == 'amy-klobuchar')
        data = amy_klobuchar_traits;
    else if (candidate == 'bernie-sanders')
        data = bernie_sanders_traits;
    else if (candidate == 'donald-trump')
        data = donald_trump_traits;
    else if (candidate == 'elizabeth-warren')
        data = elizabeth_warren_traits;
    else if (candidate == 'joe-biden')
        data = joe_biden_traits;
    else if (candidate == 'pete-buttigieg')
        data = pete_buttigieg_traits;
    else
        console.log("Candidate not in the list, throw error");

    traits[0] = data['Openness'] * 100;
    traits[1] = data['Agreeableness'] * 100;
    traits[2] = data['Conscientiousness'] * 100;
    traits[3] = data['Extraversion'] * 100;
    traits[4] = data['Emotional range'] * 100;
   
    return traits;
}

