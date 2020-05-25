const ReadingTestReducer = (state = {
    Data: [],
    QuestionNumber: 1,
    NumberOfQuestions: 1,
    CorectAnswers: 0,
    WrongAnswers: 0,
    AnswersType: "eng",
    Answers: [],
    QuestuonItem: null,
    Accuracy: 0,
    TimeSpent: 0,
    ResponseTimeSum: 0,
    ResponseTime: 0,
    Time: 1,
    ShouldShowAnswer: false,
    IsPaused: false,
    IsFinished: false
}, action) => {
    switch (action.type) {
        case "READING_TEST_INIT":
            state = {
                ...state,
                Data: action.payload,
                QuestionNumber: 1,
                NumberOfQuestions: 1,
                CorectAnswers: 0,
                WrongAnswers: 0,
                AnswersType: "eng",
                Answers: [],
                QuestuonItem: null,
                Accuracy: 0,
                TimeSpent: 0,
                ResponseTimeSum: 0,
                ResponseTime: 0,
                Time: 1,
                ShouldShowAnswer: false,
                IsPaused: false,
                IsFinished: false
            };
            break;
        case "READING_TEST_SETUP":
            state = {
                ...state,
                Data: action.payload.Data,
                AnswersType: action.payload.AnswersType,
                Answers: action.payload.Answers,
                QuestuonItem: action.payload.QuestuonItem,
                NumberOfQuestions: action.payload.NumberOfQuestions
            };
            break;
        case "READING_TEST_SET_SHOW_ANSWER":
            state = {
                ...state,
                ShouldShowAnswer: action.payload
            };
            break;
        case "READING_TEST_UPDATE_STATUS":
            state = {
                ...state,
                QuestionNumber: action.payload.QuestionNumber,
                CorectAnswers: action.payload.CorectAnswers,
                WrongAnswers: action.payload.WrongAnswers,
                ResponseTimeSum: action.payload.ResponseTimeSum
            };
            break;
        case "READING_TEST_UPDATE_TIME":
            state = {
                ...state,
                Time: action.payload
            };
            break;
        case "READING_TEST_UPDATE_RESPONSE_TIME":
            state = {
                ...state,
                ResponseTime: action.payload
            };
            break;
        case "READING_TEST_CLEAR_RESPONSE_TIME":
            state = {
                ...state,
                ResponseTime: action.payload
            };
            break;
        case "READING_TEST_TOGGLE_PAUSE":
            state = {
                ...state,
                IsPaused: action.payload
            };
            break;
        case "READING_TEST_SET_FINISHED":
            state = {
                ...state,
                IsFinished: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default ReadingTestReducer;
