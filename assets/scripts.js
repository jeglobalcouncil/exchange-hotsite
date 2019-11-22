document.addEventListener('DOMContentLoaded', function() {
    scrambleOddDestinations();
    scrambleEvenDestinations();
}, false);

function scrambleOddDestinations() {
  var dest = [];
  dest[0] = document.getElementById('destination-1').innerHTML;
  dest[1] = document.getElementById('destination-3').innerHTML;
  for (var i = dest.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = dest[i];
      dest[i] = dest[j];
      dest[j] = temp;
  }
  document.getElementById('destination-1').innerHTML = dest[0];
  document.getElementById('destination-3').innerHTML = dest[1];
}

function scrambleEvenDestinations() {
  var dest = [];
  dest[0] = document.getElementById('destination-2').innerHTML;
  dest[1] = document.getElementById('destination-4').innerHTML;
  for (var i = dest.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = dest[i];
      dest[i] = dest[j];
      dest[j] = temp;
  }
  document.getElementById('destination-2').innerHTML = dest[0];
  document.getElementById('destination-4').innerHTML = dest[1];
}

function smoothScroll(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
}

function openVideoModal(videoId,maxWidth,reqHeight) {
  var modal = document.getElementById('video-modal');
  var modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '<iframe id="modal-iframe" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjeglobalcouncil%2Fvideos%2F' + videoId + '%2F&show_text=0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>';
  var modalIframe = document.getElementById('modal-iframe');
  modalIframe.style.maxWidth = maxWidth;
  modalIframe.style.width = '100%';
  modalIframe.style.height = reqHeight;
  modal.style.display = 'block';
  document.getElementById('video-modal-tab-anchor').focus();
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}

function closeModal(modal) {
  document.getElementById(modal).style.display = 'none';
}

function calcCosts() {
  var home = document.getElementById('home').value;
  var destination = document.getElementById('destination').value;
  var foodCosts = 300;
  var planeCosts = 230;
  var planeRoute = 'Chicago < > Montreal';
  switch(destination) {
    case 'north-am':
        foodCosts = 300;
            switch (home) {
                case 'north-am':
                  planeCosts = 230;
                  planeRoute = 'Atlanta < > Montreal';
                  break;
                case 'south-am':
                  planeCosts = 700;
                  planeRoute = 'São Paulo < > Atlanta';
                  break;
                case 'europe':
                  planeCosts = 610;
                  planeRoute = 'Paris < > Atlanta';
                  break;
                case 'africa':
                  planeCosts = 550;
                  planeRoute = 'Tunis < > Atlanta';
            }
        break;
    case 'south-am':
        foodCosts = 250;
            switch (home) {
                case 'north-am':
                  planeCosts = 630;
                  planeRoute = 'Atlanta < > São Paulo';
                  break;
                case 'south-am':
                  planeCosts = 250;
                  planeRoute = 'São Paulo < > Mendoza';
                  break;
                case 'europe':
                  planeCosts = 470;
                  planeRoute = 'Paris < > São Paulo';
                  break;
                case 'africa':
                  planeCosts = 590;
                  planeRoute = 'Tunis < > São Paulo';
            }
        break;
    case 'europe':
        foodCosts = 350;
            switch (home) {
                case 'north-am':
                  planeCosts = 400;
                  planeRoute = 'Atlanta < > Paris';
                  break;
                case 'south-am':
                  planeCosts = 520;
                  planeRoute = 'São Paulo < > Paris';
                  break;
                case 'europe':
                  planeCosts = 70;
                  planeRoute = 'Paris < > Berlin';
                  break;
                case 'africa':
                  planeCosts = 100;
                  planeRoute = 'Tunis < > Paris';
            }
        break;
    case 'africa':
        foodCosts = 250;
            switch (home) {
                case 'north-am':
                  planeCosts = 820;
                  planeRoute = 'Atlanta < > Tunis';
                  break;
                case 'south-am':
                  planeCosts = 790;
                  planeRoute = 'São Paulo < > Tunis';
                  break;
                case 'europe':
                  planeCosts = 100;
                  planeRoute = 'Paris < > Tunis';
                  break;
                case 'africa':
                  planeCosts = 230;
                  planeRoute = 'Tunis < > Casablanca';
            }
  }
  var totalCosts = 120 + 80 + foodCosts + planeCosts;
  document.getElementById('foodCosts').innerHTML = '€' + foodCosts;
  document.getElementById('planeCosts').innerHTML = '(' + planeRoute + '): €' + planeCosts;
  document.getElementById('totalCosts').innerHTML = '€' + totalCosts;
}
