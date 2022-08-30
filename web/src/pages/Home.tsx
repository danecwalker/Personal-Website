import { Component } from "solid-js";
import Nav from "../components/Nav";
import resume from "../files/Dane Walker - Resume.pdf";

const Home: Component = () => {
  return (
    <div>
      <Nav />
      <main class="grid md:grid-cols-[auto,1fr] grid-cols-1 gap-8 max-w-screen-xl w-full h-full min-h-full mx-auto p-8">
        <div class="relative">
          <ul class="gap-2 flex flex-col md:text-left text-center md:justify-start md:items-start justify-center items-center md:sticky md:top-8">
            <li>
              <h4 class="font-extrabold uppercase">Email</h4>
              <p class="text-sm">dane@danecwalker.com</p>
            </li>

            <li>
              <h4 class="font-extrabold uppercase">Linkedin</h4>
              <a
                class="underline underline-offset-2"
                href="https://www.linkedin.com/in/danecwalker/"
              >
                <p class="text-sm">linkedin.com/in/danecwalker</p>
              </a>
            </li>

            <li>
              <h4 class="font-extrabold uppercase">Github</h4>
              <a
                class="underline underline-offset-2"
                href="https://github.com/danecwalker/"
              >
                <p class="text-sm">github.com/danecwalker</p>
              </a>
            </li>
            <li>
              <p class="text-sm">Referees are available upon request.</p>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-8">
          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <div class="inline-block h-fit w-fit md:justify-self-end justify-self-start bg-black text-white px-4 py-2 uppercase font-extrabold shadow-edu">
              Education
            </div>

            <div class="flex flex-col gap-4">
              <div>
                <h3 class="text-xs font-semibold">
                  Feb 2022 - Present | Brisbane, Australia
                </h3>
                <h1 class="font-bold">Queensland University of Technology</h1>
                <h2 class="font-light">
                  Bachelor of Engineering (Honours) in Mechatronics Engineering
                </h2>
              </div>

              <div>
                <h3 class="text-xs font-semibold">
                  Feb 2022 - Present | Brisbane, Australia
                </h3>
                <h1 class="font-bold">Queensland University of Technology</h1>
                <h2 class="font-light">
                  Bachelor of Information Technology in Computer Science
                </h2>
              </div>
            </div>
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <hr class="md:col-start-2 col-start-1" />
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <div class="inline-block h-fit w-fit md:justify-self-end justify-self-start bg-black text-white px-4 py-2 uppercase font-extrabold shadow-exp">
              Experience
            </div>

            <div class="flex flex-col gap-4">
              <div>
                <h3 class="text-xs font-semibold">
                  Jun 2022 - Jul 2022 | Brisbane, Australia
                </h3>
                <h1 class="font-bold">Swyftx</h1>
                <h2 class="font-light italic">Winter Internship</h2>
                <ul class="font-light list-disc mt-2">
                  <li>
                    Part of a team to develop a cryptocurrency subscription
                    bundle application.
                  </li>
                  <li>
                    Led the <strong>backend</strong> team in developing a{" "}
                    <strong>REST API</strong> using <strong>Golang</strong> that
                    communicates with the <strong>Swyftx API</strong> to fetch
                    cryptocurrency information and helped the frontend team
                    interface the <strong>UI</strong> with the{" "}
                    <strong>backend</strong>.
                  </li>
                  <li>
                    Successfully completed the application providing an easier
                    entry into cryptocurrency for less experienced customers.
                  </li>
                  <li>
                    Technologies Used: Golang, MongoDB, Docker, Github, VSCode.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <hr class="md:col-start-2 col-start-1" />
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <div class="inline-block h-fit w-fit md:justify-self-end justify-self-start bg-black text-white px-4 py-2 uppercase font-extrabold shadow-pro">
              Projects
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">Feb 2022</h3>
                <h1 class="font-bold">MNet</h1>
                <a href="https://github.com/danecwalker/MNet">
                  <h2 class="font-light italic">github.com/danecwalker/MNet</h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    Simple feedforward MNIST neural network model build with{" "}
                    <strong>Python</strong> and <strong>PyTorch</strong>.
                  </li>
                  <li>
                    Deployed to <strong>Heroku</strong> using{" "}
                    <strong>Flask</strong> and <strong>Gunicorn</strong>.
                  </li>
                  <li>
                    Technologies Used: PyTorch, Flask, Python, HTML, CSS,
                    Heroku, Github, VSCode.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">Feb 2022</h3>
                <h1 class="font-bold">Crypto Tracking App</h1>
                <a href="https://github.com/danecwalker/CryptoTrackingApp">
                  <h2 class="font-light italic">
                    github.com/danecwalker/CryptoTrackingApp
                  </h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    Cross platform mobile application for tracking the prices of
                    cryptocurrencies. A <strong>React Native</strong> project
                    using <strong>Typescript</strong> that leverages{" "}
                    <strong>Reanimated</strong> and{" "}
                    <strong>WAGMI Charts</strong>.
                  </li>
                  <li>
                    Consumes the <strong>CoinGecko Free API</strong> to fetch
                    information for over 12,000 cryptoassets.
                  </li>
                  <li>
                    Technologies Used: React Native, Typescript, HTML, CSS,
                    Yarn, Github, VSCode.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">Feb 2022</h3>
                <h1 class="font-bold">Assignment Breakdown App</h1>
                <a href="https://github.com/danecwalker/Assignment-Breakdown-App">
                  <h2 class="font-light italic">
                    github.com/danecwalker/Assignment-Breakdown-App
                  </h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    iOS application that helps student manage their assignments.
                    Uses <strong>Swift</strong> for business logic and{" "}
                    <strong>SwiftUI</strong> for the user interface.
                  </li>
                  <li>
                    Based on the Assignment Calculator provided to students by
                    the Queensland University of Technology.
                  </li>
                  <li>Technologies Used: Swift, SwiftUI, Github, XCode.</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">Oct 2021</h3>
                <h1 class="font-bold">Go Auth</h1>
                <a href="https://github.com/danecwalker/GoAuth">
                  <h2 class="font-light italic">
                    github.com/danecwalker/GoAuth
                  </h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    A simple <strong>Golang</strong> implementation of{" "}
                    <strong>JWT</strong> authentication for{" "}
                    <strong>AWS Lambda</strong> functions.
                  </li>
                  <li>
                    Technologies Used: Golang, Amazon Web Services, Github,
                    VSCode.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">May 2021</h3>
                <h1 class="font-bold">File Transfer</h1>
                <a href="https://github.com/danecwalker/FileTransfer">
                  <h2 class="font-light italic">
                    github.com/danecwalker/FileTransfer
                  </h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    A minimal local file transfer website using{" "}
                    <strong>Pug HTML</strong> and <strong>ExpressJS</strong>.
                  </li>
                  <li>Generates QR Codes as a way to share file links.</li>
                  <li>
                    Technologies Used: Pug HTML, ExpressJS, NPM, Node, Github,
                    VSCode.
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">Apr 2021</h3>
                <h1 class="font-bold">Blocky Notes</h1>
                <a href="https://github.com/danecwalker/Block-Based-Notes">
                  <h2 class="font-light italic">
                    github.com/danecwalker/Block-Based-Notes
                  </h2>
                </a>
                <ul class="font-light list-disc mt-2">
                  <li>
                    A <strong>ReactJS</strong> note taking website inspired by
                    Notion.so.
                  </li>
                  <li>
                    Deployed to <strong>Heroku</strong> using{" "}
                    <strong>Node</strong>.
                  </li>
                  <li>
                    Technologies Used: ReactJS, HTML, CSS, Yarn, Heroku, Github,
                    VSCode.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <hr class="md:col-start-2 col-start-1" />
          </section>

          <section class="grid md:grid-cols-[1fr,4fr] grid-cols-1 gap-x-16 gap-y-8">
            <div class="inline-block h-fit w-fit md:justify-self-end justify-self-start bg-black text-white px-4 py-2 uppercase font-extrabold shadow-add">
              Additional
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">
                  Feb 2020 - Present | Scenic Rim, Australia
                </h3>
                <h1 class="font-bold">Downer Group</h1>
                <h2 class="font-light italic">Lifeguard and Gym Attendant</h2>
                <ul class="font-light list-disc mt-2">
                  <li>Baseline Security Clearance</li>
                  <li>HTLAID001 Provide Cardiopulmonary Resuscitation.</li>
                  <li>PUAEME001 Provide Emergency Care.</li>
                  <li>PUAEME003 Provide Administer Oxygen in an Emergency.</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">
                  Feb 2019 - Oct 2019 | Gold Coast, Australia
                </h3>
                <h1 class="font-bold">Griffith University</h1>
                <h2 class="font-light italic">1000ENG Griffith Engineering</h2>
                <ul class="font-light list-disc mt-2">
                  <li>
                    Tasked to design a product that would solve a real world
                    problem.
                  </li>
                  <li>
                    Led a team where we designed a powered exoskeleton for
                    wheelchair users to regain the ability to walk.
                  </li>
                  <li>
                    Researched and designed exoskeletons and wheelchairs to
                    identify potential issues in the design.
                  </li>
                  <li>GUESTS Achiever</li>
                  <li>GUESTS Member</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col gap-4 md:col-start-2 col-start-1">
              <div>
                <h3 class="text-xs font-semibold">
                  May 2018 | Gold Coast, Australia
                </h3>
                <h1 class="font-bold">Griffith University</h1>
                <h2 class="font-light italic">
                  GriffithBUSINESS Ambassadors Program
                </h2>
                <ul class="font-light list-disc mt-2">
                  <li>
                    Attended a business workshop where we were tasked to develop
                    a business idea.
                  </li>
                  <li>
                    Part of a team where we developed and researched app ideas
                    and potential stakeholders.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer class="max-w-screen-xl mx-auto flex justify-center items-center p-16">
        <a
          href={resume}
          download="Dane Walker - Resume"
          class="flex flex-row justify-center items-center gap-4 py-4 px-6 bg-black text-white border border-white rounded-2xl hover:rounded-none hover:bg-white hover:text-black hover:border-black transition-all duration-200"
        >
          <h1 class="text-2xl">Download Resume</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-download animate-bounce"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </footer>
    </div>
  );
};

export default Home;
