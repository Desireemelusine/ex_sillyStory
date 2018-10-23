var customName = document.getElementById("customName");
var randomize = document.querySelector(".btnGenerate");
var story = document.querySelector(".story");
//var btnUs = document.querySelector("#us");
//var btnUk = document.querySelector("#uk");


function randomValueFromArray(array) {
  var random = Math.floor(Math.random() *  array.length);
  return array[random];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText ;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature = Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility ="visible";
}

/*------weather---*/

var select = document.querySelector("select");
var txt = document.querySelector("h6");

select.addEventListener('change', setWeather);


function setWeather() {
  var option = select.value;

  switch (option) {
    case "sunny":
      txt.textContent = "It's a sunny and warm day!Enjoy";
      break;
    case "rainy":
      txt.textContent = "It's rainning, bring your umbrella!";
      break;
    case "snowing":
      txt.textContent = "It'snowing, bring your hat and warm clothes!";
      break;
    case "overcast":
      txt.textContent = "It's a weird day, bring everything!";
      break;
    default:
      txt.textContent ="";
  }

  /*
  if (option === "sunny") {
    txt.textContent = "It's a sunny and warm day!Enjoy";
  } else if (option === "rainy") {
    txt.textContent = "It's rainning, bring your umbrella!";
  } else if (option === "snowing") {
    txt.textContent = "It'snowing, bring your hat and warm clothes!";
  } else if (option === "overcast") {
    txt.textContent = "It's a weird day, bring everything!";
  } else {
    txt.textContent ="";
  }*/
}

/*-----Black white---*/

var selectTh = document.getElementById('theme');
var optionTh = document.querySelector('html');
document.body.style.padding =  '10px';

//selectTh.addEventListener('change', theme);

function theme(bgcolor, txtcolor) {
  optionTh.style.backgroundColor = bgcolor;
  optionTh.style.color = txtcolor;
  }

selectTh.onchange = function() {
  (selectTh.value === "black") ? theme('black', 'white') : theme('white', 'black');
}
