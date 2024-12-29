import Hero from "@/components/Hero"
import Services_Brief from "@/components/Services_Brief"
import Reviews from "@/components/Reviews"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <Services_Brief/>
      <Reviews/>
      <Contact/>
    </main>
  );
}

