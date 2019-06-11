import * as React from 'react';
import './Title.css';

const Title = (props: any) => {
  const {talkingAbout} = props
  const insertedTitle = (talkingAbout === 'ContextAPI') ? 'Context API' : talkingAbout.replace(/([A-Z])/g, ' $1').trim()
  return (
    <div className="title">
      <h3>How long is he going to keep talking about {insertedTitle}?</h3>
    </div>
  );
};

export default Title;