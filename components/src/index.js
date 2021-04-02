import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  const avatar =faker.image.image();
  return(
    <div className='ui container comments'>
    <ApprovalCard>
      'Are you sure'
    </ApprovalCard>
    {/* wrap the parent component in the the child component to pass it as a prop. children can also be jsx */}
    <ApprovalCard>
      <CommentDetail
        author='sam' 
        timeAgo='Today at 4:55pm' 
        content='hi' 
        avatar={avatar}
      />
    </ApprovalCard>     
    </div>
  )
}


ReactDOM.render(
    <App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

