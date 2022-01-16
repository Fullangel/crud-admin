import React from 'react';
import './topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                <span className='logo'>admin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                    <Language />
                    <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                    <Settings />
                    </div>
                    <img src='https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6' alt='' className='topAvatar' />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
