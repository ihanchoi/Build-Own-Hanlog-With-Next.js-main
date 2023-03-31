import Title from '../components/Title'
import AboutProfile from '../components/AboutProfile'
import Container from '../components/Container'
import metadata from '../data/metadata'
import { NextSeo } from 'next-seo'

function Aboutpage() {
    return (
    <Container>
        <NextSeo
        title="About Me" 
        canonical={`${metadata.meta.url}/about`}
        openGraph={{ url: `${metadata.meta.url}/about` }}
        />
        <Title title="About Me" des="Hello, stranger 👋" />
        <AboutProfile />
    </Container>
    )
}

export default Aboutpage 