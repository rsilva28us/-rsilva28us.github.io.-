var section = document.querySelector('section');
var requestURL = 'https://rsilva28us.github.io/Assignments/MountainSpoke/shoplist.json';

var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';

    request.send();

    request.onload = function() {
var shopInfo = request.response;
    showInfo(shopInfo);
}
    
function showInfo(jsonObj) {
    var info = jsonObj['tuneUps'];

    for (var i = 0; i < info.length; i++) {
        if (i === 2) { 
            continue; }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');
        

        myH2.textContent = info[i].name;
        myH3.textContent = 'Moto: ' + info[i].motto;
        myPara1.textContent = 'Install: ' + info[i].install;
        myPara2.textContent = 'Rear Install: ' + info[i].instalRear;
        myPara3.textContent = 'Oil change: ' + info[i].oilChange;
        myPara4.textContent = 'Full Suspension: ' + info[i].fullsuspension;
        

        var townEvents = info[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            if (i === 2) { continue; }
            
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

