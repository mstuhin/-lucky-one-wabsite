import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div>
                <p className='text-bg'> <span className='question'>Question number 1 How React Works:</span>
                    <br />

                    React is a javascript's library. React make UI easily if you understand.In react you dont need to code repeatedly rather once you code you can use it from anywhere.React introduced an idea that similar in look different in data, in this idea you can create one structure for many for different datas.React have also JSX concepts that you can easily write JS HTML with also JS code in one file.So that is how React works!!

                </p>
            </div>

            <div>
                <p className='text-bg'>
                    <span className='question' >Question number 2 How useState Works :
                    </span> <br />
                    useState is a Hook that allows you to have state variables in functional components.useState is using for to change something.For example you declare a function and it return a variable with the current state value and you can change or update the value in this state to another function and set the data to that initial state.Finally you can say that you need a data , array , obj, or function etc and you set a initial state and you can use,change or update whenever you need!!!
                </p>
            </div>
        </div>
    );
};

export default Question;