import './App.css'

function App() {

  let playC, oscillatorC

  let oscC = {
    type: "triangle",
    frequency: 262,
    playing: false
  }

  var audioContext = new AudioContext()

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

    document.getElementById('playC').addEventListener('click', () => {
      playC()
    })
  }

  return (
    <div className="App">
      <button id="playC">play middle C</button>
    </div>
  )
}

export default App