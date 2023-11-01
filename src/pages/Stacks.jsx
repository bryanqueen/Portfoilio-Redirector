import { Fade } from 'react-reveal';
import Navbar from '../components/Navbar';
import StackCards from '../components/StackCards';
import {
    JavaScript,
    CSharp,
    VsCode,
    HTML,
    CSS,
    Git,
    Tailwind,
    MongoDb,
    ReactLogo,
    NextJs,
    Node,
    AWS,
    Docker
} from '../asset/Images/index'

const Technologies = [
    {name: 'JavaScript', image: JavaScript, type: 'Programming Language'},
    {name: 'C#', image: CSharp, type: 'Programming Language'},
    {name: 'VS Code', image: VsCode, type: 'IDE'},
    {name: 'Git', image: Git, type: 'VCS'},
    {name: 'HTML', image: HTML, type: 'Markup Language'},
    {name: 'CSS', image: CSS, type: 'Stylesheet'},
    {name: 'TailwindCSS', image: Tailwind, type: 'Styling FrameWork'},
    {name: 'MongoDB', image: MongoDb, type: 'NoSQL Database'},
    {name: 'React', image: ReactLogo, type: 'UI Library'},
    {name: 'Next Js', image: NextJs, type: 'UI Framework'},
    {name: 'Node Js', image: Node, type: 'Runtime Environment'},
    {name: 'AWS', image: AWS, type: 'Cloud Computing'},
    {name: 'Docker', image: Docker, type: 'Containerization'},
   

]

function Stacks(props) {
    return (
        <div>
            <Navbar/>
            <div className='bg-[rgb(16,16,26)] min-h-screen px-5 pt-6 pb-20'>
                <Fade bottom>
                <h1 className='text-3xl text-white font-semibold py-4'>My Tech Stacks and Tools</h1>
                <p className='text-xl text-white leading-8 py-4'>The following listed below are my stacks and tools for creating exceptional applications</p>
                </Fade>
                <Fade bottom>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 md:px-6'>
                   {Technologies.map((stackItem, idx) => (
                    <StackCards key={idx} stackImage={stackItem.image} stackName={stackItem.name} stackType={stackItem.type} />
                   ))}
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Stacks;