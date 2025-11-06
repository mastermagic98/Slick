// ==UserScript==
// @name         Lampa - Interface Mod New + Повна локалізація UK/RU/EN
// @namespace    https://mastermagic98.github.io/Slick/
// @version      2.1
// @description  Повна локалізація інтерфейсу Lampa + розширений мод (ES5)
// @author       MasterMagic + Grok
// @match        https://lampatime.ru/*
// @match        https://lampa.mx/*
// @match        file:///*/index.html
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // ==================== ПОВНИЙ ПЕРЕКЛАД ВСІХ ЕЛЕМЕНТІВ ====================
    Lampa.Lang.add({
        maxsm_themes: {
            ru: "Темы",
            en: "Themes",
            uk: "Теми"
        },
        maxsm_settings: {
            ru: "Настройки мода",
            en: "Mod Settings",
            uk: "Налаштування моду"
        },
        maxsm_hide: {
            ru: "Скрыть элементы",
            en: "Hide elements",
            uk: "Приховати елементи"
        },
        maxsm_hide_header: {
            ru: "Скрыть шапку",
            en: "Hide header",
            uk: "Приховати шапку"
        },
        maxsm_hide_footer: {
            ru: "Скрыть футер",
            en: "Hide footer",
            uk: "Приховати футер"
        },
        maxsm_hide_scroll: {
            ru: "Скрыть прокрутку",
            en: "Hide scrollbar",
            uk: "Приховати смугу прокрутки"
        },
        maxsm_transparent: {
            ru: "Прозрачный фон",
            en: "Transparent background",
            uk: "Прозорий фон"
        },
        maxsm_blur: {
            ru: "Размытие фона",
            en: "Background blur",
            uk: "Розмиття фону"
        },
        maxsm_theme_dark: {
            ru: "Тёмная тема",
            en: "Dark theme",
            uk: "Темна тема"
        },
        maxsm_theme_light: {
            ru: "Светлая тема",
            en: "Light theme",
            uk: "Світла тема"
        },
        maxsm_theme_oled: {
            ru: "OLED чёрный",
            en: "OLED black",
            uk: "OLED чорний"
        },
        maxsm_theme_purple: {
            ru: "Фиолетовая",
            en: "Purple",
            uk: "Фіолетова"
        },
        maxsm_theme_blue: {
            ru: "Синяя",
            en: "Blue",
            uk: "Синя"
        },
        maxsm_reset: {
            ru: "Сброс настроек",
            en: "Reset settings",
            uk: "Скинути налаштування"
        },
        maxsm_saved: {
            ru: "Сохранено!",
            en: "Saved!",
            uk: "Збережено!"
        },
        maxsm_author: {
            ru: "Автор мода",
            en: "Mod author",
            uk: "Автор моду"
        },
        maxsm_version: {
            ru: "Версия мода",
            en: "Mod version",
            uk: "Версія моду"
        },
        maxsm_support: {
            ru: "Поддержать автора",
            en: "Support author",
            uk: "Підтримати автора"
        },
        maxsm_menu_main: {
            ru: "Главное меню",
            en: "Main menu",
            uk: "Головне меню"
        },
        maxsm_menu_movies: {
            ru: "Фильмы",
            en: "Movies",
            uk: "Фільми"
        },
        maxsm_menu_series: {
            ru: "Сериалы",
            en: "TV Series",
            uk: "Серіали"
        },
        maxsm_menu_bookmarks: {
            ru: "Закладки",
            en: "Bookmarks",
            uk: "Закладки"
        },
        maxsm_menu_settings: {
            ru: "Настройки",
            en: "Settings",
            uk: "Налаштування"
        },
        maxsm_search: {
            ru: "Поиск",
            en: "Search",
            uk: "Пошук"
        },
        maxsm_loading: {
            ru: "Загрузка...",
            en: "Loading...",
            uk: "Завантаження..."
        },
        maxsm_no_results: {
            ru: "Ничего не найдено",
            en: "Nothing found",
            uk: "Нічого не знайдено"
        },
        maxsm_error: {
            ru: "Ошибка загрузки",
            en: "Loading error",
            uk: "Помилка завантаження"
        },
        maxsm_play: {
            ru: "Смотреть",
            en: "Watch",
            uk: "Дивитися"
        },
        maxsm_trailer: {
            ru: "Трейлер",
            en: "Trailer",
            uk: "Трейлер"
        },
        maxsm_season: {
            ru: "Сезон",
            en: "Season",
            uk: "Сезон"
        },
        maxsm_episode: {
            ru: "Серия",
            en: "Episode",
            uk: "Серія"
        },
        maxsm_quality: {
            ru: "Качество",
            en: "Quality",
            uk: "Якість"
        },
        maxsm_source: {
            ru: "Источник",
            en: "Source",
            uk: "Джерело"
        },
        maxsm_subtitles: {
            ru: "Субтитры",
            en: "Subtitles",
            uk: "Субтитри"
        },
        maxsm_voice: {
            ru: "Озвучка",
            en: "Voice",
            uk: "Озвучка"
        },
        maxsm_player_speed: {
            ru: "Скорость",
            en: "Speed",
            uk: "Швидкість"
        },
        maxsm_player_next: {
            ru: "Следующая серия",
            en: "Next episode",
            uk: "Наступна серія"
        },
        maxsm_player_prev: {
            ru: "Предыдущая серия",
            en: "Previous episode",
            uk: "Попередня серія"
        }
    });

    // ==================== ЗАПУСК МОДУ ====================
    function initMod() {
        if (window.lampa_settings_readys) {
            startMod();
        } else {
            document.addEventListener('lampa_settings_ready', startMod);
        }
    }

    function startMod() {
        // Додаємо пункт у головне меню
        Lampa.Menu.add({
            title: Lampa.Lang.translate('maxsm_themes'),
            icon: '',
            items: [
                {
                    title: Lampa.Lang.translate('maxsm_settings'),
                    icon: '',
                    action: function () {
                        openSettings();
                    }
                }
            ]
        });

        // ==================== ВІКНО НАЛАШТУВАНЬ ====================
        function openSettings() {
            var html = '<div class="maxsm-settings">';
            html += '<div class="maxsm-title">' + Lampa.Lang.translate('maxsm_settings') + '</div>';
            html += '<div class="maxsm-item"><label><input type="checkbox" id="hide_header"> ' + Lampa.Lang.translate('maxsm_hide_header') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="checkbox" id="hide_footer"> ' + Lampa.Lang.translate('maxsm_hide_footer') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="checkbox" id="hide_scroll"> ' + Lampa.Lang.translate('maxsm_hide_scroll') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="checkbox" id="transparent_bg"> ' + Lampa.Lang.translate('maxsm_transparent') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="checkbox" id="blur_bg"> ' + Lampa.Lang.translate('maxsm_blur') + '</label></div>';

            // Теми
            html += '<div class="maxsm-title" style="margin-top:20px;">' + Lampa.Lang.translate('maxsm_themes') + '</div>';
            html += '<div class="maxsm-item"><label><input type="radio" name="theme" value="dark" id="theme_dark"> ' + Lampa.Lang.translate('maxsm_theme_dark') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="radio" name="theme" value="light" id="theme_light"> ' + Lampa.Lang.translate('maxsm_theme_light') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="radio" name="theme" value="oled" id="theme_oled"> ' + Lampa.Lang.translate('maxsm_theme_oled') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="radio" name="theme" value="purple" id="theme_purple"> ' + Lampa.Lang.translate('maxsm_theme_purple') + '</label></div>';
            html += '<div class="maxsm-item"><label><input type="radio" name="theme" value="blue" id="theme_blue"> ' + Lampa.Lang.translate('maxsm_theme_blue') + '</label></div>';

            html += '<div class="maxsm-buttons">';
            html += '<button id="maxsm_save">' + Lampa.Lang.translate('maxsm_saved') + '</button>';
            html += '<button id="maxsm_reset">' + Lampa.Lang.translate('maxsm_reset') + '</button>';
            html += '</div></div>';

            Lampa.Modal.open({
                title: Lampa.Lang.translate('maxsm_settings'),
                html: html,
                size: 'medium',
                onClose: function () {},
                buttons: []
            });

            loadSettings();
            bindEvents();
        }

        // ==================== ЗАВАНТАЖЕННЯ НАЛАШТУВАНЬ ====================
        function loadSettings() {
            var settings = Lampa.Storage.get('maxsm_mod', '{}');
            if (typeof settings === 'string') settings = JSON.parse(settings);

            if (settings.hide_header) document.getElementById('hide_header').checked = true;
            if (settings.hide_footer) document.getElementById('hide_footer').checked = true;
            if (settings.hide_scroll) document.getElementById('hide_scroll').checked = true;
            if (settings.transparent_bg) document.getElementById('transparent_bg').checked = true;
            if (settings.blur_bg) document.getElementById('blur_bg').checked = true;
            if (settings.theme) {
                var radio = document.getElementById('theme_' + settings.theme);
                if (radio) radio.checked = true;
            }
        }

        // ==================== ПОДІЇ КНОПОК ====================
        function bindEvents() {
            document.getElementById('maxsm_save').addEventListener('click', function () {
                var settings = {
                    hide_header: document.getElementById('hide_header').checked,
                    hide_footer: document.getElementById('hide_footer').checked,
                    hide_scroll: document.getElementById('hide_scroll').checked,
                    transparent_bg: document.getElementById('transparent_bg').checked,
                    blur_bg: document.getElementById('blur_bg').checked,
                    theme: document.querySelector('input[name="theme"]:checked').value
                };

                Lampa.Storage.set('maxsm_mod', JSON.stringify(settings));
                Lampa.Modal.close();
                setTimeout(function () { location.reload(); }, 600);
            });

            document.getElementById('maxsm_reset').addEventListener('click', function () {
                Lampa.Storage.set('maxsm_mod', '{}');
                Lampa.Modal.close();
                setTimeout(function () { location.reload(); }, 600);
            });
        }

        // ==================== ЗАСТОСУВАННЯ НАЛАШТУВАНЬ ====================
        function applySettings() {
            var settings = Lampa.Storage.get('maxsm_mod', '{}');
            if (typeof settings === 'string') settings = JSON.parse(settings);

            var head = document.querySelector('.head');
            var foot = document.querySelector('.foot');

            if (settings.hide_header && head) head.style.display = 'none';
            if (settings.hide_footer && foot) foot.style.display = 'none';
            if (settings.hide_scroll) document.body.classList.add('hide-scroll');
            if (settings.transparent_bg) document.body.classList.add('transparent-bg');
            if (settings.blur_bg) document.body.classList.add('blur-bg');
            if (settings.theme) document.body.setAttribute('data-theme', settings.theme);
        }

        // ==================== СТИЛІ ====================
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = [
            '.hide-scroll::-webkit-scrollbar { display: none !important; }',
            '.transparent-bg { background: transparent !important; }',
            '.blur-bg { backdrop-filter: blur(12px) !important; -webkit-backdrop-filter: blur(12px) !important; }',
            'body[data-theme="oled"] { background: #000 !important; }',
            'body[data-theme="purple"] { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; }',
            'body[data-theme="blue"] { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) !important; }',
            'body[data-theme="light"] { background: #f5f5f5 !important; }',
            '.maxsm-settings { padding: 20px; line-height: 1.6; }',
            '.maxsm-title { font-weight: bold; font-size: 1.3em; margin: 20px 0 12px; color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }',
            '.maxsm-item { margin: 12px 0; }',
            '.maxsm-item label { cursor: pointer; }',
            '.maxsm-buttons { margin-top: 30px; text-align: center; }',
            '.maxsm-buttons button { padding: 12px 28px; margin: 0 12px; font-size: 1em; border-radius: 8px; }'
        ].join('\n');
        document.head.appendChild(style);

        // Застосовуємо після повного завантаження
        setTimeout(applySettings, 1200);
    }

    // ==================== СТАРТ ====================
    initMod();
})();
