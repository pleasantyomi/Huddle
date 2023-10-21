import logo from '../assets/logo.svg'

const Header = () => {
    return ( 
        <div>
            <div className="flex justify-between items-center py-10 lg:px-14 px-5">
                <div>
                    <img className="lg:h-8 h-6 w-auto" src={logo}/>
                </div>

                <div>
                    <button className="text-LightPink hover:text-Pink bg-transparent border border-LightPink hover:border-Pink rounded-full transition-all delay-100 ease-in text-md px-6 py-1 ">Try it free</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Header;