
import { faHtml5, faCss3Alt, faJs, faFigma, faReact, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './SkillCard'
import { faWind } from '@fortawesome/free-solid-svg-icons';

const skillsItem = [
  {
    icon: faHtml5,
    label: 'HTML',
    desc: 'Markcup',
    color: '#e34f26'
  },
  {
    icon: faCss3Alt,
    label: 'CSS',
    desc: 'User interface',
    color: '#1572B6'
  },
  {
    icon: faWind,
    label: 'TailwindCSS',
    desc: 'User interface',
    color: '#1572B6'
  },
  {
    icon: faJs,
    label: 'JavaScript',
    desc: 'Interaction',
    color: '#F7DF1E'
  },
  {
    icon: faReact,
    label: 'React',
    desc: 'Component-Based UI',
    color: '#1572B6'
  },
  {
    icon: faFigma,
    label: 'Figma',
    desc: 'Design tool',
    color: '#A259FF'
  },
  {
    icon: faGitAlt,
    label: 'Git',
    desc: 'Version control system',
    color: '#F05033'
  },
  {
    icon: faGithub,
    label: 'GitHub',
    desc: 'Repository hosting',
    color: '#FFF'
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2">
          Essential tools i use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          All the technologies and tools I use to create exceptional, high-performance websites and applications
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillsItem.map(({ icon, label, desc, color }, key) =>
            (
              <SkillCard icon={icon} key={key} label={label} desc={desc} color={color} />

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills