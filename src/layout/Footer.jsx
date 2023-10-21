import cutOut from '../assets/bg-footer-top-desktop.svg'
import logo from '../assets/logowhite.svg'
import phone from '../assets/icon-phone.svg'
import email from '../assets/icon-email.svg'
import facebook from '../assets/icons8-facebook-50.png'
import instagram from '../assets/icons8-instagram-50.png'
import twitter from '../assets/icons8-twitter-squared-50.png'
import { useState } from 'react'


const Footer = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)



    return ( 
        <div>
            <div>
                <div>
                    <img className="mb-0 pb-0 w-full" src={cutOut}/>
                </div>

                <div className="lg:flex lg:justify-between grid bg-VeryDarkCyan w-full h-fit  font-secondary text-white pt-10 pb-20 lg:px-20 text-sm">
                    <div className="w-10/12 ml-auto mr-auto lg:hidden block">
                        <h1 className="text-lg font-bold uppercase font-primary leading-loose pb-3">Newsletter</h1>
                        <p className="">  To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                            send you spam or pass on your email address
                        </p>
                        <div className="relative grid  pt-10 gap-7">
                            <input className="rounded-md w-full h-10 pl-3 text-VeryDarkCyan outline-none" type='email' placeholder='example@gmail.com' required/>
                            <button className="h-10 w-5/12 rounded-md bg-Pink font-bold hover:bg-LightPink transition-all ease-in delay-200 absolute right-0 bottom-[-3.5rem]" type="submit">Subscribe</button>
                        </div>
                    </div>

                    <div className="lg:w-3/12 w-10/12 lg:ml-0 lg:mr-0  ml-auto mr-auto lg:pt-0 pt-[8rem]">
                        <img src={logo}/>

                        <p className="pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae quo esse, ea aspernatur sapiente ratione repellat nobis.</p>

                        <div className="flex items-center gap-3 pt-5">
                            <img src={phone}/>
                            <p>Phone: +1-543-123-4567</p>
                        </div>

                        <div className="flex items-center gap-3 pt-5">
                            <img src={email}/>
                            <p>example@huddle.com</p>
                        </div>

                        <div className="flex gap-5 items-center pt-16">
                            <img className="w-auto h-8" src={facebook}/>
                            <img className="w-auto h-8" src={instagram}/>
                            <img className="w-auto h-8" src={twitter}/>
                        </div>
                    </div>

                    <div className="w-5/12 hidden lg:block">
                        <h1 className="text-lg font-bold uppercase font-primary leading-loose pb-3">Newsletter</h1>
                        <p className="w-9/12">  To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                            send you spam or pass on your email address
                        </p>
                        <div className="flex justify-between pt-10 gap-7">
                            <input className="rounded-md w-full h-10 pl-3 text-VeryDarkCyan outline-none" type="email" placeholder='example@gmail.com' required/>
                            <button className="h-10 w-5/12 rounded-md bg-Pink font-bold hover:bg-LightPink transition-all ease-in delay-100 cursor-pointer" type="submit">Subscribe</button>
                        </div>
                        

                    </div>
                   

                </div>

            </div>
            
        </div>
     );
}
 
export default Footer;