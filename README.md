# Тестовое задание для funbox

[Практическое задание](https://ekatrif.github.io/funbox-test-task/dist/)

## Ответы на вопросы

> Q1
> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
>
> - пользователя;
> - менеджера проекта;
> - дизайнера;
> - верстальщика;
> - клиентского программиста;
> - серверного программиста.

## С точки зрения пользователя

**Плохая верстка**

- Мелкие интерактивные элементы в мобильной версии (например, кнопки)+
- Интерфейс непонятен для пользователя (хотя тут больше вопросов к дизайнеру, чем к верстальщику, но если верстальщик видит, что какие-то элементы могут вызвать сложности у пользователя сайта или противоречат сложившимся паттернам поведения, необходимо озвучить свою точку зрения дизайнеру и прийти к компромиссу)
- Разные блоки перекрывают друг друга (например, кнопка вызова онлайн помощника «заезжает» на блок с важной информацией на сайте)
- Верстка «разъезжается», сайт выглядит небрежно, проблема может встречаться в разных браузерах (например, не все браузеры поддерживают формат webp)
- Не работают скрипты, проблема также может проявляться в зависимости от браузера
- Пользователям с ограниченными возможностями неудобно получать информацию на сайте
- Первые секунды после открытия сайта картинка «прыгает» из-за того, что стили не успели подгрузиться (проблема известная как Flash Of Unstyled Content)
- Сайт долго грузится, контент подгружается «рывками»

  **Хорошая верстка**

- Размер кнопок удобен для взаимодействия пользователя с приложением
- Интерфейс интуитивно понятен
- Блоки не «наезжают» друг на друга, не перекрывают важную информацию
- Сайт адекватно отображается в популярных браузерах нескольких последних версий и на разных мобильных устройствах
- Функциональность скриптов сохранена, скрипты работают в разных браузерах без ошибок в консоли
- Верстка содержит семантические теги для акцентирования важной информации и адекватной навигации по сайту, сайт сохраняет адекватный внешний вид при масштабировании текста, сохранена возможность взаимодействия с сайтом при помощи клавиатуры
- Первый экран сразу загружается таким, каким он и должен быть в макете дизайнера.
- Сайт загружается быстро, взаимодействие пользователя с сайтом плавное, что достигается оптимизацией фото, видео, ленивой загрузкой, минификацией скриптов, файлов стилей, кешированием и др.

## С точки зрения менеджера проекта

**Плохая верстка**

- Верстка не соответствует макету
- Не обеспечена кросс-браузерность и мобильная версия
- Сорваны сроки выполнения работы
- Сложность в дальнейшем масштабировании сайта

  **Хорошая верстка**

- Верстка стремится к pixel perfect
- Сайт адекватно отображается в популярных браузерах нескольких последних версий и на разных мобильных устройствах
- Верстка выполнена в оговоренный срок
- Верстка достаточно гибка и удобна для внесения изменений в проект

## С точки зрения дизайнера

**Плохая верстка**

- Верстка не соответствует макету (не pixel perfect)
- Неправильно переданы изменения свойств элементов (например, кнопок) при взаимодействии пользователя с ними

  **Хорошая верстка**

- Верстка полностью соответствует макету. Спорные вопросы были разрешены до сдачи проекта.

## С точки зрения верстальщика

**Плохая верстка**

- Верстка не соответствует современным стандартам w3c.org
- В верстке не используются современные методы (например, flex, grid)
- Верстка не адаптирована под мобильные устройства, не обеспечена кросс-браузерность
- При именовании классов не используется методология БЭМ
- Код плохо читается, по имени класса или id блока невозможно понять, к чему он относится

  **Хорошая верстка**

- Верстка проходит валидацию https://validator.w3.org/ без критических ошибок
- Верстка гибко управляет расположением блоков и свободным пространством на странице
- Сайт адекватно отображается в популярных браузерах нескольких последних версий и на разных мобильных устройствах
- При верстке используется методология БЭМ или другая, принятая в компании система именования классов
- Интуитивно понятно, к чему относится тот или иной блок, код структурирован и в сложных моментах содержит комментарии для разработчика

## С точки зрения клиентского программиста

**Плохая верстка**

- Верстка плохо интегрируется с движком сайта или фреймворком, неадекватное использование классов и id
- Плохое именование блоков (id, классов), хаос в коде, отсутствие комментариев
- Контент, который может меняться клиентом или скриптом (например, логотип, фото, иконки) зашит в css, что вызывает дополнительные сложности при подключении движка

  **Хорошая верстка**

- Программист не вмешивается в код верстки, занимается свой частью разработки
- Интуитивно понятно, к чему относится тот или иной блок, код структурирован и в сложных моментах содержит комментарии для разработчика
- Обращение к контенту для его изменения не вызывает сложностей у программиста

## С точки зрения серверного программиста

**Плохая верстка**

- Код медленно обрабатывается браузером (много запросов к серверу, неоптимизированные фото, файлы стилей и js)
  **Хорошая верстка**
- Разработчик позаботился об автоматической оптимизации фото, видео, минификации скриптов, файлов стилей, в имена css и js файлов автоматически зашивает хэш для правильного срабатывания кеширования на сервере и в браузере клиента

> Q2
> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.
> Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Поскольку внесение изменений в многостраничный сайт сопряжено с повторением правок на нескольких страницах (а их могут быть сотни), среди основных особенностей верстки подобных сайтов я бы выделила:

1. Гибкость верстки, позволяющая легко и без доработок верстальщика менять внешний вид сайта (цвета фона и шрифтов, порядок блоков на странице и др.)
2. Использование шаблонов как типовых страниц сайта, так и отдельных его блоков (хедер, футор, сайдбар, навигация и т.п.)
3. Сборка сайта должна быть максимально автоматизирована (использование webpack, автоматических тестов)
   В своей работе мне приходилось вносить изменения в многостраничные сайты, выполненные на CMS (Wordpress и др.), дорабатывать блоки в шаблонах и повторяющихся элементах страниц.

В своей работе я использую следующие инструменты:

- IDE VSCode с расширениями, ускоряющими разработку
- Gulp + Webpack для сборки проекта
- Git/Github
- Figma
- Chrome DevTools
- https://caniuse.com/
- Lighthouse

Технологии:

- HTML
- CSS
- Javascript
- SaSS
- BootStrap
- jQuery
- BEM

> Q3
> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Я считаю одним из самых главных требований к верстке – это кроссбраузерность и доступность для различных мобильных устройств.
В своих проектах я сначала анализирую макет, выделяю основные смысловые блоки, думаю о том, какой контент будет располагаться в этих блоках, должны ли они тянуться в зависимости от размера экрана или оставаться фиксированными, должны ли они переноситься вниз при уменьшении размера экрана или оставаться в одной линии, как будет выглядеть макет на очень большом и на самом маленьком экране. Далее верстаю различные блоки, используя инструменты адаптивной или отзывчивой верстки там, где это уместно. Если дизайнер предоставил отдельный дизайн для мобильных устройств, уточняю максимальный размер экрана для этого дизайна. Если нет, адаптирую десктоп-версию для мобильных устройств.

В CSS предпочитаю использовать flex, grid, сверяюсь с сервисом https://caniuse.com/, когда есть сомнения в применимости свойств для тех или иных браузеров.

Использую сборщик проектов на базе Gulp+Webpack, в котором настроена автоматическая подстановка вендорных префиксов + подключен Babel для транспилирования js-скриптов.

Также в сборщике проектов у меня подключен файл .browserslistrc, в котором прописан список поддерживаемых браузеров.
Результат верстки я проверяю в разных браузерах, для разных размеров экрана (Chrome devTools, эмуляторы браузеров).
Обычно требования к поддержке различных устройств выглядят стандартно – несколько последних версий популярных браузеров + мобильная версия.

> Q4
> ? Расскажите, какие инструменты помогают вам экономить время в процессе
> написания, проверки и отладки кода.

Инструменты:

- IDE VSCode с расширениями
- Gulp + Webpack для сборки проекта
- Git/Github
- Figma
- Chrome DevTools
- https://caniuse.com/
- Lighthouse

Технологии:

- HTML
- CSS
- Javascript
- SaSS
- BootStrap
- jQuery
- BEM

> Q5
> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на
> Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
> Сталкивались ли вы с подобными проблемами на практике?

Для начала я бы открыла неработающую страницу с помощью эмулятора различных браузеров и визуально зафиксировала проблему. Далее с помощью Chrome devTools можно локализовать проблему, определить ее причину и способы устранения.
Да, с подобными проблемами приходилось сталкиваться довольно часто.

> Q6
> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
> интерактивные элементы при наведении мыши. Ваши действия?

Связаться с дизайнером и предложить дорисовать недостающие состояния элементов и/или предложит свой вариант оформления подобных элементов.

> Q7
> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).
> Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё?
> Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Мне нравится решать поставленную задачу комплексно, от анализа макета и реализации адаптивной верстки до добавления на сайт интерактива и логики на JS.

