/* eslint-disable react/no-unescaped-entities */
import top from '../assets/bg-section-top-desktop-2.svg'
import bottom from '../assets/bg-section-bottom-desktop-2.svg'
import mobiletop from '../assets/bg-section-top-mobile-2.svg'
import mobilebottom from '../assets/bg-section-bottom-mobile-2.svg'
import image from '../assets/illustration-your-users.svg'

const Users = () => {
    return ( 
        <div className="py-20">
            <div>
                <img className="lg:block hidden w-full" src={top}/>
                <img className="block lg:hidden w-full" src={mobiletop}/>
                <div className="py-10 lg:px-24 bg-VeryPaleBlue">
                    <img className="w-10/12 h-auto ml-auto mr-auto pb-8 lg:hidden block" src={image}/>

                    <div className="lg:flex lg:justify-between items-center">
                        <div className="lg:w-6/12 w-10/12 text-center lg:text-left ml-auto mr-auto lg:pr-10 grid lg:gap-6 gap-3 ">
                            <h1 className="font-bold font-secondary lg:text-[2rem] text-[1.5rem] text-VeryDarkCyan ">Your Users</h1>
                            <p className="font-primary font-[500] text-VeryDarkCyan text-opacity-90">It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                                once signed in to your app, your users can start chatting immediately.
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex-nowrap lg:block hidden">
                            <img className="w-auto h-[50vh]" src={image}/>
                        </div>
                    </div>
                    
                </div>
                <img className="lg:block hidden w-full" src={bottom}/>
                <img className="block lg:hidden w-full" src={mobilebottom}/>
            </div>
        </div>
     );
}
 
export default Users;