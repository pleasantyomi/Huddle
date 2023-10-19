import image from '../assets/screen-mockups.svg'

const Image = () => {
    return ( 
        <div>
            <div className="py-20">
                <img className="h-auto w-10/12 ml-auto mr-auto" src={image}/>
            </div>

        </div>
     );
}
 
export default Image;