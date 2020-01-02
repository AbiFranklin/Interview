import React, { useState, useEffect } from 'react';
import * as style from '../App.less';
import axios from 'axios';
import Data from './Data';


const MemberStats = (props) => {
    const [loading, setLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [dataView, setDataView] = useState('files');
    let recentFiles = [];
    let recentCommits = [];
    let recentIssues = [];

    const getFiles = async () => {
        await axios(`http://www.mocky.io/v2/5c9d99b13300005b003f2382?employee=${props.member.id}`)
            .then(result => setFiles(result.data));
        setLoading(false);
    };

    useEffect(() => {
        getFiles();
    }, []);

    files.forEach(file => {
        if (file.commit.source === 'BitBucket') {
            recentIssues.push(file)
        } else if (file.commit.source === 'GitHub') {
            recentCommits.push(file)
        } else {
            recentFiles.push(file)
        }
    })

    let currentFiles;

    if (dataView === 'files') {
        currentFiles = recentFiles;
    } else if (dataView === 'commits') {
        currentFiles = recentCommits
    } else if (dataView === 'issues') {
        currentFiles = recentIssues
    }

    const defaultTab = {
        borderBottom: '3px solid #FF9900'
    }

    const OnClick = (e) => {
        const items = [...document.getElementsByClassName('statsMenu')]
        items.forEach(item => {
            item.style.borderBottom = '';
        })
        e.currentTarget.style.borderBottom = '3px solid #FF9900';
        setDataView(e.currentTarget.dataset.id);
    }

    return (
        <div>
            {loading ? <div className={style.StatsHeader}><i className="fas fa-spinner fa-spin fa-5x" /></div> :
                (<><div className={style.StatsHeader}>
                    <img src={props.member.avatar} />
                    <div className={style.Title}>
                        <h1>{props.member.name.first} {props.member.name.last}</h1>
                        <h2>{props.member.title}</h2>
                    </div>
                </div>
                    <div className={style.Header}>
                        <ul className={style.Menu}>
                            <li
                                className='statsMenu'
                                data-id='files'
                                style={defaultTab}
                                onClick={OnClick}>
                                <i className="fab fa-gitlab" /> Recent Files
                    </li>
                            <li
                                className='statsMenu'
                                data-id='commits'
                                onClick={OnClick}>
                                <i className="fab fa-github" /> Recent Commits
                    </li>
                            <li
                                className='statsMenu'
                                data-id='issues'
                                onClick={OnClick}>
                                <i className="fab fa-bitbucket" /> Recent Issues
                   </li>
                        </ul>
                    </div></>)
            }
            <Data currentFiles={currentFiles} />
        </div>
    );

}

export default MemberStats;
