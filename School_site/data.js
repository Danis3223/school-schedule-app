// data.js

const scheduleData = {
    // Список классов (для селекта)
    classes: [
        "5А", "6А", "7А", "8А", "9А", "10А", "11А"
    ],
    // Список учителей (для селекта)
    teachers: [
        "Кашапова Р.Р.",   // Математика, физика, геометрия, алгебра
        "Гайсина Э.И.",    // литература, русский язык
        "Уразметова Р.Р.", // ИЗО, Музыка
        "Хусаинова Х.Х.",  // Биология, химия 
        "Валиев Ш.Н.",     // физкультура, технология
        "Хамзина Д.С.",    // Английский, немецкий
        "Ягафаров Ю.Г.",   // история, обществознание, география
        "Гайфуллина А.А."  // информатика
    ],
    // Массив уроков
    lessons: [
        // ===== 5А класс =====
        { className: "5А", day: "Пн", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "5А", day: "Пн", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "5А", day: "Пн", number: 3, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "5А", day: "Пн", number: 4, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "5А", day: "Вт", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "5А", day: "Вт", number: 2, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "5А", day: "Вт", number: 3, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "5А", day: "Ср", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "5А", day: "Ср", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "5А", day: "Ср", number: 3, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "5А", day: "Чт", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "5А", day: "Чт", number: 2, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "5А", day: "Чт", number: 3, subject: "Технология", teacher: "Валиев Ш.Н.", room: 25 },
        { className: "5А", day: "Пт", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "5А", day: "Пт", number: 2, subject: "ИЗО", teacher: "Уразметова Р.Р.", room: 25 },
        { className: "5А", day: "Пт", number: 3, subject: "Музыка", teacher: "Уразметова Р.Р.", room: 31 },

        // ===== 6А класс =====
        { className: "6А", day: "Пн", number: 1, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "6А", day: "Пн", number: 2, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "6А", day: "Пн", number: 3, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "6А", day: "Пн", number: 4, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "6А", day: "Вт", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "6А", day: "Вт", number: 2, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "6А", day: "Вт", number: 3, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "6А", day: "Ср", number: 1, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "6А", day: "Ср", number: 2, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "6А", day: "Ср", number: 3, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "6А", day: "Чт", number: 1, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "6А", day: "Чт", number: 2, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "6А", day: "Чт", number: 3, subject: "Технология", teacher: "Валиев Ш.Н.", room: 25 },
        { className: "6А", day: "Пт", number: 1, subject: "Математика", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "6А", day: "Пт", number: 2, subject: "Музыка", teacher: "Уразметова Р.Р.", room: 31 },
        { className: "6А", day: "Пт", number: 3, subject: "ИЗО", teacher: "Уразметова Р.Р.", room: 25 },

        // ===== 7А класс =====
        { className: "7А", day: "Пн", number: 1, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "7А", day: "Пн", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "7А", day: "Пн", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "7А", day: "Пн", number: 4, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "7А", day: "Вт", number: 1, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "7А", day: "Вт", number: 2, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "7А", day: "Вт", number: 3, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "7А", day: "Ср", number: 1, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "7А", day: "Ср", number: 2, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "7А", day: "Ср", number: 3, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "7А", day: "Чт", number: 1, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "7А", day: "Чт", number: 2, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "7А", day: "Чт", number: 3, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "7А", day: "Пт", number: 1, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "7А", day: "Пт", number: 2, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "7А", day: "Пт", number: 3, subject: "Технология", teacher: "Валиев Ш.Н.", room: 25 },

        // ===== 8А класс =====
        { className: "8А", day: "Пн", number: 1, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "8А", day: "Пн", number: 2, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "8А", day: "Пн", number: 3, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "8А", day: "Пн", number: 4, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "8А", day: "Вт", number: 1, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "8А", day: "Вт", number: 2, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "8А", day: "Вт", number: 3, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "8А", day: "Ср", number: 1, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "8А", day: "Ср", number: 2, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "8А", day: "Ср", number: 3, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 22 },
        { className: "8А", day: "Чт", number: 1, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "8А", day: "Чт", number: 2, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "8А", day: "Чт", number: 3, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "8А", day: "Пт", number: 1, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "8А", day: "Пт", number: 2, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "8А", day: "Пт", number: 3, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },

        // ===== 9А класс =====
        { className: "9А", day: "Пн", number: 1, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "9А", day: "Пн", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "9А", day: "Пн", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "9А", day: "Вт", number: 1, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "9А", day: "Вт", number: 2, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "9А", day: "Вт", number: 3, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "9А", day: "Ср", number: 1, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "9А", day: "Ср", number: 2, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "9А", day: "Ср", number: 3, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "9А", day: "Чт", number: 1, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "9А", day: "Чт", number: 2, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "9А", day: "Чт", number: 3, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "9А", day: "Пт", number: 1, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "9А", day: "Пт", number: 2, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "9А", day: "Пт", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },

        // ===== 10А класс =====
        { className: "10А", day: "Пн", number: 1, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "10А", day: "Пн", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "10А", day: "Пн", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "10А", day: "Пн", number: 4, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "10А", day: "Вт", number: 1, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "10А", day: "Вт", number: 2, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "10А", day: "Вт", number: 3, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "10А", day: "Вт", number: 4, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "10А", day: "Ср", number: 1, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "10А", day: "Ср", number: 2, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "10А", day: "Ср", number: 3, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "10А", day: "Ср", number: 4, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "10А", day: "Чт", number: 1, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "10А", day: "Чт", number: 2, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "10А", day: "Чт", number: 3, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "10А", day: "Чт", number: 4, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "10А", day: "Пт", number: 1, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "10А", day: "Пт", number: 2, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "10А", day: "Пт", number: 3, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "10А", day: "Пт", number: 4, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },

        // ===== 11А класс =====
        { className: "11А", day: "Пн", number: 1, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "11А", day: "Пн", number: 2, subject: "Русский язык", teacher: "Гайсина Э.И.", room: 14 },
        { className: "11А", day: "Пн", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "11А", day: "Пн", number: 4, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "11А", day: "Пн", number: 5, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "11А", day: "Вт", number: 1, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "11А", day: "Вт", number: 2, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "11А", day: "Вт", number: 3, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "11А", day: "Вт", number: 4, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "11А", day: "Вт", number: 5, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "11А", day: "Ср", number: 1, subject: "Литература", teacher: "Гайсина Э.И.", room: 14 },
        { className: "11А", day: "Ср", number: 2, subject: "Алгебра", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "11А", day: "Ср", number: 3, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 },
        { className: "11А", day: "Ср", number: 4, subject: "География", teacher: "Ягафаров Ю.Г.", room: 19 },
        { className: "11А", day: "Ср", number: 5, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "11А", day: "Чт", number: 1, subject: "Химия", teacher: "Хусаинова Х.Х.", room: 34 },
        { className: "11А", day: "Чт", number: 2, subject: "Биология", teacher: "Хусаинова Х.Х.", room: 32 },
        { className: "11А", day: "Чт", number: 3, subject: "История", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "11А", day: "Чт", number: 4, subject: "Физкультура", teacher: "Валиев Ш.Н.", room: "Спортзал" },
        { className: "11А", day: "Пт", number: 1, subject: "Геометрия", teacher: "Кашапова Р.Р.", room: 12 },
        { className: "11А", day: "Пт", number: 2, subject: "Обществознание", teacher: "Ягафаров Ю.Г.", room: 8 },
        { className: "11А", day: "Пт", number: 3, subject: "Информатика", teacher: "Гайфуллина А.А.", room: 27 },
        { className: "11А", day: "Пт", number: 4, subject: "Английский язык", teacher: "Хамзина Д.С.", room: 21 },
        { className: "11А", day: "Пт", number: 5, subject: "Физика", teacher: "Кашапова Р.Р.", room: 17 }
    ]
};