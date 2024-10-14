import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Hello World</h2>
          <p className="text-lg text-foreground">
            Newspeak House is an independent residential college founded in 2015 to study, nurture and inspire emerging communities of practice across civil society and the public sector in the UK.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to the 2024 Cohort</h2>
          <p className="text-lg text-foreground">
            We are thrilled to welcome our latest cohort of fellowship candidates for the 2024 program. They bring a wealth of experience and deep expertise, from space law and digital identity systems to parliamentary advocacy and AI-powered campaigning.
          </p>
          <a href="https://2024.newspeak.house" className="mt-4 inline-block bg-accent text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors">
            Learn More
          </a>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4 text-primary">Events</h2>
          <p className="text-lg text-foreground mb-4">
            As part of our research we offer our spaces for civic communities of practice to convene. Since opening in 2015 we have hosted over a thousand events, including lectures, meetups, hackathons, conferences, unconferences, workshops, roundtables, screenings, fundraisers, launches, and exhibitions.
          </p>
          <a href="#" className="inline-block bg-accent text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors">
            View Upcoming Events
          </a>
        </section>
      </main>
      <footer className="bg-primary text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>133-135 Bethnal Green Road • <a href="mailto:[email protected]" className="underline">[email protected]</a> • <a href="https://twitter.com/nwspk" className="underline">@nwspk</a></p>
        </div>
      </footer>
    </div>
  );
}
