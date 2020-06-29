var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


document.querySelector('#scrollTop').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(1);
});

typewriter.typeString('Raden Rara Fabiola Sari Paramastri!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bibi!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Sari!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Byawak!')
    .pauseFor(2500)
    .start();

    window.onload = function() {
        countUpFromTime("Aug 15, 2016 16:50:00", 'countup1');
      };
      function countUpFromTime(countFrom, id) {
        countFrom = new Date(countFrom).getTime();
        var now = new Date(),
            countFrom = new Date(countFrom),
            timeDifference = (now - countFrom);
          
        var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;
          
        days = Math.floor(timeDifference / (secondsInADay) * 1);
        years = Math.floor(days / 365);
        if (years > 1){ days = days - (years * 365) }
        hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
        mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
        secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
      
        var idEl = document.getElementById(id);
        idEl.getElementsByClassName('years')[0].innerHTML = years;
        idEl.getElementsByClassName('days')[0].innerHTML = days;
        idEl.getElementsByClassName('hours')[0].innerHTML = hours;
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
      
        clearTimeout(countUpFromTime.interval);
        countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
      }