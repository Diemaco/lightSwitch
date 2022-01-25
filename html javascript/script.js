var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Switch light on';
document.body.appendChild(btn);

// schijf hier tussen je code
document.body.style.backgroundColor = 'black';

function switchBG() {
    var isOn = document.body.style.backgroundColor === 'yellow';

    if (isOn) {
        document.body.style.backgroundColor = 'black';
        console.log('light is off');
        btn.innerHTML = 'Switch light on';
    } else {
        document.body.style.backgroundColor = 'yellow';
        console.log('light is on');
        btn.innerHTML = 'Switch light off';
    }
}

btn.onclick = switchBG;

// schijf hier tussen je code