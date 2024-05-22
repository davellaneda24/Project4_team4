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
            logoUrl = "https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png";
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
            logoUrl = "https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png";
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
            logoUrl = "https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png";
            break;
        case "LA Clippers":
            logoUrl = "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2025_sportslogosnet-5542.png";
            break;
        case "Los Angeles Lakers":
            logoUrl = "https://content.sportslogos.net/logos/6/237/full/los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png";
            break;
        case "Memphis Grizzlies":
            logoUrl = "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png";
            break;
        case "Miami Heat":
            logoUrl = "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif";
            break;
        case "Milwaukee Bucks":
            logoUrl = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png";
            break;
        case "Minnesota Timberwolves":
            logoUrl = "https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png";
            break;
        case "New Orleans Pelicans":
            logoUrl = "https://content.sportslogos.net/logos/6/4962/full/new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png";
            break;
        case "New York Knicks":
            logoUrl = "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png";
            break;
        case "Oklahoma City Thunder":
            logoUrl = "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png";
            break;
        case "Orlando Magic":
            logoUrl = "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png";
            break;
        case "Philadelphia 76ers":
            logoUrl = "https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png";
            break;
        case "Phoenix Suns":
            logoUrl = "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png";
            break;
        case "Portland Trail Blazers":
            logoUrl = "https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png";
            break;
        case "Sacramento Kings":
            logoUrl = "https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png";
            break;
        case "San Antonio Spurs":
            logoUrl = "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png";
            break;
        case "Toronto Raptors":
            logoUrl = "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png";
            break;
        case "Utah Jazz":
            logoUrl = "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_2023_sportslogosnet-8513.png";
            break;
        case "Washington Wizards":
            logoUrl = "https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png";
            break;
        default:
            logoUrl = "";
    }
    document.getElementById(logoDivId).innerHTML = logoUrl ? "<img src='" + logoUrl + "' alt='" + selectedTeam + " Logo'>" : "";
}

function submitSelection() {
    var homeTeam = document.getElementById("home-team").value;
    var awayTeam = document.getElementById("away-team").value;
    if (homeTeam === "" || awayTeam === "") {
        alert("Please select both home and away teams.");
    } else {
        alert("You selected " + homeTeam + " as the home team and " + awayTeam + " as the away team.");
    }
    const homeLogo = document.getElementById('home-logo');
    const awayLogo = document.getElementById('away-logo');
  
    // Add the pop-out class to both logos
    homeLogo.classList.add('pop-out');
    awayLogo.classList.add('pop-out');
  
    // Remove the pop-out class after the animation is done
    setTimeout(() => {
      homeLogo.classList.remove('pop-out');
      awayLogo.classList.remove('pop-out');
    }, 500);

}