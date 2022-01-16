import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6' alt='' className='usershowImg' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Becker</span>
                            <span className='userShowTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon' />
                        <span className='userShowInfoTitle'>annabeck99</span>
                        </div>
                        <div className='userShowInfo'>
                        <CalendarToday className='userShowIcon' />
                        <span className='userShowInfoTitle'>10/12/1999</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                        <PhoneAndroid className='userShowIcon' />
                        <span className='userShowInfoTitle'>+1 546 654 854</span>
                        </div>
                        <div className='userShowInfo'>
                        <MailOutline className='userShowIcon' />
                        <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                        <LocationSearching className='userShowIcon' />
                        <span className='userShowInfoTitle'>New York || USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type='text' placeholder='annabeck99' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full name</label>
                                <input type='text' placeholder='Anna Becker' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type='text' placeholder='annabeck99@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type='text' placeholder='+1 546 654 854' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type='text' placeholder='New York || USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6' alt='' className='userUpdateImg' />
                                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }}/>
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
