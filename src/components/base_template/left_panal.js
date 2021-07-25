import './base.css'
import ProfilePic from '../../avatar.jpg';
import NavigationRoutes from '../routes/urls';


export default function LeftPanal(){

    return(
        <div className='panal-left-bar'>
            <Avatar></Avatar>
            <NavigationRoutes></NavigationRoutes>
        </div>
    );

}

function Avatar(){
    return(
        <div className='avatar'>
            <img src={ProfilePic} alt='avatar'>
            </img>
        </div>
    );
}