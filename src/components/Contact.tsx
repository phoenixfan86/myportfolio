import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import React from "react"


const socialLinks = [
  {
    href: 'https://github.com/phoenixfan86',
    icon: faGithub,
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/rostislav-baziv',
    icon: faLinkedin,
    alt: 'Linkedin'
  }
]

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col lg:max-w-[40ch]">
          <h2 className="headline-2">
            Contact with me
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Contact me to discuss your project. I'm open to collaboration and new opportunities!
          </p>
          <div className="flex items-center mt-auto gap-2">
            {socialLinks.map(({ href, icon }, key) => (
              <a key={key} href={href} target="_blank" className="size-12 grid place-items-center ring-2 ring-inset ring-zinc-50/5 rounded-lg transition-[background-color, color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-100/50">
                <FontAwesomeIcon icon={icon} className="text-4xl grayscale-75 hover:grayscale-0" />
              </a>
            ))}
          </div>
        </div>
        <form action="https://getform.io/f/adrndxza" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" name="name" id="name" autoComplete="" required placeholder="Enter your name" className="text-field" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label">Email</label>
              <input type="email" name="email" id="email" autoComplete="" required placeholder="Enter your email" className="text-field" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label">Message</label>
            <textarea name="message" id="message" placeholder="Hello" required className="text-field resize-y min-h-32 max-h-80"></textarea>
          </div>
          <div className="w-full flex">
            <button type="submit" className="btn btn-primary !max-w-full w-full justify-center">
              Sumbit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
