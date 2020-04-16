document.getElementById("clear").style.display = "none";
document.getElementById("checkBox").style.display = "none";
document.getElementById("selectAll").style.display = "none";

let date = new Date();
let weekDay = date.getDay();
let monthDay = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

switch (weekDay) {
  case 0:
    weekDay = "Sunday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
}

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

let dateToday = weekDay + ", " + monthDay + " " + month + " " + year;
document.getElementById("date").innerHTML = dateToday;

document.getElementById("input").addEventListener("keyup", function (e) {
  let input = document.getElementById("input").value;

  if (e.keyCode == 13 && input != "") {
    let li = document.createElement("li");
    li.className = "element";
    li.id = "element";
    li.innerHTML = document.getElementById("input").value;
    document.getElementById("lista").appendChild(li);

    let x = document.createElement("img");
    x.className = "delete";
    x.id = "delete";
    x.src = "https://image.flaticon.com/icons/png/512/75/75519.png";
    x.alt = "delete icon";

    let elements = document.getElementsByTagName("li");

    for (let i = 0; i < elements.length; i++) elements[i].appendChild(x);

    document.getElementById("input").value = "";

    let closebtns = document.getElementsByClassName("delete");

    for (let i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", deleteTask);

      function deleteTask(event) {
        this.parentElement.style.display = "none";

        if (
          document.getElementById("lista").lastChild.style.display == "none"
        ) {
          button.style.display = "none";
          selectAll.style.display = "none";
          checkBox.style.display = "none";
        }

        event.stopPropagation();
      }
    }

    let timesClicked = 0;

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", completeTask);

      function completeTask() {
        timesClicked++;

        if (timesClicked % 2 == 1) {
          elements[i].style.textDecoration = "line-through";
          elements[i].style.color = "black";
        } else {
          elements[i].style.textDecoration = "none";
          elements[i].style.color = "white";
        }
      }
    }

    let button = document.getElementById("clear");
    button.style.display = "inline-block";
    button.innerHTML = "Clear";

    button.addEventListener("click", function () {
      for (let i = 0; i < elements.length; i++) elements[i].remove();

      button.style.display = "none";
      checkBox.style.display = "none";
      selectAll.style.display = "none";
    });

    let checkBox = document.getElementById("checkBox");
    let selectAll = document.getElementById("selectAll");

    checkBox.style.display = "inline-block";
    selectAll.style.display = "inline-block";

    checkBox.addEventListener("click", function () {
      if (checkBox.checked == true) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.textDecoration = "line-through";
          elements[i].style.color = "black";
        }
      } else {
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.textDecoration = "none";
          elements[i].style.color = "white";
        }
      }
    });
  }
});
