import { useState } from 'react'

// Aquí por agilizar meto el resto de componentes

export function NameSection() {
  return (
    <>
    <div className="name-section">
      <button type="button">Alejandro Sanz</button>
    </div>  
    </>

  )
}

export function EmojiSection() {
  const emojis = ['🙂', '😁', '🤠', '😈', '🤖']
  const [isSelected, setIsSelected] = useState(2)

  return (
    <div className="emoji-section" aria-label="Selector de emojis">
      {emojis.map((emoji, index) => (
        <button
          key={emoji}
          type="button"
          onClick={() => setIsSelected(index)}
          className={isSelected === index ? 'emoji-button emoji-button-selected' : 'emoji-button'}
          aria-label={`Emoji ${emoji}`}
          aria-pressed={isSelected === index}
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <button type="button" aria-label="Inicio">🏠</button>
      <button type="button" aria-label="Favoritos">■</button>
      <button type="button" aria-label="Menú">☰</button>
    </nav>
  )
}
