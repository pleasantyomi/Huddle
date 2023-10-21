import Flow from '../components/Flow';
import Grow from '../components/Grow';
import Hero from '../components/Hero'
import Image from '../components/Image'
import Members from '../components/Members';
import Question from '../components/Question';
import Users from '../components/Users';

const Container = () => {
    return ( 
        <div className="overflow-x-hidden">
            <Hero/>
            <Image/>
            <Members/>
            <Grow/>
            <Flow/>
            <Users/>
            <Question/>
            
        </div>
     );
}
 
export default Container;