В последнее время есть общая тенденция к дроблению задач внутри команды разработчиков таким образом, что каждый специалист отвечает за свой «фронт работы». Если бы у меня была возможность выбора узкой специализации, я бы выбрала js-программирование на каком-либо современном фреймворке (Vue, React, Angular).

Помимо frontend-разработки мне интересен backend, а также я люблю учить английский язык по фильмам и сериалам с субтитрами.
Я подписана на несколько telegram и youtube-каналов, посвященных frontend-разработке, читаю проф. литературу и статьи.
Вот несколько ресурсов, которыми я пользуюсь:

Документация:

- https://learn.javascript.ru
- https://developer.mozilla.org
- https://doka.guide/
- https://ru.vuejs.org/v2/guide

  Youtube:

- https://www.youtube.com/c/FreelancerLifeStyle
- https://www.youtube.com/c/YauhenKavalchuk
- https://www.youtube.com/c/VladilenMinin
- https://www.youtube.com/c/JavascriptNinja

  Тематические статьи и практики

- https://medium.com
- https://habr.com
- https://ru.stackoverflow.com/

  Курсы, тренажеры:

- https://ru.hexlet.io
- https://htmlacademy.ru/
- https://codepip.com/
- https://www.codewars.com/users/ekatrif

  Книги:

