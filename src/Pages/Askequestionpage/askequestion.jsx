import React from 'react'
import Askquestion_header from '../../Component/askequestion/questionheader/Questionheader';
import Askquestion_body from '../../Component/askequestion/questionbody/Questionbody';
import Askquestionfooter from '../../Component/askequestion/questionfooter/Questionfooter';

function ask_question() {
    return (
        <div>
            <Askquestion_header />
            <Askquestion_body />
            <Askquestionfooter />
        </div>
    )
}

export default ask_question;
