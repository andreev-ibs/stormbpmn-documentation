<template><div><h1 id="редактор-bpmn1" tabindex="-1"><a class="header-anchor" href="#редактор-bpmn1"><span>Редактор BPMN1</span></a></h1>
<div class="hint-container caution">
<p class="hint-container-title">Предупреждение</p>
<p>Раздел в разработке</p>
</div>
<p>На этой странице дано подробное описание всех функций системы. Страница большая, функций много, крепитесь 😃</p>
<div class="hint-container tip">
<p class="hint-container-title">Подсказка</p>
<p>В <RouteLink to="/features/real-life-scenarios/">разделе</RouteLink> приведеные реальные сценарии использования системы, возможно начать оттуда будет лучшей идей.</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#бизнес-процессы-в-bpmn">Бизнес-процессы в BPMN</router-link><ul><li><router-link to="#описание-всех-меню">Описание всех меню</router-link></li><li><router-link to="#качество-бизнес-процессов-bpmn">Качество бизнес-процессов BPMN</router-link></li><li><router-link to="#версионирование">Версионирование</router-link></li><li><router-link to="#согласование">Согласование</router-link></li><li><router-link to="#импорт-и-экспорт-процессов-в-bpmn">Импорт и экспорт процессов в BPMN</router-link></li><li><router-link to="#связь-процессов">Связь процессов</router-link></li><li><router-link to="#сравнение-as-is-и-to-be">Сравнение AS-IS и TO-BE</router-link></li></ul></li><li><router-link to="#редактор-групп-процессов">Редактор групп процессов</router-link></li><li><router-link to="#редактор-оргструктуры">Редактор оргструктуры</router-link></li><li><router-link to="#регламенты">Регламенты</router-link></li><li><router-link to="#комментирование">Комментирование</router-link></li><li><router-link to="#графы">Графы</router-link></li><li><router-link to="#элементы-архитектуры-1">Элементы архитектуры</router-link><ul><li><router-link to="#загрузка-из-csv">Загрузка из CSV</router-link></li></ul></li><li><router-link to="#поиск">Поиск</router-link></li><li><router-link to="#теги">Теги</router-link></li><li><router-link to="#папки">Папки</router-link></li><li><router-link to="#роли">Роли</router-link><ul><li><router-link to="#создание-ролеи">Создание ролей</router-link></li><li><router-link to="#редактирование-ролеи">Редактирование ролей</router-link></li><li><router-link to="#удаление-ролеи">Удаление ролей</router-link></li></ul></li></ul></nav>
<h1 id="домашняя-страница" tabindex="-1"><a class="header-anchor" href="#домашняя-страница"><span>Домашняя страница</span></a></h1>
<h2 id="бизнес-процессы-в-bpmn" tabindex="-1"><a class="header-anchor" href="#бизнес-процессы-в-bpmn"><span>Бизнес-процессы в BPMN</span></a></h2>
<p>Наш редактор имеет множество функций и все они направлены на обеспечение удобства работы с BPMN диаграммами.<br>
Рассмотрим подробнее все возможности:
<img src="@source/features/bpmn_editor/bpmn-modeler.png" alt="image"></p>
<h3 id="описание-всех-меню" tabindex="-1"><a class="header-anchor" href="#описание-всех-меню"><span>Описание всех меню</span></a></h3>
<h4 id="левое-меню" tabindex="-1"><a class="header-anchor" href="#левое-меню"><span>Левое меню</span></a></h4>
<p>Левое меню предназначено для выбора и использования элементов BPMN и обеспечения удобства использования редактора.</p>
<div class="hint-container warning">
<p class="hint-container-title">Не все элементы</p>
<p>В левом меню не все элементы BPMN, но это не значит их нет в системе 😃 Типы элементов меняются в контекстном меню.</p>
</div>
<p>Советуем обратить внимание на кнопки, обеспечивающие удобство работы:</p>
<p><img src="@source/features/bpmn_editor/left-menu.gif" alt="image"></p>
<p>Для понимания того, в какие элементы можно превратить элементы, нужно понимать <RouteLink to="/bpmn/">BPMN</RouteLink> - сервис старается защитить вас от ошибок и не дать использовать элементы, которые невозможны по нотации.</p>
<h4 id="меню-сохранения" tabindex="-1"><a class="header-anchor" href="#меню-сохранения"><span>Меню сохранения</span></a></h4>
<h4 id="сохранение-диаграммы" tabindex="-1"><a class="header-anchor" href="#сохранение-диаграммы"><span>Сохранение диаграммы</span></a></h4>
<p>В этом меню вы можете:</p>
<ul>
<li>Указать название диаграммы</li>
<li>Указать <a href="#%D0%BF%D0%B0%D0%BF%D0%BA%D0%B8">папку</a></li>
<li>Добавить <a href="#%D1%82%D0%B5%D0%B3%D0%B8">теги</a></li>
<li>Указать тип-процесса (AS-IS / TO-BE) и связать со вторым процессом для <a href="#%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-as-is-%D0%B8-to-be">сравнения</a></li>
<li>Указать комментарий к текущей версии</li>
<li>Оценить [качество] вашей диаграммы</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>При сохранении создается <a href="#%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">версия</a>, к которой можно откатиться или выполнить сравнение</p>
</div>
<p>В этом же меню сохранить <strong>чужую диаграмму</strong>, к которой вы не имеете доступа на редактирование, в свои диаграммы.</p>
<p><img src="@source/features/bpmn_editor/save-menu.png" alt="image"></p>
<h4 id="скачать" tabindex="-1"><a class="header-anchor" href="#скачать"><span>Скачать</span></a></h4>
<p>В этом меню можно скачать диаграмму в нужном формате, включая <a href="#%D1%80%D0%B5%D0%B3%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D1%8B">.docx</a>
<img src="@source/features/bpmn_editor/download-menu.png" alt="image"></p>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Скачивание картинки с <a href="#%D0%BC%D0%B5%D0%BD%D1%8E-%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B5%D0%B5%D0%B2">оверлеями</a> доступно по другой кнопке</p>
</div>
<h4 id="поделиться-диаграммои" tabindex="-1"><a class="header-anchor" href="#поделиться-диаграммои"><span>Поделиться диаграммой</span></a></h4>
<p>В этом меню можно предоставить/отзовать доступ на диаграмму:</p>
<ul>
<li>Анонимно (не требует учетной записи в системе)</li>
<li>Конкретному человеку по e-mail с указанием прав (просматривать/редактировать)</li>
<li>Получить код для встраивания диаграммы, она будет выглядеть вот так:</li>
</ul>
<iframe src="https://stormbpmn.com/app/diagram/0855ae10-6ef8-4a23-9df0-f7d6cef12722?embedded=true" style="border:1px #f2f2f2 none;" name="extAdmin" scrolling="yes" frameborder="1"  height="500" width="100%" allowfullscreen></iframe>
<p><img src="@source/features/bpmn_editor/share-diagram.png" alt="image"></p>
<p>Больше о <RouteLink to="/features/team-work/">совместной работе</RouteLink></p>
<h4 id="сменить-статус" tabindex="-1"><a class="header-anchor" href="#сменить-статус"><span>Сменить статус</span></a></h4>
<p>Для информирования коллег о состоянии работы над процессом можно использовать статусы.</p>
<ul>
<li><strong>Новый</strong> - процесс еще не трогали, просто создали.</li>
<li><strong>В работе</strong> - над процессом активно идет работа.</li>
<li><strong>На согласовании</strong> - процесс согласуется с кем-то, менять схему <strong>нельзя</strong>. Подробнее в <a href="#%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">согласованиях</a></li>
<li><strong>Готов</strong> - процесс готов к работе. Меня схему нельзя.
<img src="@source/features/bpmn_editor/change-status.png" alt="image"></li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Сейчас менять или добавлять статусы нельзя.</p>
</div>
<h4 id="as-is-и-to-be" tabindex="-1"><a class="header-anchor" href="#as-is-и-to-be"><span>AS-IS и TO-BE</span></a></h4>
<p>Если в <a href="#%D0%BC%D0%B5%D0%BD%D1%8E-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F">меню сохранения</a> вы указали тип процесса и связанный процесс, то появится возможность быстро перемещаться между версиями AS-IS и TO-BE, а так же визуально сравнить их.
<img src="@source/features/bpmn_editor/as-is-to-be.png" alt="image"></p>
<h4 id="верхнее-меню" tabindex="-1"><a class="header-anchor" href="#верхнее-меню"><span>Верхнее меню</span></a></h4>
<p>Верхнее меню предназначено для работы с конкретной диаграммой и предоставляет возможности:<br>
<img src="@source/features/bpmn_editor/up-menu-2.png" alt="image"></p>
<ol>
<li>Развернуть диаграмму на полный экран</li>
<li>Открыть панель свойств BPMN/свойств Camunda.</li>
<li>Включить <a href="#%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B0-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0">проверку ошибок</a>.</li>
<li>Отключить проверку ошибок.</li>
<li>Отменить последнее дейсвтие.</li>
<li>Повторить последнее действие.</li>
<li>Распределить выделенные элементы по горизонтали.</li>
<li>Выровнять выделенные элементы по центру.</li>
<li>Приблизить.</li>
<li>Отдалить.</li>
<li>Включить или выключить миникарту.</li>
<li>Сменить цвет выбранным элементам.</li>
<li>Скопировать выделенные элементы для вставки между вкладками.</li>
<li>Вставить выделенные элементы из другой вкладки.</li>
<li>Включить автонумерацию элементов.</li>
<li>Отключить автонумерацию элементов.</li>
<li>Открыть <a href="#%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E">правое меню</a> с доп.функциям.</li>
<li>Открыть встроенную справку по <RouteLink to="/features/bpmn/">BPMN</RouteLink> и горячим клавишам.</li>
</ol>
<h4 id="контекстное-меню" tabindex="-1"><a class="header-anchor" href="#контекстное-меню"><span>Контекстное меню</span></a></h4>
<p>Контекстное меню открывается при клике на элемент и предоставляет возможности в зависимости от того, на какой элемент вы кликнули:<br>
<img src="@source/features/bpmn_editor/context-menu-1.png" alt="image"></p>
<ol>
<li>Смена типа элемента.</li>
<li>Открытие меню для управления <a href="#%D1%80%D0%BE%D0%BB%D0%B8">ролями</a> и <a href="#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B">элементами архитектуры</a>.</li>
<li>Удаление элемента.</li>
<li>Текстовая аннотация к элементу.</li>
<li>Изменение атрибутов текущего элемента.</li>
<li>Соеденение текущего элементв с другим.</li>
<li>Открытие <a href="#%D0%BC%D0%B5%D0%BD%D1%8E-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0">подробностей элемента</a>.</li>
<li>Открытие <a href="#%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">комментариев к элементу</a></li>
</ol>
<h4 id="меню-подробностеи-элемента" tabindex="-1"><a class="header-anchor" href="#меню-подробностеи-элемента"><span>Меню подробностей элемента</span></a></h4>
<p>В этом меню предоставляется возможность указывать всю ключевую информацию об элементе:</p>
<ul>
<li>Название</li>
<li><a href="#%D1%80%D0%BE%D0%BB%D0%B8">Роль</a> (<em>только для задач</em>)</li>
<li><a href="#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B">Элементы архитектуры</a> (<em>только для задач</em>)</li>
<li><a href="#%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D0%B2">Связанный процесс</a> (<em>только для Call Activity или Participant</em>)</li>
<li><a href="#%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82-%D0%B4%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B9">Плановую длительность</a></li>
<li>Описание</li>
<li><a href="#%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D0%B2">Элемент отправки сообщения</a>  (<em>только для Catch Event</em>)</li>
<li>Внешняя ссылка (<em>отображается на схеме</em>)</li>
</ul>
<p><img src="@source/features/bpmn_editor/context-menu-2.png" alt="image">
Так же это меню позволяет:</p>
<ul>
<li>Просматривать версии описания</li>
<li>Скопировать прямую ссылку на элемент</li>
<li>Просмотреть комментарии к элементу</li>
</ul>
<h4 id="меню-оверлеев" tabindex="-1"><a class="header-anchor" href="#меню-оверлеев"><span>Меню оверлеев</span></a></h4>
<p>Одним из ключевых удобств системы является возможность быстро и удобно включать и выключать отображение информации на диаграмме.
Меню оверлеев предоставляет возможность включать отображение:</p>
<ul>
<li>Плановой длительности</li>
<li>Ролей</li>
<li>Должностей (<em>первой должности в <a href="#%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80-%D0%BE%D1%80%D0%B3%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B">оргструктуре</a>, назначенной на роль</em> )</li>
<li>Систем (один из типов <a href="#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B">элементов архитектруы</a>)</li>
<li>Документов (один из типов <a href="#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B">элементов архитектруы</a>)</li>
<li><a href="#%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%B0">Связей</a></li>
<li><a href="#%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">Комментариев</a></li>
<li>Описание задач</li>
</ul>
<p>Кроме того, это меню позволяет скачать в виде .PNG диаграмму со включенными овереляеми.
<img src="@source/features/bpmn_editor/overlays-1.png" alt="image"></p>
<h4 id="меню-представлении" tabindex="-1"><a class="header-anchor" href="#меню-представлении"><span>Меню представлений</span></a></h4>
<h4 id="правое-меню" tabindex="-1"><a class="header-anchor" href="#правое-меню"><span>Правое меню</span></a></h4>
<p>Правое меню отображает дополнительную информацию к диаграмме в зависимости от выбранного отображения.
<img src="@source/features/bpmn_editor/right-menu.png" alt="image"></p>
<ol>
<li>Включить отображение всех <a href="#%D1%80%D0%BE%D0%BB%D0%B8">ролей</a>.</li>
<li>Включить отображение <a href="#%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D0%B8-%D0%BF%D0%BE-%D0%BA%D0%BB%D0%B8%D0%BA%D1%83">деталей задачи по клику</a>.</li>
<li>Сравнить текущую <a href="#%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">версию</a> с предидущими</li>
<li>Включить отображение всех элементов архитектуры.</li>
<li>Включить отображение связей процесса.</li>
<li>Включить комментарии.</li>
</ol>
<h4 id="детали-по-клику" tabindex="-1"><a class="header-anchor" href="#детали-по-клику"><span>Детали по клику</span></a></h4>
<p>После включения соответсвующей настройки в правом меню появляется возможность:</p>
<ul>
<li>Поделиться ссылкой на конкретный элемент</li>
<li>Найти выбранный элемент на схеме</li>
<li>Установить <a href="#%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D0%B2">связь</a> с Call Activity</li>
<li>Установить роль</li>
<li>Установить элементы архитектуры</li>
<li>Прочитать описание выбранной задачи</li>
<li>Просмотреть и написать комментарий к выбранной задачи</li>
</ul>
<p><img src="@source/features/bpmn_editor/click-details.png" alt="image"></p>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>В этом представлении отображается схема выбранного Call Activity! Это удобный способ просматривать их содержимое с той же диаграммы, на которой оно используется.</p>
</div>
<h4 id="обеспечение-удобства-работы" tabindex="-1"><a class="header-anchor" href="#обеспечение-удобства-работы"><span>Обеспечение удобства работы</span></a></h4>
<h4 id="горячие-клавиши" tabindex="-1"><a class="header-anchor" href="#горячие-клавиши"><span>Горячие клавиши</span></a></h4>
<p>Редактор поддерживает работу с горячими клавишами, то сильно ускоряет работу при моделировании процессов:</p>
<ul>
<li><strong>ctrl + z</strong> отменить последнее действие</li>
<li><strong>ctrl + y</strong> - выполнить последнее действие</li>
<li><strong>ctrl + a</strong> - выделить всё</li>
<li><strong>ctrl + scroll</strong> - изменение масштаба</li>
<li><strong>scroll</strong> - перемещение по вертикали</li>
<li><strong>shift + scroll</strong> - перемещение по горизонтали</li>
<li><strong>shift + click</strong> - выбрать элементы группой</li>
<li><strong>ctrl + click</strong> - выделять элементы по одному в группу</li>
<li><strong>alt + 1...8</strong> - Включить отображение соответствующих оверлеев</li>
<li><strong>ctrl+f</strong> - Открыть меню поиска элементов</li>
</ul>
<h3 id="качество-бизнес-процессов-bpmn" tabindex="-1"><a class="header-anchor" href="#качество-бизнес-процессов-bpmn"><span>Качество бизнес-процессов BPMN</span></a></h3>
<h4 id="симуляция-токена" tabindex="-1"><a class="header-anchor" href="#симуляция-токена"><span>Симуляция токена</span></a></h4>
<h4 id="оценка" tabindex="-1"><a class="header-anchor" href="#оценка"><span>Оценка</span></a></h4>
<h4 id="расчет-длительности-сценариеи" tabindex="-1"><a class="header-anchor" href="#расчет-длительности-сценариеи"><span>Расчет длительности сценарией</span></a></h4>
<h3 id="версионирование" tabindex="-1"><a class="header-anchor" href="#версионирование"><span>Версионирование</span></a></h3>
<p>Система автоматически создает версии диаграмм вот по таким поводам:</p>
<ul>
<li>Прошло больше 30 изменений диаграммы</li>
<li>Кто-то (не владелец процесса и не пред.автор изменения) внес изменения в диаграмму
Это позволяет <strong>всегда</strong> восстановить пред.версию и посмотреть разницу. Автор диаграммы получает е-мейл уведомление, если в его диаграмме создали новую версию.</li>
</ul>
<p>Так же система сохраняет версии описания задач.</p>
<h4 id="как-вернуть-версию-процесса" tabindex="-1"><a class="header-anchor" href="#как-вернуть-версию-процесса"><span>Как вернуть версию процесса</span></a></h4>
<ol>
<li>Если вы хотите вернуть версию процесса, то найдите на главной странице карточку процесса и нажмите в верхний правый угол, выберите &quot;Все версии&quot;:
<img src="@source/features/bpmn_editor/restore-versions-1.png" alt="image"></li>
<li>Выберете интересующую версию и нажмите <strong>посмотреть версию</strong>.</li>
<li>В открывшемся окне нажмите <strong>&quot;установить как текущую&quot;</strong>.</li>
</ol>
<h4 id="сравнение-версии" tabindex="-1"><a class="header-anchor" href="#сравнение-версии"><span>Сравнение версий</span></a></h4>
<h3 id="согласование" tabindex="-1"><a class="header-anchor" href="#согласование"><span>Согласование</span></a></h3>
<h3 id="импорт-и-экспорт-процессов-в-bpmn" tabindex="-1"><a class="header-anchor" href="#импорт-и-экспорт-процессов-в-bpmn"><span>Импорт и экспорт процессов в BPMN</span></a></h3>
<h3 id="связь-процессов" tabindex="-1"><a class="header-anchor" href="#связь-процессов"><span>Связь процессов</span></a></h3>
<h3 id="сравнение-as-is-и-to-be" tabindex="-1"><a class="header-anchor" href="#сравнение-as-is-и-to-be"><span>Сравнение AS-IS и TO-BE</span></a></h3>
<h2 id="редактор-групп-процессов" tabindex="-1"><a class="header-anchor" href="#редактор-групп-процессов"><span>Редактор групп процессов</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Группы процессов работают только на тарифах TEAM и выше.</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Предупреждение</p>
<p>Функционал недавно выпущен и может содержать ошибки. Сообщайте о любых ошибках в чат в приложении, мы оперативно их устраним.</p>
</div>
<p>Группы процессов это отличная возможность моделировать процессы сверху-вниз. Вы можете смотреть на группы процессов как на простую иерархию, бизнес-возможности(Business Capability) или бизнес-функции.</p>
<p><img src="@source/features/bpmn_editor/diagram-group.png" alt="image"></p>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Вложенность групп неограничена, но по практике лучше не использовать больше 3-4 уровней, а сложные структуры проектировать через вложенность диаграммы групп в диаграммы групп.</p>
</div>
<h4 id="создание-группы-процессов" tabindex="-1"><a class="header-anchor" href="#создание-группы-процессов"><span>Создание группы процессов</span></a></h4>
<p>Создать группу процессов можно так:
<img src="@source/features/bpmn_editor/create-group.png" alt="image"></p>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Групп процессов может быть сколько угодно! Это значит что вы можете формировать разные иерархии для разных целей. И этими группами можно так же <a href="#%D0%BF%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F-%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BE%D0%B8">делиться по ссылке</a>. А еще работаю <a href="#%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">комментарии</a>.</p>
</div>
<h4 id="как-работать-с-группами" tabindex="-1"><a class="header-anchor" href="#как-работать-с-группами"><span>Как работать с группами</span></a></h4>
<ol>
<li>Добавьте группу нужного размера:<br>
<img src="@source/features/bpmn_editor/create-group-1.png" alt="image"></li>
<li>Двойным кликом на группу откройте меню редактирования группы:
<img src="@source/features/bpmn_editor/create-group-2.png" alt="image"></li>
<li>Укажите информацию о группе:
<ul>
<li>Название</li>
<li>Цвет</li>
<li>Описание</li>
<li>Приоритет (возможно использовать для фильтрации)</li>
<li>Уровень (возможно использовать для фильтрации)</li>
</ul>
</li>
<li>Укажите связь группы с реализацией. Тут 2 возможности:
<ul>
<li><strong>Создать новую</strong> - создастся &quot;заглушка&quot; процесса (если выбрать BPMN) или группы процессов (если выбрать BCM). Отличная возможность приступить к реализации позднее или раздать задачи бизнес-аналиткам для моделирования.</li>
<li><strong>Существующая схема</strong> - позволяет выбрать уже существующую реализацию процесса или группы процессов. Отлично подойдет, если вы из существующих процессов формируете иерархию. <strong>Существующая схема может быть привязана к любому количеству групп</strong>.</li>
</ul>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Привязка реализации позволяет отслеживать статус работы над реализацией и визуализировать ваш процесс по моделированию всей иерархии!
<img src="@source/features/bpmn_editor/create-group-3.png" alt="image"></p>
</div>
<ol start="5">
<li>
<p>Формируйте группы и перемещайте их друг в друга, чтобы отобразить иерархию. Чтобы вытащить группы другой группы, зажмите <strong>CTRL</strong> и перемещайте ее за границу родителя.</p>
</li>
<li>
<p>Используйте правое меню для навигации или просмотра фильтра групп. В фильтре работают:</p>
<ul>
<li>Фильтр по названию группы</li>
<li>Фильтр по названию родительской группы</li>
<li>Фильтр по статусу привязанного процесса (new, progress, approve, done )</li>
<li>Фильтр по типу (BPMN, BCM)</li>
<li>Фильтр по названию связанного процесса</li>
</ul>
</li>
<li>
<p>Используйте фильтр и навигируйтесь по иерархии кликом на симол лупы с картой.<br>
<img src="@source/features/bpmn_editor/create-group-4.png" alt="image"></p>
</li>
</ol>
<h4 id="горячие-клавиши-1" tabindex="-1"><a class="header-anchor" href="#горячие-клавиши-1"><span>Горячие клавиши</span></a></h4>
<p>Редактор групп поддерживает горячие клавиши:</p>
<ul>
<li><strong>CTRL+Z</strong> - отменить последнее действие.</li>
<li><strong>CTRL+Y</strong> - повторить последнее действие.</li>
<li><strong>CTRL+C</strong> - скопировать группу (без дочерних).</li>
<li><strong>CTRL+V</strong> - вставить группу.</li>
<li><strong>DEL</strong> - удалить группу с дочерними.</li>
</ul>
<h2 id="редактор-оргструктуры" tabindex="-1"><a class="header-anchor" href="#редактор-оргструктуры"><span>Редактор оргструктуры</span></a></h2>
<p>Stormbpmn позволяет моделировать оргструктуру предпрятия, соединять ее с ролями на бизнес-процессах и конкретными сотрудниками. Такая связь может отнозначно ответить, что именно делает конкретная должность или даже сотрудник в бизнес-процессах.
<img src="@source/features/bpmn_editor/orgchart-1.png" alt="image"></p>
<p>Решение такой задачи базируется на нескольких тезисах:</p>
<ul>
<li>У задачи может быть только 1 роль</li>
<li>Должность может выполнять сколько угодно ролей</li>
<li>Роль может выполняться каким угодно количеством должностей</li>
<li>Сотрудник может быть назначен на любое количество должностей</li>
<li>Сотрудник не может быть назначен на роль напрямую</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Оргструктура работает на подписке TEAM и выше.</p>
</div>
<p><img src="@source/features/bpmn_editor/orgchart-2.png" alt="image"></p>
<h4 id="меню-и-редактор" tabindex="-1"><a class="header-anchor" href="#меню-и-редактор"><span>Меню и редактор</span></a></h4>
<p>Создать огрструктуру можно по <a href="https://stormbpmn.com/app/team/orgchart" target="_blank" rel="noopener noreferrer">ссылке<ExternalLinkIcon/></a>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Совет</p>
<p>Сейчас возможность создать только одну структуру на команду.</p>
</div>
<p>Верхнее меню позволяет:</p>
<ul>
<li>Скачать оргструктуру в .PNG.</li>
<li>Выровнять оргструктуру.</li>
<li>Найти на схеме конкретную должность.</li>
<li>Найти на схеме должности, участвующие в конкретном процессе.</li>
</ul>
<p><img src="@source/features/bpmn_editor/orgchart-3.png" alt="image"></p>
<p>Карточка элемента архитектуры позволяет:</p>
<ol>
<li>Посмотреть, во скольких процессах используется должность.</li>
<li>Посмотреть, сколько человек назначено на должность.</li>
<li>Открыть редактирование карточки.</li>
<li>Удалить карточку.</li>
<li>Добавить подчиненный элемент.</li>
<li>Присоединить подчиненный элемент.</li>
</ol>
<h4 id="карточка-должности" tabindex="-1"><a class="header-anchor" href="#карточка-должности"><span>Карточка должности</span></a></h4>
<p>Карточка должности позволяет:</p>
<ol>
<li>Сменить цвет, тип, название, описание должности.</li>
<li>Управлять привязкой ролей к должности.</li>
<li>Управлять привязкой сотрудников к должности.
<img src="@source/features/bpmn_editor/orgchart-4.png" alt="image"></li>
</ol>
<h4 id="заполнение-из-csv" tabindex="-1"><a class="header-anchor" href="#заполнение-из-csv"><span>Заполнение из CSV</span></a></h4>
<p>Содержимое оргструктуры может быть загружено из CSV файла (<a href="https://docs.google.com/spreadsheets/d/1xaq8ZSEKHGS-ZYH3HQtlab87TFVcUuf3tzNdHuCf4uQ/edit#gid=0" target="_blank" rel="noopener noreferrer">шаблон<ExternalLinkIcon/></a>) в разделе команды:</p>
<p><img src="@source/features/bpmn_editor/orgchart-5.png" alt="image"></p>
<h4 id="элементы-архитектуры" tabindex="-1"><a class="header-anchor" href="#элементы-архитектуры"><span>Элементы архитектуры</span></a></h4>
<h4 id="связи-процесса" tabindex="-1"><a class="header-anchor" href="#связи-процесса"><span>Связи процесса</span></a></h4>
<h4 id="копирование-между-разными-диаграммами" tabindex="-1"><a class="header-anchor" href="#копирование-между-разными-диаграммами"><span>Копирование между разными диаграммами</span></a></h4>
<h2 id="регламенты" tabindex="-1"><a class="header-anchor" href="#регламенты"><span>Регламенты</span></a></h2>
<h2 id="комментирование" tabindex="-1"><a class="header-anchor" href="#комментирование"><span>Комментирование</span></a></h2>
<h2 id="графы" tabindex="-1"><a class="header-anchor" href="#графы"><span>Графы</span></a></h2>
<h2 id="элементы-архитектуры-1" tabindex="-1"><a class="header-anchor" href="#элементы-архитектуры-1"><span>Элементы архитектуры</span></a></h2>
<h3 id="загрузка-из-csv" tabindex="-1"><a class="header-anchor" href="#загрузка-из-csv"><span>Загрузка из CSV</span></a></h3>
<h2 id="поиск" tabindex="-1"><a class="header-anchor" href="#поиск"><span>Поиск</span></a></h2>
<h2 id="теги" tabindex="-1"><a class="header-anchor" href="#теги"><span>Теги</span></a></h2>
<h2 id="папки" tabindex="-1"><a class="header-anchor" href="#папки"><span>Папки</span></a></h2>
<h2 id="роли" tabindex="-1"><a class="header-anchor" href="#роли"><span>Роли</span></a></h2>
<p>Роли это отличный инструмент для указания исполнителей задач. Под ролью понимается исполнитель конкретной задачи в процессе или процессах (т.к. Роли - это справочник, который можно переиспользовать). Роли это правильная и хорошая альтернатива дорожкам.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_2W10c0YzcI?si=Br3u2STg2zdWwIQ8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<h3 id="создание-ролеи" tabindex="-1"><a class="header-anchor" href="#создание-ролеи"><span>Создание ролей</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Создавать роли может только <strong>администратор команды</strong>. Роли - это часть платной подписки TEAM или Enterprise. Без подписки использовать их не получится.</p>
</div>
<p>С интерфейса процесса в <a href="#%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%BE%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E">контекстом меню</a>:</p>
<p><img src="@source/features/bpmn_editor/create-assignee.png" alt="image"></p>
<p>С интерфейса процесса в <a href="#%D0%BC%D0%B5%D0%BD%D1%8E-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0">меню подробностей</a>:</p>
<p><img src="@source/features/bpmn_editor/create-assignee-2.png" alt="image"></p>
<p>C отдельного представления</p>
<p>По <a href="https://stormbpmn.com/app/team/assignees/" target="_blank" rel="noopener noreferrer">ссылке<ExternalLinkIcon/></a>:<br>
<img src="@source/features/bpmn_editor/create-assignee-3.png" alt="image">
C помощью загрузки из .csv:</p>
<p>По <a href="https://stormbpmn.com/app/team" target="_blank" rel="noopener noreferrer">ссылке<ExternalLinkIcon/></a>:<br>
<img src="@source/features/bpmn_editor/create-assignee-4.png" alt="image"></p>
<h3 id="редактирование-ролеи" tabindex="-1"><a class="header-anchor" href="#редактирование-ролеи"><span>Редактирование ролей</span></a></h3>
<p>Редактирование ролей так же доступно в контекстом меню или с отдельного представления по <a href="https://stormbpmn.com/app/team/assignees/" target="_blank" rel="noopener noreferrer">ссылке<ExternalLinkIcon/></a>.</p>
<h3 id="удаление-ролеи" tabindex="-1"><a class="header-anchor" href="#удаление-ролеи"><span>Удаление ролей</span></a></h3>
<p>Удалять роли можно только с отдельного представления по <a href="https://stormbpmn.com/app/team/assignees/" target="_blank" rel="noopener noreferrer">ссылке<ExternalLinkIcon/></a>.</p>
<div class="hint-container warning">
<p class="hint-container-title">Примечание</p>
<p>Удалить роли не получится, пока они привязаны к задачам на процессах. Отвяжите их перед удалением.</p>
</div>
<p>Как мне удалить роли</p>
</div></template>


