
import ProjectCard from './ProjectCard'

const works = [
  {
    imgSrc: '/img/project/Mntn_1.png',
    title: 'MNTN landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/MNTN-landing/'
  },
  {
    imgSrc: '/img/project/Alivio_1.png',
    title: 'Alivio landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Alivio/'
  },
  {
    imgSrc: '/img/project/Positivus_1.png',
    title: 'Posotivus landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Positivus_landing/'
  },
  {
    imgSrc: '/img/project/Ticket-generator_1.png',
    title: 'Conference ticket generator',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Conference-ticket-generator/'
  }
]

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
          My portfolio
        </h2>
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