- Бхаргава Адитья «Грокаем алгоритмы»
- Роберт Мартин «Идеальный программист»
- Роберт Мартин «Чистый код»
- Эрик Хэнчетт, Бенджамин Листуон «Vue.js в действии»

> Q8
> Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Меня зовут Екатерина.

Разработкой сайтов на различных CMS я занимаюсь более 10 лет.
С 2010 года по настоящее время я работала в двух студиях, занимающихся разработкой и продвижением сайтов, а также выполняла проекты как фрилансер.

За этот период я отвечала за решение задач широкого спектра - от разработки сайта на CMS до ведения его контенстной рекламы и SEO.

В сентябре 2021 года я поступила и закончила с отличием 2-х месячные курсы по frontend-разработке от Учебного центра "Профессионал". В качестве дипломного задания требовалось самостоятельно сверстать несколько страниц для интернет-магазина и написать скрипты на Javascript, добавляющие на страницы логику типового интернет-магазина. Этот проект доступен по ссылке: [Ссылка на проект](https://ekatrif.github.io/1146-Edu-project/)

Далее я углубилась в изучение теории и практики написания кода на Javascript, параллельно начала изучать Vue.js и основы TypeScript, стала использовать Gulp и Webpack для сборки проектов.

Мой следующий тренировочный проект - резюме, сверстанное на базе Figma-макета: [Ссылка на проект](https://ekatrif.github.io/Pet-project/dist/)

В настоящее время я заканчиваю очередной пет-проект – систему контроля времени выступления разработчиков.
Вкратце о проекте. Данные о группах разработчиков (название группы, ФИО тимлида, ФИО и должности разработчиков подгружаются в формате JSON с сервера с помощью fetch, обрабатываются и выводятся на странице приложения. При выборе сотрудника появляется таймер с отведенным на выступление временем и кнопками управления (старт, пауза, сброс). Когда до конца выступления остается 30с, отображается предупреждение об истечении времени.

Благодаря этому проекту я научилась работать с асинхронными обращениями на сервер, обрабатывать полученные данные и ошибки, потренировалась в адаптивной верстке и js-программировании.

Мне крайне интересна область frontend-разработки, ежедневно я читаю книги, статьи, лучшие практики по верстке и js-программированию, также интересуюсь опытом промышленной разработки в крупных IT-кампаниях.

Я бы очень хотела получить работу в компании «Funbox» на позиции младшего фронтенд-разработчика.

Благодарю за уделенное мне время.

С уважением,

Трифонова Екатерина

+7 (926) 342-09-22
