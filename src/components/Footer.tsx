import { ButtonPrimary } from "./Button"

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Work',
    href: '#work'
  }
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/phoenixfan86'
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/rostislav-baziv'
  }
]

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together!</h2>

            <ButtonPrimary href="mailto:phoenixfan86@gmail.com" label="Send me a mail" icon="chevron_right" />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} className="footer-link">
                    {label}
                  </a>
                </li>
              ))}
            </div>
            <div>
              <p className="mb-2">Socials</p>
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} target="_blank" className="footer-link">
                    {label}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/public/img/Logo_2.png" width={40} height={40} alt="Logo" className="" />
          </a>
          <p className="text-zinc-200 text-sm">&copy; 2025 <span className="text-zinc-500">phoenixfan86</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer