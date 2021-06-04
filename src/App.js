import './App.css'

function App() {

  let playC, oscillatorC

  let oscC = {
    type: "triangle",
    frequency: 262,
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
  }

  return (
    <div className="App">
      <h1>sanity check</h1>
    </div>
  )
}

export default App