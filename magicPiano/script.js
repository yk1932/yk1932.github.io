let synth = new Tone.Synth().toMaster();

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'z'){
    synth.triggerAttackRelease('C2', '2n')
    document.body.style.backgroundColor = "red";
  }else if(event.key == 'x'){
    synth.triggerAttackRelease('D2', '2n')
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'c'){
    synth.triggerAttackRelease('E2', '2n')
    document.body.style.backgroundColor = "yellow";
  }else if(event.key == 'v'){
    synth.triggerAttackRelease('F2', '2n')
    document.body.style.backgroundColor = "green";
  }else if(event.key == 'b'){
    synth.triggerAttackRelease('G2', '2n')
    document.body.style.backgroundColor = "blue";
  }else if(event.key == 'n'){
    synth.triggerAttackRelease('A2', '2n')
    document.body.style.backgroundColor = "purple";
  }else if(event.key == 'm'){
    synth.triggerAttackRelease('B2', '2n')
    document.body.style.backgroundColor = "brown";
  }else if(event.key == ','){
    synth.triggerAttackRelease('C3', '2n')
    document.body.style.backgroundColor = "black";
  }
})


let interactable = document.getElementById("interactable")
let player = document.getElementById("player")
