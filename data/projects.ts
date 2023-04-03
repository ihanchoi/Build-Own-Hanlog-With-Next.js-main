import { Project } from '../lib/types'

const projects: Project[] = [  // 프로젝트 리스트 추가 
    {
    title: '💻 hanlog.dev',
    description: 'My personal website written with Next.js, MDX, Emotion, Vercel',
    url: 'https://github.com/ihanchoi/blog-han.dev/',
    image: '/projects/cat.gif',
    },

    {
    title: '🌊 PaDo: Education application',
    description: '학생, 교육자를 위한 자기주도학습 어플리케이션',
    url: 'https://youtu.be/2LjeGA071xE',
    image: '/projects/dog.gif',
    },

    {
    title: '💊 Smart Pill Dispenser',
    description: '환자와 의료진을 위한 스마트 디스펜서',
    url: 'https://youtu.be/2LjeGA071xE',
    image: '/projects/penguin.gif',
    },

    {
    title: '🍾 Soju Study',
    description: 'Frontend development challenge',
    url: 'https://youtu.be/9qRCARM_LfE',
    image: '/projects/otter.gif',
    },
]

export default projects