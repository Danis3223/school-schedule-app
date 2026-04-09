// script.js

document.addEventListener('DOMContentLoaded', () => {
    const classSelect = document.getElementById('class-select');
    const teacherSelect = document.getElementById('teacher-select');
    const container = document.getElementById('schedule-container');

    // Соответствие коротких названий дней полным
    const dayFullNames = {
        'Пн': 'Понедельник',
        'Вт': 'Вторник',
        'Ср': 'Среда',
        'Чт': 'Четверг',
        'Пт': 'Пятница',
        'Сб': 'Суббота'
    };
    const dayOrder = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    populateSelectors();
    renderLessons();

    classSelect.addEventListener('change', renderLessons);
    teacherSelect.addEventListener('change', renderLessons);

    function populateSelectors() {
        scheduleData.classes.forEach(cls => {
            const option = document.createElement('option');
            option.value = cls;
            option.textContent = cls;
            classSelect.appendChild(option);
        });

        scheduleData.teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher;
            option.textContent = teacher;
            teacherSelect.appendChild(option);
        });
    }

    function getFilteredLessons() {
        const selectedClass = classSelect.value;
        const selectedTeacher = teacherSelect.value;

        return scheduleData.lessons.filter(lesson => {
            const matchClass = selectedClass === 'all' || lesson.className === selectedClass;
            const matchTeacher = selectedTeacher === 'all' || lesson.teacher === selectedTeacher;
            return matchClass && matchTeacher;
        });
    }

    function renderLessons() {
        const filtered = getFilteredLessons();

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-message">
                    <i class="fas fa-calendar-times"></i>
                    <p>Нет уроков по выбранным фильтрам</p>
                </div>
            `;
            return;
        }

        // Сортируем уроки по дню и номеру
        filtered.sort((a, b) => {
            if (dayOrder.indexOf(a.day) !== dayOrder.indexOf(b.day)) {
                return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
            }
            return a.number - b.number;
        });

        // Группировка по дням
        const groupedByDay = {};
        filtered.forEach(lesson => {
            if (!groupedByDay[lesson.day]) {
                groupedByDay[lesson.day] = [];
            }
            groupedByDay[lesson.day].push(lesson);
        });

        // Генерация HTML с заголовками дней
        let html = '';
        dayOrder.forEach(day => {
            if (groupedByDay[day]) {
                // Заголовок дня
                html += `
                    <div class="day-header">
                        <i class="fas fa-calendar-day"></i> ${dayFullNames[day]}
                    </div>
                `;
                // Карточки уроков этого дня
                groupedByDay[day].forEach(lesson => {
                    html += `
                        <div class="lesson-card" style="animation-delay: ${Math.random() * 0.2}s;">
                            <div class="card-header">
                                <span class="lesson-day">${lesson.day}</span>
                                <span class="lesson-number">Урок ${lesson.number}</span>
                            </div>
                            <div class="lesson-subject">${lesson.subject}</div>
                            <div class="lesson-teacher">
                                <i class="fas fa-user"></i> ${lesson.teacher}
                            </div>
                            <div class="lesson-room">
                                <i class="fas fa-door-open"></i> Каб. ${lesson.room}
                            </div>
                            <div class="lesson-class">
                                <i class="fas fa-graduation-cap"></i> ${lesson.className}
                            </div>
                        </div>
                    `;
                });
            }
        });

        container.innerHTML = html;
    }
});