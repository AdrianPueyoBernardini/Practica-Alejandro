import Header from './Header.jsx'
import Section from './Section.jsx'
import FirstBar from './FirstBar.jsx'
import PlayBar from './PlayBar.jsx'
import CheckSection from './CheckSection.jsx'
import { NameSection, EmojiSection, BottomNav } from './ExtraSections.jsx'

export default function App() {
  return (
    <main className="app-shell">
      <Header />
      <Section />
      <FirstBar />
      <PlayBar />
      <CheckSection />
      <NameSection />
      <EmojiSection />
      <BottomNav />
    </main>
  )
}
