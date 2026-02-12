'use client'

import { useState } from 'react'
import { useChangeElements } from './hooks/changeElements'

export default function Page() {
  const { handleButtonNo, handleButtonYes, textP, image, title, showButtons } = useChangeElements()

  const [scale, setScale] = useState(1)

  // ✅ JSX PURO
  const [stage, setStage] = useState('intro')

  const handleNoClick = () => {
    handleButtonNo()
    setScale(prev => Math.max(prev * 0.85, 0.6))
  }

  const handleYesClick = () => {
    handleButtonYes()
    setStage('card')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-4">

      {stage === 'intro' && (
        <div className="valentines-day" onClick={() => setStage('question')}>
          <div className="envelope"></div>
          <div className="heart"></div>
          <div className="text">¡FELIZ DÍA DE<br />SAN VALENTÍN!</div>
          <div className="front"></div>
        </div>
      )}

      {stage === 'question' && (
        <div className="flex max-w-md w-full flex-col items-center gap-8 rounded-3xl bg-white/60 p-8 shadow-2xl backdrop-blur-md">

          <h1 className="text-center text-4xl font-extrabold text-[#321b1f]">
            {title}
          </h1>

          <img src={image} className="h-64 w-64 object-cover rounded-2xl" />

          <p className="text-center text-xl text-pink-800">
            {textP}
          </p>

          {showButtons && (
            <section className="flex gap-6">
              <button onClick={handleYesClick} className="rounded-full bg-pink-500 px-6 py-2 text-white">
                Sí
              </button>

              <button
                onClick={handleNoClick}
                style={{ transform: `scale(${scale})` }}
                className="rounded-full border px-6 py-2"
              >
                No
              </button>
            </section>
          )}
        </div>
      )}

      {stage === 'card' && (
        <div id="card">
          <div className="side one">
            <i className="fas fa-heart"></i>
          </div>

          <div className="side two">
            <h2>🌻🌹🌼</h2>
            <p>Te amo mi corazón</p>
            <p>
              Espero te haya gustado esta sorpresa, aunque sea algo sencilla,
              lo hice con mucho cariño para ti. Eres lo más especial que tengo
              y nunca de los nunca quiero perderte.
            </p>
            <p>¡Feliz San Valentín!</p>
            <p>
              Besos mi vida.<br />
              A&E
            </p>
          </div>
        </div>
      )}

    </main>
  )
}
