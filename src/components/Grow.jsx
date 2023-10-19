import top from '../assets/bg-section-top-desktop-1.svg'
import bottom from '../assets/bg-section-bottom-desktop-1.svg'
import mobiletop from '../assets/bg-section-top-mobile-1.svg'
import mobilebottom from '../assets/bg-section-bottom-mobile-1.svg'
import image from '../assets/illustration-grow-together.svg'

const Grow = () => {
    return ( 
        <div>
            <div className="lg:my-20">
                <img className="lg:block hidden w-full" src={top}/>
                <img className="lg:hidden block w-full" src={mobiletop}/>
                <div className="bg-VeryPaleBlue text-VeryDarkCyan">
                    <div className="lg:flex justify-between  items-center lg:px-24 py-10">
                        <img className="w-10/12 h-auto ml-auto mr-auto lg:hidden block pb-8" src={image}/>

                        <div className="grid lg:w-5/12 w-10/12 ml-auto mr-auto text-center lg:text-left lg:gap-6 gap-3">
                            <h1 className="font-bold font-secondary lg:text-[2rem]  text-[1.5rem] ">Grow Together</h1>
                            <p className="font-primary font-[500] text-VeryDarkCyan text-opacity-90">Generate meaningful discussions with your audience and build a strong, loyal community. 
                                Think of the insightful conversations you miss out on with a feedback form. 
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex-no-wrap hidden lg:block">
                            <img className="w-auto h-[60vh]" src={image}/>
                        </div>
                    </div>
                    
                </div>
                <img className="lg:block hidden w-full" src={bottom}/>
                <img className="lg:hidden block w-full"  src={mobilebottom}/>

            </div>
        </div>
     );
}
 
export default Grow;