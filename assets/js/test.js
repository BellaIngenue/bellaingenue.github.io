// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
  {
    prompt:
      "I find that my battery drains faster when I have to introduce myself to new people",
    weight: -1,
    class: "group0",
  },
  {
    prompt: "I get so lost in my thoughts, this helps charge my battery",
    weight: -1,
    class: "group1",
  },
  {
    prompt: "I do not usually initiate conversations as this drains my battery",
    weight: -1,
    class: "group2",
  },
  {
    prompt:
      "When my battery is drained, I prefer to not engage with people who seem angry or upset",
    weight: -1,
    class: "group3",
  },
  {
    prompt:
      "I choose my friends carefully, they must/might charge my battery faster than others",
    weight: -1,
    class: "group4",
  },
  {
    prompt:
      "I find it difficult to tell stories about myself and this can cause me to feel more drained",
    weight: -1,
    class: "group5",
  },
  {
    prompt:
      "When my battery is full, I am usually highly motivated and energetic",
    weight: 1,
    class: "group6",
  },
  {
    prompt:
      "Whether my battery is empty or full, I find it easy to walk up to a group of people and join in conversation",
    weight: 1,
    class: "group7",
  },
  {
    prompt:
      "Being adaptable is more important for my battery than being organized",
    weight: 1,
    class: "group8",
  },
  {
    prompt:
      "It makes my battery drained when people have debates for their own values",
    weight: 1,
    class: "group9",
  },
  {
    prompt:
      "Even when my battery is empty, I would prefer to spend time with other people",
    weight: 1,
    class: "group10",
  },
  {
    prompt: "Improvising and openmindedness helps me charge my battery",
    weight: 1,
    class: "group11",
  },
];

// This array stores all of the possible values and the weight associated with the value.
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
  {
    value: "Strongly Agree",
    class: "btn-default btn-strongly-agree",
    weight: 5,
  },
  {
    value: "Agree",
    class: "btn-default btn-agree",
    weight: 3,
  },
  {
    value: "Neutral",
    class: "btn-default",
    weight: 0,
  },
  {
    value: "Disagree",
    class: "btn-default btn-disagree",
    weight: -3,
  },
  {
    value: "Strongly Disagree",
    class: "btn-default btn-strongly-disagree",
    weight: -5,
  },
];

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {
  for (var i = 0; i < prompts.length; i++) {
    var prompt_li = document.createElement("li");
    var prompt_p = document.createElement("p");
    var prompt_text = document.createTextNode(prompts[i].prompt);

    prompt_li.setAttribute("class", "list-group-item prompt");
    prompt_p.appendChild(prompt_text);
    prompt_li.appendChild(prompt_p);

    document.getElementById("quiz").appendChild(prompt_li);
  }
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
  for (var li_index = 0; li_index < prompts.length; li_index++) {
    var group = document.createElement("div");
    group.className = "btn-group btn-group-justified";

    for (var i = 0; i < prompt_values.length; i++) {
      var btn_group = document.createElement("div");
      btn_group.className = "btn-group";

      var button = document.createElement("button");
      var button_text = document.createTextNode(prompt_values[i].value);
      button.className =
        "group" + li_index + " value-btn btn " + prompt_values[i].class;
      button.appendChild(button_text);

      btn_group.appendChild(button);
      group.appendChild(btn_group);

      document.getElementsByClassName("prompt")[li_index].appendChild(group);
    }
  }
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
  var weight = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      weight = prompts[i].weight;
    }
  }

  return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
  var weight = 0;

  for (var i = 0; i < values.length; i++) {
    if (values[i].value === value) {
      weight = values[i].weight;
    }
  }

  return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$(".value-btn").mousedown(function () {
  var classList = $(this).attr("class");
  // console.log(classList);
  var classArr = classList.split(" ");
  // console.log(classArr);
  var this_group = classArr[0];
  // console.log(this_group);

  // If button is already selected, de-select it when clicked and subtract any previously added values to the total
  // Otherwise, de-select any selected buttons in group and select the one just clicked
  // And subtract deselected weighted value and add the newly selected weighted value to the total
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    total -=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $(this).text());
  } else {
    // $('[class='thisgroup).prop('checked', false);
    total -=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $("." + this_group + ".active").text());
    // console.log($('.'+this_group+'.active').text());
    $("." + this_group).removeClass("active");

    // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
    // $(this).prop('checked', true);
    $(this).addClass("active");
    total +=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $(this).text());
  }

  console.log(total);
});

$("#submit-btn").click(function () {
  // After clicking submit, add up the totals from answers
  // For each group, find the value that is active
  $(".results").removeClass("hide");
  $(".results").addClass("show");

  if (total < 0) {
    // document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
    // console.log(document.getElementById('intro-bar').style.width);
    // document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
    document.getElementById("results").innerHTML =
      "<b>Your battery is more Introverted!</b><br><br>\
            Introverts are tricky to understand, since it is so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people. Introverts have a battery similar to Extroverts, but find it depleting quicker when around other people.\n\
    <br><br>\
    I love this explanation of an Introverted need to be alone: \n\
    <br><br>\
    For Introverts, to be alone with our thoughts is as restorative as sleeping, as nourishing as eating. Social Introversion describes the battery as one that must be fueled with alone time and introspection. \n\n\
    <br><br> ";
  } else if (total > 0) {
    document.getElementById("results").innerHTML =
      "<b>Your battery is more Extroverted!</b><br><br>\
            On the opposite side of the coin, people who are Extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge their own battery from time spent alone focusing or working hard.\
    <br><br>\
    I like how this Extrovert explains the way he/she gains energy from being around other people:\
    <br><br>\
    When I am with people, I make eye contact, smile, maybe chat if there is an opportunity (like being stuck in a long grocery store line). As an Extrovert, that is a small pingof energy, a little positive moment in the day. ";
  } else {
    document.getElementById("results").innerHTML =
      "<b>Your battery is more Ambiverted!</b><br><br>\
            Since Introverts and Extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
    <br><br>\
    So let us look at how an ambivert compares:\
    <br><br>\
    Ambiverts exhibit both Extroverted and Introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.";
  }

  // Hide the quiz after they submit their results
  $("#quiz").addClass("hide");
  $("#submit-btn").addClass("hide");
  $("#retake-btn").removeClass("hide");
});

// Refresh the screen to show a new quiz if they click the retake quiz button
$("#retake-btn").click(function () {
  $("#quiz").removeClass("hide");
  $("#submit-btn").removeClass("hide");
  $("#retake-btn").addClass("hide");

  $(".results").addClass("hide");
  $(".results").removeClass("show");
});
