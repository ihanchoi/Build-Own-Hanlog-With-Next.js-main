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
        height={300}
        objectFit="cover"
        />
        <ProfileText>
        새로운 경험을 좋아하는 개발자입니다.
        <br />
        <br />
        최신 트렌드와 명료한 코드를 작성하는 것에 관심이 많고, 현재 프론트엔드에 힘을 쏟고 있습니다.
        <br />
        <br />
        세계여행을 꿈꾸고 있습니다. 
        <br />
        가고 싶은 나라 🌎🌍🌏
        <br />
        <ProfileTextSub>
            Finland, Sweden, Italy, United Kingdom, Australia,
            Austria, Switzerland, France, Japan, Germany, United States
        </ProfileTextSub>
        <br />
        <br />
        <Link href="/resume" passHref>
            <Resume>Resume</Resume>
        </Link>
        </ProfileText>
    </AboutProfileContainer>
    )
}

export default AboutProfile