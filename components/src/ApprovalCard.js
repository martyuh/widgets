import React from 'react'

const ApprovalCard = (props) => {
    return (
        <div className='ui card'>
        {/*passing a component in via props.children. it is enclosed in the parent tags of approvalCard in the parent component index.js */}
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                <div className='ui basic green button'>Approve</div>
                <div className='ui basic red button'>Reject</div>
                </div>
            </div>
            
        </div>
    )
}

export default ApprovalCard
