import message from '../assets/icon-messages.svg'
import communities from '../assets/icon-communities.svg'

const Members = () => {
    return ( 
        <div>
            <div className="text-VeryDarkCyan lg:flex lg:justify-evenly grid justify-center gap-20 items-end">
                <div className="grid">
                    <img src={communities}/>
                    <p className="font-semibold text-[5rem] font-secondary">1.4k+</p>
                    <p className="text-xl font-[400] text-VeryDarkCyan font-primary text-opacity-40">Communities Formed</p>
                </div>

                <div className="grid">
                    <img src={message}/>
                    <p className="font-semibold text-[5rem] font-secondary">2.7m+</p>
                    <p className="lg:block grid text-xl font-[400] text-VeryDarkCyan font-primary text-opacity-40 text-center">
                        <span>Messages</span>
                        <span>Sent</span> 
                    </p>
                </div>

            </div>
        </div>

     );
}
 
export default Members;