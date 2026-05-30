import { About } from '../sections/About.jsx';
import { Blog } from '../sections/Blog.jsx';
import { Contact } from '../sections/Contact.jsx';
import { Experience } from '../sections/Experience.jsx';
import { Hero } from '../sections/Hero.jsx';
import { Projects } from '../sections/Projects.jsx';
import { Skills } from '../sections/Skills.jsx';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}
