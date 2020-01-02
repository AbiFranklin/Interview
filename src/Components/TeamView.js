import React, { useState, useEffect } from 'react';
import * as style from '../App.less';
import axios from 'axios'
import MemberStats from './MemberStats'

const TeamView = (props) => {
    const [loading, setLoading] = useState(true);
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState();


    const getMemberData = async () => {
        const result = await axios(
            `http://www.mocky.io/v2/5ca00c403300006e00a87dba?team=${props.team}`,
        );

        setTeamMembers(result.data);
        setLoading(false);
    };

    useEffect(() => {
        getMemberData();
    }, []);

    const OnClick = (e) => {
        const items = [...document.getElementsByTagName('li')]
        items.forEach(item => item.style.backgroundColor = '')
        e.currentTarget.style.backgroundColor = '#EDEDED';
        setSelectedMember(e.currentTarget.dataset.id);
    }

    return (
        <div className={style.Team}>
            {loading ? <i className="fas fa-spinner fa-spin fa-5x" /> :
                <ul className={style.List}>
                    {teamMembers.map((member, index) => {
                        return <li
                            key={member.id}
                            data-id={index}
                            className={style.Member}
                            onClick={OnClick.bind(this)}>
                            <h1>{member.name.first} {member.name.last}</h1>
                            <p>{member.location.city}, {member.location.state}</p>
                        </li>
                    })}
                </ul>
            }

            <div className={style.Info}>
                {selectedMember ? <MemberStats member={teamMembers[selectedMember]} /> :
                    <h1 className={style.StatsHeader} >Select Team Member</h1>}
            </div>
        </div>
    );

}

export default TeamView;
