import React from 'react';
import '../css/ImpactStories.css';
import impactStories from '../data/impactStories.json';  // Adjust the path as necessary

const ImpactStories = () => {
    return (
        <div className="impact-stories-container">
            <h2>Impact Stories</h2>
            <div className="stories-grid">
                {impactStories.map(story => (
                    <div key={story.id} className="story-card">
                        <img src={story.image} alt={story.title} className="story-image" />
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactStories;
