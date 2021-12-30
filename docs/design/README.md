# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

# Проектування бази даних

## Модель бізнес об'єктів

![BE](https://user-images.githubusercontent.com/71746212/147731537-261f9c1b-666a-4b63-9c6f-1a5a6f78878f.png)

@startuml
entity SelectedAlt <<ENTITY>>

entity Alt <<ENTITY>>
entity Alt.id <<NUMBER>> #ffffff
entity Alt.text <<TEXT>> #ffffff
entity Alt.type <<TEXT>> #ffffff

entity SurveyState <<ENTITY>>
entity SurveyState.name <<TEXT>> #ffffff

entity SurveyAction <<ENTITY>>
entity SurveyAction.at <<DATE>> #ffffff

entity Answer <<ENTITY>>
entity Answer.id <<NUMBER>> #ffffff
entity Answer.text <<TEXT>> #ffffff
entity Answer.date <<DATE>> #ffffff
entity Answer.userId <<NUMBER>> #ffffff

entity UserReport <<ENTITY>>
entity UserReport.id <<NUMBER>> #ffffff
entity UserReport.text <<TEXT>> #ffffff
entity UserReport.date <<DATE>> #ffffff
entity UserReport.userID <<NUMBER>> #ffffff

entity Report <<ENTITY>>
entity Report.text <<TEXT>> #ffffff
entity Report.date <<DATE>> #ffffff

entity Mentor <<ENTITY>>
entity Mentor.id <<NUMBER>> #ffffff
entity Mentor.level <<INT>> #ffffff

entity Admin <<ENTITY>>

entity User <<ENTITY>>
entity User.username <<TEXT>> #ffffff
entity User.mail <<TEXT>> #ffffff
entity User.password <<TEXT>> #ffffff
entity User.id <<NUMBER>> #ffffff
entity User.mentorID <<NUMBER>> #ffffff
entity User.level <<NUMBER>> #ffffff

entity Question <<ENTITY>>
entity Question.id <<NUMBER>> #ffffff
entity Question.text <<TEXT>> #ffffff
entity Question.type <<TEXT>> #ffffff

entity Survey <<ENTITY>>
entity Survey.id <<NUMBER>> #ffffff
entity Survey.text <<TEXT>> #ffffff
entity Survey.type <<TEXT>> #ffffff
entity Survey.topic <<TEXT>> #ffffff
entity Survey.date <<DATE>> #ffffff

User.username --* User
User.mail --* User
User.password --* User
User.id --* User
User.mentorID --* User
User.level --* User

Alt.id -u-* Alt
Alt.text -u-* Alt
Alt.type -u-* Alt

SurveyState.name --* SurveyState

SurveyAction.at --* SurveyAction

Answer.id --* Answer
Answer.text --* Answer
Answer.date --* Answer
Answer.userId --* Answer

Question.id --* Question
Question.text --* Question
Question.type --* Question

Survey.id --* Survey
Survey.text --* Survey
Survey.type --* Survey
Survey.topic --* Survey
Survey.date --* Survey

UserReport.id -u-* UserReport
UserReport.text -u-* UserReport
UserReport.date -u-* UserReport
UserReport.userID -u-* UserReport

Report.text --* Report
Report.date --* Report

Mentor.id --* Mentor
Mentor.level --* Mentor


Admin "1,1" -- "0,*" Mentor
Mentor "1,1" -- "0,*" User
Answer "1,1" -- "0,*" User
Answer "1,1" -- "0,*" SelectedAlt
SelectedAlt"1,1"-d- "0,*"Alt
UserReport "0,*" -u- "1,0" User
Report "1,1" -u- "0,*" UserReport
Question"1,1"-- "0,*" Answer
Question"1,1"-- "0,*" Alt
Survey "1,1" -- "0,*" Question
Survey "1,1" -- "0,*" SurveyAction
SurveyAction"1,1" -- "0,*" SurveyState
@enduml

## ER-model
![ER](https://user-images.githubusercontent.com/71746212/147731631-6e38a25c-6718-495f-9656-dc27484cdb3f.png)
@startuml
entity User <<ENTITY>> {
id:INT
mentorID:INT
level:INT
usersname:TEXT
password:TEXT
mail:TEXT
}

entity Mentor <<ENTITY>>{
id:INT
level:INT
}

entity Admin <<ENTITY>>{
id:INT
job:TEXT
}

entity Survey <<ENTITY>>{
id:INT
text:TEXT
type:TEXT
topic:TEXT
date:DATE
}

entity Question <<ENTITY>>{
id:INT
type:TEXT
text:TEXT
min: int
max: int
}

entity Alt <<ENTITY>>{
    id:INT
    type:TEXT
    text:TEXT
}

entity Answer <<ENTITY>> {
userId:INT
id:INT
text:TEXT
date:DATE
}

entity Report <<ENTITY>> {
text:TEXT
date:DATE
}

entity UserReport <<ENTITY>> {
id:INT
userID:INT
text:TEXT
date:DATE
}

entity SelectedAlt <<ENTITY>> {
id: INT
}

entity SurveyState <<ENTITY>> {
name: text
}

entity SurveyAction <<ENTITY>> {
at:Date
}



SurveyAction "1, 1" <-- "0, *" SurveyState
SurveyAction "1, 1" <-- "0, *" Survey
SurveyAction --> User: actor
SurveyAction --> User: collaborator

Answer "1, 1" <-- "0, *" Question
Survey "0, *" --> "1, 1" Question
Mentor "1, 1" --> "0,*" User
Admin "1,1" --> Mentor
Question "1, 1" <-- "0, *" Alt
Report "1,1" --> "0,*" UserReport
UserReport "0,*" --> "1,0" User

Answer "1, 1" <-- "0, *" SelectedAlt
SelectedAlt "1, 1" <-- "0, *" Alt
@enduml
## Реляційна схема
![EER](https://user-images.githubusercontent.com/71746212/147731584-2cd73935-d9e3-4a18-878a-5681a8d7db37.png)

