import './index.css'

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="flex">
        <span>
          <h1>Width</h1>
          <input className="" type="number" placeholder="800"/>
        </span>
        <span>
          <h1>Height</h1>
          <input className="" type="number" placeholder="400"/>
        </span>
      </div>
    </div>
  )
}

export default App
