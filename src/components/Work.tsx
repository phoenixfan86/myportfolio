
import ProjectCard from './ProjectCard'

const works = [
  {
    imgSrc: './img/project/coffee_shop.png',
    title: 'Coffee shop app',
    tags: ['React', 'NextJS', 'CSS', 'Markdown'],
    projectLink: 'https://coffee-shop-v2.vercel.app/'
  },
  {
    imgSrc: './img/project/car-rent-flexicar.png',
    title: 'Car rent app',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/car-rent-flexicar/'
  },
  {
    imgSrc: './img/project/Mntn_1.png',
    title: 'MNTN landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/MNTN-landing/'
  },
  {
    imgSrc: './img/project/fsbox.png',
    title: 'FSBox - Моди для ігор',
    tags: ['React', 'TailwindCSS', 'NextJS', 'Markdown'],
    projectLink: 'https://fsbox.pp.ua/'
  },
  {
    imgSrc: './img/project/what_to_buy.png',
    title: 'What to buy app',
    tags: ['React', 'CSS', 'NodeJS', 'MongoDB'],
    projectLink: 'https://task-manager-v10.vercel.app/'
  },
  {
    imgSrc: './img/project/Alivio_1.png',
    title: 'Alivio landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Alivio/'
  },
  {
    imgSrc: './img/project/pizzahouse_3.png',
    title: 'PizzaHouse',
    tags: ['HTML', 'TailwindCSS', 'React', 'TypeScript', 'MongoDB'],
    projectLink: 'https://mypizzahouse.vercel.app/'
  },
  {
    imgSrc: './img/project/Positivus_1.png',
    title: 'Posotivus landing page',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Positivus_landing/'
  },
  {
    imgSrc: './img/project/Ticket-generator_1.png',
    title: 'Conference ticket generator',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://phoenixfan86.github.io/Conference-ticket-generator/'
  },
  {
    imgSrc: './img/project/Portfolio_1.png',
    title: 'myPortfolio Page',
    tags: ['HTML', 'CSS', 'React', 'TypeScript'],
    projectLink: 'https://phoenixfan86.github.io/myportfolio/'
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
