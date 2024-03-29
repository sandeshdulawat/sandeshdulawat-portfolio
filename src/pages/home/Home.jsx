import {} from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero section/HeroSection'
import Projects from '../../components/projects/Projects'
import About from '../../components/about/About'
// import Education from '../../components/education/Education'
// import Contact from '../../components/contact/Contact'


function Home() {
  return (
    <Layout>
        <HeroSection />
        <About />
        {/* <Education /> */}
        <Projects />
        {/* <Contact /> */}
    </Layout>
  )
}

export default Home