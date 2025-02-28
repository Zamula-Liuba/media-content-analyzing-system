## Діаграма прецедентів
![img](https://user-images.githubusercontent.com/71746212/147731830-98627c05-c3af-4537-9e83-503399834061.png)

@startuml
actor User
actor Mentor
actor Admin

usecase "Реєстрація" as REG
usecase "Авторизація" as AUTH
usecase "Запис на \nперший курс" as SIGN1
usecase "Запис на другий\n і подальші курси" as SIGN2
usecase "Проходження другого\n і подальших курсів" as COURSE
usecase "Щоденна робота учня" as ED
usecase "Щотижневий аналіз\n саморозвитку \nта діяльності" as EW

Admin -u-|> Mentor
Mentor -u-|> User
User -u-> AUTH
User -u-> REG
User --> SIGN1
User --> SIGN2
User --> COURSE
User --> ED
User --> EW

@enduml

## Сценарії використання системи

### ***ID: SJ-1***

***НАЗВА:*** Реєстрація на платформі

***УЧАСНИКИ:*** Ментор, учень

***ПЕРЕДУМОВИ:*** Учень завантажив додаток

***РЕЗУЛЬТАТ:*** Учень зареєструвався на платформі та має власного ментора

***ВИКЛЮЧНІ СИТУАЦІЇ:***
EX-1: Людина немає власного поштового адресу

***ОСНОВНИЙ СЦЕНАРІЙ:***
![SJ-1](https://user-images.githubusercontent.com/71746212/147731840-bb576502-f731-4a67-a9fb-469574b59b74.png)

@startuml

|Учень|
start
:починає взаємодію;
|Система|
:відкриває сторінку для реєстрації;
|Учень|
:заповнює дані для реєстрації та підтверджує їх;
|Система|
:зберігає дані;
note right #ffaaaa
<b> Людина немає власного поштового адресу
end note
|Система|
:відкриває сторінку з опитуваннями інтересів;
|Учень|
:заповнює дані;
|Система|
:зберігає дані та формує карту інтересів людини;
|Система|
:прив'язує до людини ментора, \nякий визначенийпопередньо в анкеті, \nабо знаходиться вільний ментор;
|Учень|
:отрмує інформацію про свого ментора;
stop

@enduml

### ***ID: SJ-2***

***НАЗВА:*** Реєстрація на платформі

***УЧАСНИКИ:*** Ментор, учень

***ПЕРЕДУМОВИ:*** Учень завантажив додаток

***РЕЗУЛЬТАТ:*** Учень зареєструвався на платформі та має власного ментора

***ВИКЛЮЧНІ СИТУАЦІЇ:***
EX-1: Людина немає власного поштового адресу

***ОСНОВНИЙ СЦЕНАРІЙ:***
![SJ-2](https://user-images.githubusercontent.com/71746212/147731852-30cd4b37-bf77-4652-88ca-443a62a14339.png)

@startuml
|Учень|
start
:починає взаємодію;
|Система|
:надає сторінку входу;
|Учень|
:вносить свою пошту та пароль ;
note left #ffaaaa
<b> Не існує даного логіна в системі,
<b> або пароль невірний
end note
|Система|
:відкриває домашню сторінку;
stop
@enduml

### ***ID: SJ-3***

***НАЗВА:*** Запис на перший курс

***УЧАСНИКИ:*** Ментор, учень, адміністратор

***ПЕРЕДУМОВИ:*** Учень має рареєстрований акаунт в цій системі

***РЕЗУЛЬТАТ:*** Учень записався на перший курс

***ВИКЛЮЧНІ СИТУАЦІЇ:***
***ОСНОВНИЙ СЦЕНАРІЙ:***
    ![SJ-3](https://user-images.githubusercontent.com/71746212/147731874-88273b55-9903-4179-8b87-fc35b1be3ca2.png)
@startuml
|Учень|
start
:починає взаємодію;
|Система|
:надає інформацію про перший курс, \nде є загальна інформацію про освітню платформу;
|Учень|
:записується на перший курс;
|Система|
:зберігає та надсилає ментору дані учня;
|Ментор|
:виходить з учнем на зв'язок\n та розказує презентацію платформи;
|Адміністратор|
:дає більші права доступу;
|Учень|
: записується на подальші курси;
stop
@enduml

### ***ID: SJ-4***

***НАЗВА:*** Запис на другий і подальші курси

***УЧАСНИКИ:*** Ментор, учень, адміністратор

***ПЕРЕДУМОВИ:*** Учень зареєстрований в системі та пройшов перший курс.
Він має права доступу для запису на ці курси

***РЕЗУЛЬТАТ:*** Учень записався на подальші курси

***ВИКЛЮЧНІ СИТУАЦІЇ:***
![SJ-4](https://user-images.githubusercontent.com/71746212/147731901-86f06f0b-0564-47b6-b6bb-65758791844f.png)

***ОСНОВНИЙ СЦЕНАРІЙ:***
    
@startuml

|Учень|
start
:починає взаємодію;
|Система|
:видає список рекомендованих курсів і \nсписок курсів відповідно до інтересів людини;
|Учень|
:записується на вибраний ним курс;
|Система|
:система висилає платіжні дані учню;
|Учень|
:здійснює оплату курсу;
|Ментор|
:отримує повідомлення;
|Система|
:висилає опитування про цілі курсу\n учню та дає перше домашнє завдання;
|Учень|
: заповнює анкету;
stop
@enduml

### ***ID: SJ-5***

***НАЗВА:*** Проходження другого і подальших курсів з виконанням домашньої роботи та здачею тесту

***УЧАСНИКИ:*** Учень, ментор, адміністратор

***ПЕРЕДУМОВИ:*** Учень зареєструвався на курс

***РЕЗУЛЬТАТ:*** Учень успішно пройшов курс та досяг поставленої на початку курса цілі

***ВИКЛЮЧНІ СИТУАЦІЇ:***
EX-1: Учень не зробив тест з попередніх курсів
EX-2: Учень не володіє достатнім рівнем знань, який має бути у людини після проходження курсу

***ОСНОВНИЙ СЦЕНАРІЙ:***
![SJ-5](https://user-images.githubusercontent.com/71746212/147731928-c31ad1d8-acc7-4390-bcce-7378ceeb9d05.png)

@startuml

|Учень|
start
:отримує першу домашню роботу до початку курсу;
note left #ffaaaa
<b> Учень не зробив тест з попередніх курсів
end note
note left #ffaaaa
<b> Учень не володіє достатнім рівнем знань,
<b>  який має бути у людини після проходження курсу
end note
|Учень|
:виконує домашнє та відсилає завдання;
|Система|
:надсилає відповіді ментору;
|Ментор|
:проводить планову лекцію;
|Учень|
:слухає лекцію ментора;
|Система|
:надсилає тест і домашнє завдання учню;
|Учень|
:заповнює опитування;
|Система|
:надсилає опитування для домашнього завдання \n(або одноразово, або багато разів);
|Aдміністратор|
:по закінченню курсу відкриває доступ \nдо ще більшої кількості ресурсів;
|Учень|
stop
@enduml
### ***ID: SJ-6***

***ID:*** SJ-6

***НАЗВА:*** Щоденна робота учня

***УЧАСНИКИ:*** Учень

***ПЕРЕДУМОВИ:*** Учень пройшов курси, на яких відкрили доступ до щоденного заповнення

***РЕЗУЛЬТАТ:*** Учень заповнює результати роботи над собою щоденно, згенерована
успішність учня додається до особистої сторінки

***ВИКЛЮЧНІ СИТУАЦІЇ:***

***ОСНОВНИЙ СЦЕНАРІЙ:***
 ![SJ-6](https://user-images.githubusercontent.com/71746212/147731966-4f3ffdd7-0ba5-4920-b001-6905843774fd.png)

    
    @startuml

|Учень|
start
|Система|
:надсилає повідомлення про щоденні справи;
|Учень|
:починає взаємодію;
|Система|
:надає опитування, чи щоденні справи виконані;
|Учень|
:заповнює форму;
|Система|
:обробляє дані;
|Система|
:додає на сторінку учасника про дані успішності студента;
stop
@enduml
### ***ID: SJ-7***

***НАЗВА:*** Щотижневий аналіз саморозвитку та діяльності

***УЧАСНИКИ:*** Учень, ментор

***ПЕРЕДУМОВИ:*** Учень пройшов курси, на яких відкривається можливість писати щотиждений аналіз

***РЕЗУЛЬТАТ:*** Учень пише аналіз, ментор переглядає його звіт
***ВИКЛЮЧНІ СИТУАЦІЇ:***
***ОСНОВНИЙ СЦЕНАРІЙ:***
    ![SJ-7](https://user-images.githubusercontent.com/71746212/147732039-6b748bda-9551-4e8e-8f5b-3a8569876475.png)   
@startuml

|Учень|
start
:заходить в розділ з аналізами тижня і натискає додати;
|Система|
:відкриває поле для написання аналізу;
|Учень|
:пише та зберігає аналіз тижня;
|Система|
:запитує чи відкривати доступ ментору;
|Учень|
:натискає так або ні;
stop
@enduml
