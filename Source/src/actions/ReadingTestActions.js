
export function testInit(data) {

    let payload = [];
    for(let i = 0; i < (data.length); i++){
        if(data[i].data.isEmpty!=true){
            payload.push(data[i]);
        }
    }

    return dispatch => {
            dispatch({
                type: "READING_TEST_INIT",
                payload: payload
            });
    };
}

export function testSetShowAnswer(should) {
    return dispatch => {
            dispatch({
                type: "READING_TEST_SET_SHOW_ANSWER",
                payload: should
            });
    };
}


export function testSetup(data, indexToDelete, questionItem, answers, answersType, numberOfQuestions) {



    let newData = data.slice();
    newData.splice(indexToDelete, 1);

    let value = {
        Data: newData,
        AnswersType: answersType,
        Answers: answers,
        QuestuonItem: questionItem,
        NumberOfQuestions: numberOfQuestions
    }


    return dispatch => {
            dispatch({
                type: "READING_TEST_SETUP",
                payload: value
            });
    };
}


export function testUpdateStatus(questionNumber, corectAnswers, wrongAnswers,  isCorect, responseTimeSum, responseTime) {

    let value = {
        QuestionNumber: questionNumber+1,
        CorectAnswers: isCorect?corectAnswers+1:corectAnswers,
        WrongAnswers: !isCorect?wrongAnswers+1:wrongAnswers,
        ResponseTimeSum: responseTimeSum+responseTime
    }

    return dispatch => {
            dispatch({
                type: "READING_TEST_UPDATE_STATUS",
                payload: value
            });
    };
}


export function testUpdateTime(time) {

    return dispatch => {
            dispatch({
                type: "READING_TEST_UPDATE_TIME",
                payload: time+1
            });
    };
}

export function testUpdateResponseTime(responseTime) {

    return dispatch => {
            dispatch({
                type: "READING_TEST_UPDATE_RESPONSE_TIME",
                payload: responseTime+(1/10)
            });
    };
}

export function testClearResponseTime() {

    return dispatch => {
            dispatch({
                type: "READING_TEST_CLEAR_RESPONSE_TIME",
                payload: 0
            });
    };
}

export function testTogglePause(isPaused) {

    return dispatch => {
            dispatch({
                type: "READING_TEST_TOGGLE_PAUSE",
                payload: !isPaused
            });
    };
}

export function testSetFinished(finished) {

    return dispatch => {
            dispatch({
                type: "READING_TEST_SET_FINISHED",
                payload: finished
            });
    };
}




