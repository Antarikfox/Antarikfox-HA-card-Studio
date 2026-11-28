# Antarikfox Studio 4.0.5

**by Antarikfox · antarikfox.ru**

## What's new

- Dashboard card import now retains the original source configuration and displays a static analysis of images, entities and text. Reopen conversion settings without losing the source.
- Image blocks resolve Home Assistant-relative URLs, report loading failures and support automatic aspect ratios and state-dependent image fallbacks.
- Basic Bubble Card media-player configurations can be represented as native Studio blocks. Same-origin embedded Studio can use Home Assistant's card helpers.
- Dashboard selection is easier to scroll and guards against outdated asynchronous responses.
- Card conversion preserves grid options, view layout and visibility. Static analysis does not execute dynamic card templates.

## Что нового

- Импорт карточек с панели с сохранением исходного YAML и отчётом по фотографиям, текстам и сущностям.
- Улучшенное отображение фотографий: относительные URL Home Assistant, сообщения об ошибках загрузки, автоматические пропорции и изображения по состояниям.
- Нативный предпросмотр простых медиаплееров Bubble Card и поддержка помощников HA в Studio при общем origin.
- Улучшенный выбор панелей и защита от устаревших асинхронных результатов.
- При конвертации сохраняются параметры сетки, размещения и видимости. Динамические шаблоны не выполняются при статическом анализе.

## Installation / Установка

Update both files in `dist/` together. Keep their existing filenames. The optional theme is unchanged. For manual installation, update the JavaScript resource to `/local/antarikfox-glass-card.js?v=4.0.5` and reload the browser.

Обновляй оба файла одновременно, сохраняя их имена. Тема не изменялась. Для ручной установки обнови версию ресурса JS и перезагрузи браузер.

## Verification

JavaScript syntax checked with Node.js; uploaded code verified against the prepared files by Git blob SHA. Live Home Assistant integration has not been tested in this release preparation.
