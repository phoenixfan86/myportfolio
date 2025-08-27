
const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Year of experience',
    number: 2
  }
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rostislav, young and ambitious Front-End developer with experience in creating responsive websites. I am proficient in React, HTML, JavaScript, CSS, Tailwind CSS, and the basics of NextJS. I understand REST API and know how to work with Firebase and MongoDB. I am open to new challenges and constantly improve my skills. My goal is to create products that will be useful for users.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
            <img src="./img/ava1_1.png" alt="logo" width={30} height={30} className="rounded-full ml-auto md:size-[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
