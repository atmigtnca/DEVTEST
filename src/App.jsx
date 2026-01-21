import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center'
    }}>
      <h1>React + Vite</h1>
      <div style={{ margin: '2rem 0' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          Count: {count}
        </button>
      </div>
      <p style={{ color: '#666' }}>
        빌드가 정상적으로 작동합니다!
      </p>
    </div>
  )
}

export default App
