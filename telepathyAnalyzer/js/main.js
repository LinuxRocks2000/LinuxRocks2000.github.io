var accuracy = 50;
var distribution = 50;
var attempts = 0;
var nextNumber = Math.random() < 0.5;

// Statistics:
var deviant = 0; // This is the amount by which the accuracy deviates from expected (50%). Should never be negative: use abs on low accuracy values. Not statistically significant!
var fairness = 0; // This is the deviance of the distribution; the amount by which the distribution deviates from 50% the same way deviant works.
var telepathyValue = 0; // Deviant - fairness; smaller values for fairness are thus more fair.

function doProcessingPerPress(value){
    attempts += 1;
    accuracy = ((accuracy * (attempts - 1)) + (100 * (value == nextNumber))) / attempts;
    distribution = ((distribution * (attempts - 1)) + (100 * (!nextNumber))) / attempts;
    deviant = Math.abs(accuracy - 50);
    fairness = Math.abs(distribution - 50);
    telepathyValue = Math.abs(deviant - fairness);
    document.querySelector("#computerPercentage > #side").style.width = distribution + "%";
    document.querySelector("#yourPercentage > #side").style.width = accuracy + "%";
    document.getElementById("tries").innerHTML = attempts;
    yourValueElement = document.getElementById("yourTelepathyValue");
    if (telepathyValue >= 0){
        yourValueElement.innerText = "You are normal."
    }
    if (telepathyValue > 10){
        yourValueElement.innerText = "You are a potential Telepath";
    }
    if (telepathyValue > 20){
        yourValueElement.innerText = "You are a moderate Telepath";
    }
    if (telepathyValue > 30){
        yourValueElement.innerText = "You are a good telepath."
    }
    if (telepathyValue > 40){
        yourValueElement.innerText = "You are an excellent telepath.";
    }
    if (telepathyValue > 48){
        yourValueElement.innerText = "You probably hacked my program; frankly it is incredible that you did this.";
    }
    yourValueElement.innerText += " (" + accuracy + " raw accuracy, " + distribution + " distribution, to make a " + telepathyValue * 2 + " real telepathy value)";
    nextNumber = Math.random() < 0.5;
}

function blonk(win, event){
    var el = document.createElement("div");
    el.classList.add("thumb");
    el.classList.add("thumb" + (win ? "up" : "down"));
    el.style.top = event.layerY - 75/2 + "px";
    el.style.left = event.clientX - 75/2 + "px";
    document.getElementById("otherstuff").appendChild(el);
    setTimeout(() => {
        el.parentNode.removeChild(el);
    }, 1500);
}

function button1Press(event){
    if (nextNumber == false){
        blonk(true, event);
    }
    else{
        blonk(false, event);
    }
    doProcessingPerPress(false);
}
function button2Press(event){
    if (nextNumber == true){
        blonk(true, event);
    }
    else{
        blonk(false, event);
    }
    doProcessingPerPress(true);
}
