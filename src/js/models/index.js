const { User } = require('./User');
const { Mentor } = require('./Mentor');
const { Answer } = require('./Answer');
const { Question } = require('./Question');
const { Alt }  = require('./Alt');
const { SelectedAlt}  = require('./SelectedAlt');
const { Survey } = require('./Survey');
const { SurveyAction } = require('./SurveyAction');
const { SurveyState } = require('./SurveyState');
const { Report } = require('./Report');
const { UserReport } = require('./UserReport');

module.exports = {
    models: {
        User,
        Expert,
        Answer,
        Question,
        Alt,
        SelectedAlt,
        Survey,
        SurveyAction,
        SurveyState,
        Report,
        UserReport,
        [Symbol.iterator]: function* () {
            const keys = Object.keys(this);
            for(const key of keys) {
                yield this[key];
            }
        }
    }

};
