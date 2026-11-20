import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Section from './Section.jsx'
import FirstBar from './FirstBar.jsx'
import PlayBar from './PlayBar.jsx'
import CheckSection from './CheckSection.jsx'
import { NameSection, EmojiSection, BottomNav } from './ExtraSections.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Section />
    <FirstBar />
    <PlayBar />
    <CheckSection />
    <NameSection />
    <EmojiSection />
    <BottomNav />
  </StrictMode>,
)
