import React from "react";

import {AdChannel} from '../assets';

const TeamChannelList =({children, error=false, loading,type}) =>
{
    if(error)
    {
        return type==="team"?(
            <div className="team-channel-list">
                <p className="team-channel-list__message">Connection error</p>
            </div>
        ):null;
    }

    if(loading)
    {
        return(
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">{type==='team' ? 'Channels':'Messages'}</p>
            </div>
        );
    }


    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className = "team-channel-list__header__title">{type==='team' ?'Channels':'Direct Messages'}</p>    
                {/* later button */}
            </div>    
        </div>
    );
}

export default TeamChannelList;