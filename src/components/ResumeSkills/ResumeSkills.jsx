import React from 'react'

function ResumeSkills({Icon , title}) {
    return (
        <div className="resumeSkillsBox">
            <div>{Icon}</div>
            <div>{title}</div>
        </div>
    )
}

export default ResumeSkills
