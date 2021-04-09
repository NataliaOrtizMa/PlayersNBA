apiURL = 'https://mach-eight.uc.r.appspot.com/';

let number = prompt("Please enter a number", "139");
let element = document.getElementById("p");

async function getHeights() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        n = data.values.length;
        let heightInches = [];
        for (i=0; i<n; i++) {
            heightInches.push(data.values[i]["h_in"]);
        }
        for (var i=0; i<n; i++) {
            for (var j=i+1; j<n; j++) {
                if((parseInt(heightInches[i]) + parseInt(heightInches[j])) === parseInt(number)) {
                    let firstNameOne = data.values[i]["first_name"];
                    let lastNameOne = data.values[i]["last_name"];
                    let firstNameTwo = data.values[j]["first_name"];
                    let lastNameTwo = data.values[j]["last_name"];
                    var tag = document.createElement("p");
                    var text = document.createTextNode(firstNameOne + ' ' + lastNameOne + ' - ' + firstNameTwo + ' ' + lastNameTwo);
                    tag.appendChild(text);
                    p.appendChild(tag);
                }
            }
        }
        return heightInches;
    }
    catch(error) {
        console.log('Fetch Error',error);
    };
};

getHeights();
