const Hero = () => {
    return ( 
        <div>
            <div className="font-primary text-VeryDarkCyan lg:pt-[4.5rem] pt-[3rem] px-2">
                <h1 className="font-bold text-center lg:text-[3rem] text-[2rem]  pb-[1rem] font-secondary"> 
                   Build The Community Your Fans Will Love
                </h1>
                <p className="text-center lg:w-5/12 md:w-8/12 px-4 ml-auto mr-auto font-[500] text-lg text-VeryDarkCyan text-opacity-90 leading-[25px] pb-[2.5rem]">
                   Huddle re-imagines the way we build communities. You have a voice, but so does 
                   your audience. Create connections with your users as you engage in genuine discussion. 
                </p>
                <button className="block bg-Pink shadow-md hover:bg-LightPink transition-all ease-in delay-100 rounded-full py-4 px-16 font-bold lg:text-lg ml-auto mr-auto text-white">Get Started For Free</button>
            </div>
        </div>
     );
}
 
export default Hero;