let state = {
  x: 150,
  y: 300,
  isDragged: false,
};

const container = document.getElementById("drag-and-drop-app");
state.x = container.offsetLeft;
state.y = container.offsetTop;

window.onload = render;

// 1. Készíts renderelő függvényt, ami megjeleníti a dobozt a state-ből kiolvasott adatok alapján

function render() {


  // 2. A dobozt úgy rajzold ki, hogy az element-nek a position style attribútuma "absolute", a 
  //    left és a top attribútuma pedig a state-ből származó x és y érték

  const doboz = `
<div
style="width: 200px; position: absolute; left: ${state.x}px; top: ${state.y}px;"
class="box ${state.isDragged ? "grabbed" : "not-grabbed"}"
onmousedown="dobozDragStart()"
onmouseup="dobozDragEnd()"
onmousemove="dobozMouseMove(window.event)"
>
      <div class="card-body">
        <h5 class="card-title display-4"># húzd arrébb</h5>
      </div>
    </div>
  `;

  document.getElementById("drag-and-drop-app").innerHTML = doboz;
}


// 3. A doboz mousedown eseményre reagálva módosítsd a state isDragged értékét true-ra

function dobozDragStart() {
  state.isDragged = true;
  render();
}

// 4. A doboz mouseup és mouseleave eseményre reagálva módosítsd a state isDragged értékét false-ra

function dobozDragEnd(){
  state.isDragged = false;
  render();
}

/* 5. A doboz mousemove eseménykor vizsgáld meg, hogy a state.isDragged értéke true-e
Amennyiben igen, írd be a state x és y kulcsa alá az egér aktuális x,y pozícióját */

function dobozMouseMove(event) {
  const box = event.target.closest(".box");
    if (!box) {
      return;
    }

  if (state.isDragged) {
    state.x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
    state.y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;
    render();
  }
 
}


// 7. Az állapotváltozások után hívd meg a renderelő függvényt
