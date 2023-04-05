let arrow = document.querySelectorAll('.bawah');

for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle('showMenu');
  });
}

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');
console.log(sidebarBtn);

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

//currency
var uang = 0;

//currency ++
var click = 1;
var autoClick = 0;

//time
var autoTime = 1000;

//upgrade
var hargaUpgrade = 25;
var hargaUpgrade1 = 100;
var hargaUpgrade2 = 200;
var hargaAuto = 25;
var hargaAuto1 = 100;
var hargaAuto2 = 300;
var hargaPindah = 10000;

//Update Variable ===============================================================================================================================
setInterval(function () {
  document.getElementById('uang').innerHTML = uang;
  document.getElementById('click').innerHTML = click;
  document.getElementById('autoClick').innerHTML = autoClick;

  document.getElementById('hargaUpgrade').innerHTML = hargaUpgrade;
  document.getElementById('hargaUpgrade1').innerHTML = hargaUpgrade1;
  document.getElementById('hargaUpgrade2').innerHTML = hargaUpgrade2;

  document.getElementById('hargaAuto').innerHTML = hargaAuto;
  document.getElementById('hargaAuto1').innerHTML = hargaAuto1;
  document.getElementById('hargaAuto2').innerHTML = hargaAuto2;
}, 100); // Update Variable setiap 0.1s

//Game Mechanic =================================================================================================================================
function buyAuto() {
  if (uang >= hargaAuto) {
    uang -= hargaAuto;
    autoClick += 1;
    hargaAuto = Math.round(hargaAuto * 1.25);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function buyAuto1() {
  if (uang >= hargaAuto1) {
    uang -= hargaAuto1;
    autoClick += 2;
    hargaAuto1 = Math.round(hargaAuto1 * 1.45);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function buyAuto2() {
  if (uang >= hargaAuto2) {
    uang -= hargaAuto2;
    autoClick += 5;
    hargaAuto2 = Math.round(hargaAuto2 * 1.65);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function upgradeClick() {
  if (uang >= hargaUpgrade) {
    uang -= hargaUpgrade;
    click += 1;
    hargaUpgrade += Math.round(hargaUpgrade * 1.15);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function upgradeClick1() {
  if (uang >= hargaUpgrade1) {
    uang -= hargaUpgrade1;
    click += 2;
    hargaUpgrade1 += Math.round(hargaUpgrade1 * 1.25);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function upgradeClick2() {
  if (uang >= hargaUpgrade2) {
    uang -= hargaUpgrade2;
    click += 5;
    hargaUpgrade2 += Math.round(hargaUpgrade2 * 1.35);
  } else {
    alert('Cari uang dulu yuk!');
  }
}

function tangerang(){
    if (uang >= hargaPindah){
        uang -= hargaPindah;
        autoTime -= 300;
        hargaPindah = hargaPindah * 10;
    }
}


function clicking() {
  uang += click;

  // tambahkan kelas "animate" ke gambar toa
  document.querySelector('.toa').classList.add('animate');

  // hapus kelas "animate" dari gambar toa setelah 0.5 detik
  setTimeout(function () {
    document.querySelector('.toa').classList.remove('animate');
  }, 200);
}

//Music ========================================================================================================================================
setInterval(function () {
  uang += autoClick;
}, autoTime); // 1000ms = 1s

var musik = new Audio();
musik.src = 'music/backsound1.mp3';
musik.loop = true;
musik.play();

function mulaiAudio() {
  var mute = document.getElementById('mute');

  mute.addEventListener('click', fmute);

  function fmute() {
    if (musik.muted) {
      musik.muted = false;
      mute.style.background = 'url(img/unmute.png)';
      mute.style.backgroundSize = '40px 40px';
    } else {
      musik.muted = true;
      mute.style.background = 'url(img/mute.png)';
      mute.style.backgroundSize = '40px 40px';
    }
  }
}

window.addEventListener('load', mulaiAudio);

//Save & Load =================================================================================================================================

function loadGame() {
  var gameLoad = JSON.parse(localStorage.getItem('gameSave'));
  if (typeof gameLoad.uang !== 'undefined') uang = gameLoad.uang;
  if (typeof gameLoad.click !== 'undefined') click = gameLoad.click;
  if (typeof gameLoad.autoClick !== 'undefined') autoClick = gameLoad.autoClick;

  if (typeof gameLoad.hargaUpgrade !== 'undefined') hargaUpgrade = gameLoad.hargaUpgrade;
  if (typeof gameLoad.hargaUpgrade1 !== 'undefined') hargaUpgrade1 = gameLoad.hargaUpgrade1;
  if (typeof gameLoad.hargaUpgrade2 !== 'undefined') hargaUpgrade2 = gameLoad.hargaUpgrade2;

  if (typeof gameLoad.hargaAuto !== 'undefined') hargaAuto = gameLoad.hargaAuto;
  if (typeof gameLoad.hargaAuto1 !== 'undefined') hargaAuto1 = gameLoad.hargaAuto1;
  if (typeof gameLoad.hargaAuto2 !== 'undefined') hargaAuto2 = gameLoad.hargaAuto2;
}

function resetGame() {
  if (confirm('Are you sure you want to reset the game?')) {
    var gameSave = {};
    localStorage.setItem('gameSave', JSON.stringify(gameSave));
    location.reload();
  }
}

function saveGame() {
  var gameSave = {
    uang: uang,
    click: click,
    autoClick: autoClick,

    hargaUpgrade: hargaUpgrade,
    hargaUpgrade1: hargaUpgrade1,
    hargaUpgrade2: hargaUpgrade2,

    hargaAuto: hargaAuto,
    hargaAuto1: hargaAuto1,
    hargaAuto2: hargaAuto2,
  };
  localStorage.setItem('gameSave', JSON.stringify(gameSave));
}

function saveButton() {
  saveGame();
  alert('Game Has Been Saved!!');
}

window.onload = function () {
  loadGame();
};

setInterval(function () {
  saveGame();
}, 30000); //30 detik

document.addEventListener(
  'keydown',
  function (event) {
    if (event.ctrlKey && event.which == 83) {
      //ctrl + s
      event.preventDefault();
      saveGame();
      alert('Game Has Been Saved!!');
    }
  },
  false
); //disable ctrl+s
