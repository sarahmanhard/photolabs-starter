import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ handleTopicClick, topics }) => {
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map((topic, index) => (
        <TopicListItem
          key={topic.id + "-" + index}
          id={topic.id}
          label={topic.title}
          link={`/topics/${topic.slug}`}
          handleTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;

