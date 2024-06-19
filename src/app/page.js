import Script from 'next/script'
import TeamComponent from '../components/script';

export default function Home() {
  return (
    <main className="">
      <h1 class="title font-bold text-4xl">Team Cards</h1>
      <TeamComponent />
    </main>
  );
}
