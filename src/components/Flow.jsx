/* eslint-disable react/no-unescaped-entities */
import image from '../assets/illustration-flowing-conversation.svg'

const Flow = () => {
    return ( 
        <div className="lg:mt-0 mt-20">
            <div className="lg:flex lg:justify-between lg:px-24 items-center">
                <div className="flex-shrink-0 flex-nowrap">
                    <img className="lg:w-auto lg:h-[50vh] w-10/12 h-auto ml-auto mr-auto lg:pb-0 pb-8" src={image}/>
                </div>

                <div className="lg:w-6/12 w-10/12 text-center lg:text-left lg:pr-10 grid lg:gap-6 gap-3 ml-auto mr-auto  ">
                    <h1 className="font-bold font-secondary lg:text-[2rem] text-[1.5rem] text-VeryDarkCyan ">Flowing Conversations</h1>
                    <p className="font-primary font-[500] text-VeryDarkCyan text-opacity-90">You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                        just-in-time loading for a more natural flow.
                    </p>
                </div>
            </div>

        </div>
        
     );
}
 
export default Flow;