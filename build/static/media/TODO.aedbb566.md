# Начало работы с DRAKON IDE 

## 1. Основные понятия

### `ДРАКОН-схема`

Упорядоченная блок-схема с точно определёнными свойствами.  

### `Икона`

Структурная единица ДРАКОН-схемы. Схема целиком и полностью состоит из икон. Все иконы связаны друг с другом соединительной линией. Каждая икона содержит текст. В нём Вы описываете действие, состояние, условие или другую необходимую информацию. У каждой иконы есть свой тип, о них будет рассказано ниже

### `Примитив`

Конструкция языка ДРАКОН, описывающая алгоритм как последовательность икон, выполняемую сверху вниз.



## 2. Основные операции

### `Вставка`

В окне редактора есть специальный интерфейс "Иконы". Выберите одну из доступных нажатием кнопки мыши. На схеме все доступные места отобразятся зеленым кругом. Нажмите на нужный круг для вставки иконы.

### `Удаление`

В том же интерфейсе выберете пункт с красным крестом. Все иконы для удаления помечаются красным. Нажмите на икону для удаления


### `Сброс действия`

В интерфейсы "Иконы" выберете пункт "R".


### `Редактирование содержимого икон`

Дважды кликните на текст иконы. Откроется интерфейс взаимодействия с текстовым полем. Обновите его с помощью клавиатуры и нажмите Ввод.

## 3. Правила описания схемы

Среда не предъявляет строгих правил к оформлению алгоритмов. Вы можете описывать действия в любом удобном вам формате. Однако Вы лишите себя возможности конвертации в язык JavaScript. Для этого Вам необходимо ознакомиться с базовыми конструкциями языка JavaScript. Их описание приведено ниже...

## Типы икон

### `Заголовок / title`


![заголовок](title.png)  

Икона начала схемы. Это входная точка Вашего алгоритма. В неё можно вписать своё название. Например ввод текста:  
   `MySuperName`  
   будет соответстовать

    function MySuperName(){
    }
Что просто создаёт функцию с Вашим названием.


### `Конец / end`

![заголовок](end.png)  

Икона конца схемы. Она служит завершением Вашей программы.  


### `Комментарий / comment`

![комментарий](comment.png)  
Простой комментарий, который не делает полезной работы, зато выводит важную информацию  

```javascript
    /* Содержимое комментария */
```

### `действие / action`

![икона действия](action.png)  

Ваш лучший друг! Базовая икона действия. Действием может быть как присвоение:

    const a = 5 <- константа
    let dayTime = "Утро" <- переменная
Так и операция над данными:  

    a = a / 5
    dayTime+=" доброе"

Или возврата данных:  

    return a
#### `Рекомендуем прочитать:`
[JavaScript Переменные](https://learn.javascript.ru/variables) (время чтения 3 минуты)   
[JavaScript Типы данных](https://learn.javascript.ru/types) (время чтения 5 минут)  
[JavaScript Операции](https://learn.javascript.ru/operators)  (время чтения 10ц минут)  

### `Вопрос / if`  

![икона вопросы](if.png)

Вопрос формата Если (Условие) То (действие) Иначе (другое действие). Условие должно  содержать в себе ответ на вопрос Да или Нет  

    x > 5
После трансляции становится:  

    if (x > 5) {

    } else {
    
    }

### `Цикл / while`  

![икона цикл](while.png)

Повторяющися цикл, пока условие не выполнится. Будьте осторожны, не задавайте условие, которое никогда не изменит своего состояние.  

    x > 5
После трансляции становится:  

    do

    while(x > 5)


### `Вариант / switch`  

![икона выбор](switch.png)

Выбор из нескольких вариантов. Каждый вариант задаётся в отдельной ветке  
    
    switch (x) // Выбирает состояние x
    {
    case 5: // x === 5
        break;
    case 10: // x === 10
        break;
    default: // x !== 5 && x !== 10
        break;
    }



### `Простой вывод / output`
![икона действия](output.png)

Вывод содержимого в консоль  
 
    // первой строкой
    const readline = require('readline')

    console.log(x) // выводит содержимое x

### `Пауза / sleep`
![икона действия](sleep.png)  

Икона таймера, отправляет программу в ожидание на заданное количество миллисекунд.

    await new Promise(resolve => setTimeout(resolve, 100));
    await new Promise(resolve => setTimeout(resolve, 100));
    await new Promise(resolve => setTimeout(resolve, 100));
    await new Promise(resolve => setTimeout(resolve, 100));