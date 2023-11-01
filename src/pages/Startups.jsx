import { Fade } from 'react-reveal';
import Navbar from '../components/Navbar';
import StartupCard from '../components/StartupCard';
import { MetaHomesLogo, FoldaLogo, CroxxLearnLogo } from '../asset/Images';


const StartupList = [
    {name: 'MetaHomes', image: MetaHomesLogo, position: 'CTO / Co-Founder', period: '2022 - present', status: 'Private Beta'},
    {name: 'Folda', image: FoldaLogo, position: 'CTO', period: '2023 - present', status: 'Still Building'},
    {name: 'CroxxLearn', image: CroxxLearnLogo, position: 'CTO / Co-founder', period: '2023 - present', status: 'Still Building'}
]

function Startups(props) {
    return (
        <div>
            <Navbar/>
            <div className='bg-[#10101a] px-5 min-h-screen pt-6'>
                <Fade bottom>
                <h1 className='text-3xl text-white font-semibold py-4'>Startups</h1>
                <p className='text-xl text-white leading-8 py-4'>These are Startups that i have worked for / currently working for as a Software Engineer.</p>
                </Fade>
                <div className='grid lg:grid-cols-3 lg:gap-6 grid-cols-1 gap-3 mx-auto '>
                {StartupList.map((list, idx) => (
                    <StartupCard key={idx} image={list.image} name={list.name} period={list.period} position={list.position} status={list.status}/>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Startups;