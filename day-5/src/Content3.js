import React from 'react'

import ActivityItem from './ActivityItem';

class Content extends React.Component {
  render() {
    const {activities} = this.props; // ES6 destructuring
    
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        {/* Each child in an array or iterator should have a unique "key" prop. */}
        {activities.map((activity, id) => (
          <ActivityItem
            activity={activity} key={id} />
        ))}
        
      </div>
    )
  }
}

export default Content
