import './App.css'

function App() {

  let playC, 
      oscillatorC,
      playD,
      oscillatorD,
      playE,
      oscillatorE,
      playF,
      oscillatorF,
      playG,
      oscillatorG,
      playA,
      oscillatorA,
      playB,
      oscillatorB,
      randInt

  let oscC = {
    type: "triangle",
    frequency: 262,
    playing: false
  }

  let oscD = {
    type: "triangle",
    frequency: 293.665,
    playing: false
  }

  let oscE = {
    type: "triangle",
    frequency: 329.63,
    playing: false
  }

  let oscF = {
    type: "triangle",
    frequency: 349.23,
    playing: false
  }

  let oscG = {
    type: "triangle",
    frequency: 392,
    playing: false
  }

  let oscA = {
    type: "triangle",
    frequency: 440,
    playing: false
  }

  let oscB = {
    type: "triangle",
    frequency: 493.88,
    playing: false
  }

  const audioContext = new AudioContext()

  window.onload = function(){
    playC = function(){
      if(oscC.playing){
        oscillatorC.stop()
        oscC.playing = false
      } else{
        oscillatorC = audioContext.createOscillator()
        oscillatorC.type = oscC.type
        oscillatorC.frequency.setValueAtTime(oscC.frequency, audioContext.currentTime)
        oscillatorC.connect(audioContext.destination)
        oscillatorC.start()
        oscC.playing = true
      }
    }

    playD = function(){
      if(oscD.playing){
        oscillatorD.stop()
        oscD.playing = false
      } else{
        oscillatorD = audioContext.createOscillator()
        oscillatorD.type = oscD.type
        oscillatorD.frequency.setValueAtTime(oscD.frequency, audioContext.currentTime)
        oscillatorD.connect(audioContext.destination)
        oscillatorD.start()
        oscD.playing = true
      }
    }

    playE = function(){
      if(oscE.playing){
        oscillatorE.stop()
        oscE.playing = false
      } else{
        oscillatorE = audioContext.createOscillator()
        oscillatorE.type = oscE.type
        oscillatorE.frequency.setValueAtTime(oscE.frequency, audioContext.currentTime)
        oscillatorE.connect(audioContext.destination)
        oscillatorE.start()
        oscE.playing = true
      }
    }

    playF = function(){
      if(oscF.playing){
        oscillatorF.stop()
        oscF.playing = false
      } else{
        oscillatorF = audioContext.createOscillator()
        oscillatorF.type = oscF.type
        oscillatorF.frequency.setValueAtTime(oscF.frequency, audioContext.currentTime)
        oscillatorF.connect(audioContext.destination)
        oscillatorF.start()
        oscF.playing = true
      }
    }

    playG = function(){
      if(oscG.playing){
        oscillatorG.stop()
        oscG.playing = false
      } else{
        oscillatorG = audioContext.createOscillator()
        oscillatorG.type = oscG.type
        oscillatorG.frequency.setValueAtTime(oscG.frequency, audioContext.currentTime)
        oscillatorG.connect(audioContext.destination)
        oscillatorG.start()
        oscG.playing = true
      }
    }

    playA = function(){
      if(oscA.playing){
        oscillatorA.stop()
        oscA.playing = false
      } else{
        oscillatorA = audioContext.createOscillator()
        oscillatorA.type = oscA.type
        oscillatorA.frequency.setValueAtTime(oscA.frequency, audioContext.currentTime)
        oscillatorA.connect(audioContext.destination)
        oscillatorA.start()
        oscA.playing = true
      }
    }

    playB = function(){
      if(oscB.playing){
        oscillatorB.stop()
        oscB.playing = false
      } else{
        oscillatorB = audioContext.createOscillator()
        oscillatorB.type = oscB.type
        oscillatorB.frequency.setValueAtTime(oscB.frequency, audioContext.currentTime)
        oscillatorB.connect(audioContext.destination)
        oscillatorB.start()
        oscB.playing = true
      }
    }

    function getRandInt(max) {
      let oldRandInt = randInt
      randInt = Math.floor(Math.random() * max)
      if(randInt === oldRandInt){
        getRandInt(7)
      }
    }

    function stopAll(){
      if(oscC.playing){
        playC()
      }
      if(oscD.playing){
        playD()
      }
      if(oscE.playing){
        playE()
      }
      if(oscF.playing){
        playF()
      }
      if(oscG.playing){
        playG()
      }
      if(oscA.playing){
        playA()
      }
      if(oscB.playing){
        playB()
      }
    }

    document.getElementById('button').addEventListener('click', () => {
      getRandInt(7)
      if(randInt === 0){
        stopAll()
        playC()
      } else if(randInt === 1){
        stopAll()
        playD()
      } else if(randInt === 2){
        stopAll()
        playE()
      } else if(randInt === 3){
        stopAll()
        playF()
      } else if(randInt === 4){
        stopAll()
        playG()
      } else if(randInt === 5){
        stopAll()
        playA()
      } else if(randInt === 6){
        stopAll()
        playB()
      }
    })
  }

  return (
    <div className="App">
      <button id="button">Play Random Pitch</button>
    </div>
  )
}

export default App