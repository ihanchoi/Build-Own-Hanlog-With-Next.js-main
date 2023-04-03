import Image from 'next/image'
import Link from 'next/link'
import { AboutProfileContainer, ProfileText, ProfileTextSub, Resume } from './AboutProfile.style'

const AboutProfile = () => {
    return (
    <AboutProfileContainer>
        <Image
        src="/about/about.jpg"
        className="round-image"
        alt="ihanchoi"
        width={300}
        height={310}
        objectFit="cover"
        />
        
        <ProfileText>
        <p>
        <b>새로운 경험</b>을 좋아하는 개발자입니다.
        <br />
        <br />
        최신 트렌드와 명료한 코드를 작성하는 것에 관심이 많고, 현재 <b>프론트엔드</b>에 힘을 쏟고 있습니다.
        <br />
        <br />
        <b>세계여행</b>을 꿈꾸고 있습니다. 🌎🌍🌏
        <br />
        <br />
        <ProfileTextSub><i>
            → Finland, Sweden, Italy, United Kingdom, Australia,
            Austria, Switzerland, France, Japan, Germany, United States
            </i></ProfileTextSub>
        </p>
        <br />
        <Link href="/resume" passHref>
            <Resume>👀 This is my resume 💻</Resume>
        </Link>
        </ProfileText>
        
    </AboutProfileContainer>
    )
}

export default AboutProfile