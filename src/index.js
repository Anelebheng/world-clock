function updateTime() {
  let durbanElement = document.querySelector("#durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  let durbanTime = moment().tz("Africa/Cairo");

  durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");
  durbanTimeElement.innerHTML = durbanTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
