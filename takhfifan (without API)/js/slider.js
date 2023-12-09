function changeAll(x) {
  // move gal عکس ها تغییر میکنه
  move(x);

  // change tab تب زیر دایره ها تغییر میکنه
  changeTab(x);
}
function move(num) {
  pos = -100 * num;
  gal.style.left = pos + "%";
}
function changeTab(num) {
  for (i = 0; i < buts.length; i++) {
    buts[i].className = "";
  }

  buts[num].className = "sel";
}

function go_right() {
  if (pos > -800) {
    pos = pos - 100;
    gal.style.left = pos + "%";
  } else if (pos == -800) {
    pos = 0;
    gal.style.left = pos + "%";
  }

  let currentTabIndex = pos / -100;
  changeTab(currentTabIndex);
}

function go_left() {
  if (pos < 0) {
    pos = pos + 100;
    gal.style.left = pos + "%";
  }

  currentTabIndex = pos / -100;
  changeTab(currentTabIndex);
}

function play() {
  s = setInterval("go_right()", 2000);
}
function pause() {
  clearInterval(s);
}
