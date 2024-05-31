// Function to fetch data from your API using d3
async function fetchTeams() {
    try {
        // Update the dropdown values
        updateDropdown('home-team', home_name);
        updateDropdown('away-team', visitor_name);

        // Populate the over/under line dropdown
        populateOverUnderDropdown(over_under);

        // Update the logos
        updateLogo('home-team', 'home-logo');
        updateLogo('away-team', 'away-logo');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to update dropdown options
function updateDropdown(dropdownId, teamName) {
    const dropdown = document.getElementById(dropdownId);
    const option = document.createElement('option');
    option.value = teamName;
    option.text = teamName;
    dropdown.innerHTML = ''; // Clear existing options
    dropdown.appendChild(option);
}

// Function to populate the Over/Under Line dropdown
function populateOverUnderDropdown(selectedValue) {
    const dropdown = document.getElementById('over-under-line');
    dropdown.innerHTML = ''; // Clear existing options

    for (let i = 100; i <= 300; i += 0.5) {
        const option = document.createElement('option');
        option.value = i.toFixed(1);
        option.text = i.toFixed(1);
        dropdown.appendChild(option);
    }

    // Set the selected value if it exists in the options
    if (selectedValue !== undefined && selectedValue !== null) {
        dropdown.value = selectedValue;
    }
}

function updateLogo(teamDropdownId, logoDivId) {
    var selectedTeam = document.getElementById(teamDropdownId).value;
    var logoUrl = "";
    switch(selectedTeam) {
        case "Atlanta Hawks":
            logoUrl = "https://content.sportslogos.net/logos/6/220/full/8190_atlanta_hawks-primary-2021.png";
            break;
        case "Boston Celtics":
            logoUrl = "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png";
            break;
        case "Brooklyn Nets":
            logoUrl = "https://content.sportslogos.net/logos/6/3786/full/brooklyn_nets_logo_alternate_20138452.png";
            break;
        case "Charlotte Hornets":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/440px-Charlotte_Hornets_%282014%29.svg.png";
            break;
        case "Chicago Bulls":
            logoUrl = "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png";
            break;
        case "Cleveland Cavaliers":
            logoUrl = "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_2023_sportslogosnet-5369.png";
            break;
        case "Dallas Mavericks":
            logoUrl = "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png";
            break;
        case "Denver Nuggets":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/400px-Denver_Nuggets.svg.png";
            break;
        case "Detroit Pistons":
            logoUrl = "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20185710.png";
            break;
        case "Golden State Warriors":
            logoUrl = "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png";
            break;
        case "Houston Rockets":
            logoUrl = "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png";
            break;
        case "Indiana Pacers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/400px-Indiana_Pacers.svg.png";
            break;
        case "LA Clippers":
            logoUrl = "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2025_sportslogosnet-5542.png";
            break;
        case "Los Angeles Lakers":
            logoUrl = "https://content.sportslogos.net/logos/6/237/full/los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png";
            break;
        case "Memphis Grizzlies":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/380px-Memphis_Grizzlies.svg.png";
            break;
        case "Miami Heat":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/400px-Miami_Heat_logo.svg.png";
            break;
        case "Milwaukee Bucks":
            logoUrl = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png";
            break;
        case "Minnesota Timberwolves":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/400px-Minnesota_Timberwolves_logo.svg.png";
            break;
        case "New Orleans Pelicans":
            logoUrl = "https://content.sportslogos.net/logos/6/4962/full/new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png";
            break;
        case "New York Knicks":
            logoUrl = "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png";
            break;
        case "Oklahoma City Thunder":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/400px-Oklahoma_City_Thunder.svg.png";
            break;
        case "Orlando Magic":
            logoUrl = "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png";
            break;
        case "Philadelphia 76ers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/400px-Philadelphia_76ers_logo.svg.png";
            break;
        case "Phoenix Suns":
            logoUrl = "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png";
            break;
        case "Portland Trail Blazers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/440px-Portland_Trail_Blazers_logo.svg.png";
            break;
        case "Sacramento Kings":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/360px-SacramentoKings.svg.png";
            break;
        case "San Antonio Spurs":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/480px-San_Antonio_Spurs.svg.png";
            break;
        case "Toronto Raptors":
            logoUrl = "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png";
            break;
        case "Utah Jazz":
            logoUrl = "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_2023_sportslogosnet-8513.png";
            break;
        case "Washington Wizards":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/400px-Washington_Wizards_logo.svg.png";
            break;
        default:
            logoUrl = "";
    }
    document.getElementById(logoDivId).innerHTML = logoUrl ? "<img src='" + logoUrl + "' alt='" + selectedTeam + " Logo'>" : "";
}

// Function to handle team selection submission
function submitSelection() {
    var homeTeam = document.getElementById("home-team").value;
    var awayTeam = document.getElementById("away-team").value;
    var overUnderLine = document.getElementById("over-under-line").value;
    const homeLogo = document.getElementById('home-logo');
    const awayLogo = document.getElementById('away-logo');

    if (homeTeam === "" || awayTeam === "" || overUnderLine === "") {
        alert("Please select both home and away teams, and enter the Over/Under Line.");
    } else {
        homeLogo.classList.add('pop-out');
        awayLogo.classList.add('pop-out');

        setTimeout(() => {
            homeLogo.classList.remove('pop-out');
            awayLogo.classList.remove('pop-out');
            passToModel(homeTeam, awayTeam, overUnderLine);
        }, 500);
    }
}

function get_prediction(data) {
    if (data.prediction === 0) {
        alert("The prediction result is: Under");
    } else if (data.prediction === 1) {
        alert("The prediction result is: Over");
    } else {
        alert("Unexpected prediction result: " + data.prediction);
    }
}

function passToModel(home_name, visitor_name, over_under) {
    const url = `http://127.0.0.1:5000/api/v1.0/predict/${home_name}/${visitor_name}/${over_under}`;
    d3.json(url).then(function (data) {
        get_prediction(data);
    }).catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Populate the over/under line dropdown
function populateOverUnderDropdown() {
    const dropdown = document.getElementById('over-under-line');
    dropdown.innerHTML = ''; // Clear existing options

    for (let i = 100; i <= 300; i += 0.5) {
        const option = document.createElement('option');
        option.value = i.toFixed(1);
        option.text = i.toFixed(1);
        dropdown.appendChild(option);
    }

    console.log('Over/Under Line dropdown populated.');
}

// Call fetchTeams function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTeams();
    populateOverUnderDropdown();
});
