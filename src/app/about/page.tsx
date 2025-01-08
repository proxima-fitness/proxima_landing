import { CTA } from "@/components";
import { jack, jack_jacked } from "public";

export const metadata = {
    title: "About Us | Proxima Fitness",
    description: "Learn more about Proxima Fitness and our mission to empower fitness enthusiasts with AI-driven workout solutions.",
  };

  export default function AboutPage() {
    return (
      <main className="min-h-screen px-4 py-10 bg-gray-100">
        <h1 className="text-5xl pl-28 font-bold text-gray-900 mb-6 text-left">
            About Us
        </h1>
        <section className="mt-10 flex flex-row items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <div className="p-4 text-center">
            <div className="h-[full] w-[full]">
              <img src={ (jack as any).src } alt="Program Creator Image" className="rounded-lg relative w-full h-full "/>
            </div>
            <h3 className="text-lg font-bold mt-4">Jack Hanlon</h3>
            <p className="text-sm text-gray-600">Founder & Developer</p>
            </div>
            <div className="p-4 flex justify-start items-center flex-col">
              <div className="h-[350px] w-[300px] mx-auto relative overflow-hidden">
              <img src={ (jack_jacked as any).src } alt="Program Creator Image" className="rounded-lg absolute inset-0 w-full h-full object-cover object-top"/>
              </div>
              <h3 className="text-lg font-bold mt-4">My 3 year transformation</h3>
            <p className="text-sm text-gray-600 max-w-[250px] text-center">How I went from 170lbs, skinny fat and unhealthy to 200lbs, in shape, feeling amazing. Read my story below!</p>
              </div>
          </div>
        </section>
        <section className="p-8">
          <p className="text-lg font-bold text-gray-700 leading-8">
          Our Story: From Setbacks to Strength
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-4">
            In 2020, <span className="font-bold italic">my journey to fitness</span> started under less-than-ideal circumstances. I was in a tough spot - <span className="font-bold italic">recovering from a breakup, feeling skinny fat, and unhappy</span> with how I looked and felt. My energy was low, my confidence was lower, and I knew <span className="font-bold italic">something had to change</span>.
          </p>

          {/* <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Custom workout plans tailored to your needs.</li>
            <li>Easy-to-follow exercise directories and GIF guides.</li>
            <li>Detailed tracking to monitor your fitness journey.</li>
          </ul> */}

          <p className="text-lg text-gray-700 leading-8 mt-4">
          I took my first step toward transformation by <span className="font-bold italic">hiring a personal trainer</span>. It was an investment, and while I learned a lot, I found myself <span className="font-bold italic">yearning for more</span> advanced exercises and methods. I dove into the vast library of YouTube fitness channels, soaking up the expertise of bodybuilders and fitness influencers. Slowly but surely, I started building muscle, learning to control my nutrition, and shedding fat.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          When my career began in 2021, <span className="font-bold italic">life became busier</span>. The demands of work meant less time for the gym, and while I stayed consistent, I found myself <span className="font-bold italic">hitting a plateau</span>. Progress slowed, and I started to <span className="font-bold italic">feel stuck</span> - something I knew many people experience when balancing fitness with real-life responsibilities.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          In 2022, a heavy squatting session led to a <span className="font-bold italic">knee injury: a torn meniscus</span>. The injury was a significant setback, both physically and mentally. I lost muscle mass in my legs and felt demotivated about training. The gym, which had been my sanctuary, became a source of frustration.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          But <span className="font-bold italic">every setback is an opportunity for a comeback</span>. In 2023, <span className="font-bold italic">I channeled my passion for fitness</span> and my experiences into something bigger - <span className="font-bold italic">Proxima Fitness</span>. I wanted to create a platform that would help intermediate lifters, like myself, push through plateaus, manage the challenges of work-life balance, and continue progressing even when life throws curveballs.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          Fast forward to 2025, and <span className="font-bold italic">Proxima Fitness has officially launched</span>. As I prepare for <span className="font-bold italic">knee surgery</span>, I’m excited to recover and rebuild with the very tools I’ve helped create. Proxima isn’t just a product; it’s the culmination of years of hard work, learning, and overcoming obstacles.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          This journey has been about <span className="font-bold italic">more than just getting jacked - it’s been about resilience, adaptation, and sharing the lessons I’ve learned with others</span> who are ready to <span className="font-bold italic">transform their own lives</span>.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
          <span className="font-bold italic">Let’s crush our goals together.</span> 💪
          </p>
          <CTA />
        </section>


      </main>
    );
  }
