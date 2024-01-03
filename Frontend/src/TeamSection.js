import React, { useState, useEffect } from 'react';
import './TeamSection.css';

function TeamSection() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch('https://api.nocturnode.tech/api/teams')
            .then(response => response.json())
            .then(data => setTeamMembers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleCardClick = (index) => {
        setTeamMembers(teamMembers.map((member, i) => {
            if (i === index) {
                return { ...member, isFlipped: !member.isFlipped };
            }
            return member;
        }));
    };

    return (
        <div className="containerTeam" id='sect-1'>
            <div className="rowT">
            <div className='Team-section'>
            <h2 className="TitleT">Our Team</h2>
            <div className='TeamList'>
                {teamMembers.map((member, index) => (
                    <div key={member._id}>
                        <div className="card" onClick={() => handleCardClick(index)}>
                            <div className={`card__inner ${member.isFlipped ? 'is-flipped' : ''}`}>
                                <div className="card__face card__face--front">
                                    <img className="profilePict" src={member.imageUrl} alt={member.Name} />
                                    <h2 className='memberName'>{member.Name}</h2>
                                    <p className='memberRole'>{member.Role}</p>
                                </div>
                                <div className="card__face card__face--back">
                                    <div className="card__content">
                                        <p className='descT'>Social</p>
                                        <div className="SocialApp">
                                            <a href={member.TelegramUrl} target="_blank" rel="noopener noreferrer">
                                                <img src="https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/social/telegram.svg" alt="Telegram" />
                                            </a>
                                            <a href={member.TwitterUrl} target="_blank" rel="noopener noreferrer">
                                                <img src="https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/social/twitter.svg" alt="Twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    );
}

export default TeamSection;
