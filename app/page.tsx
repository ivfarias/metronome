import Metronome from '@/components/Metronome'

export const metadata = {
  title: 'Training Metronome',
  description: 'A customizable metronome for music practice and training',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <Metronome />
    </main>
  )
}
