# Remains Legendary

**Unofficial • AI-assisted • Experimental • v0.4.8 • Development on indefinite hiatus**

[English](#remains-legendary--a-community-project) · [Русский](#remains-legendary--проект-для-сообщества) · [Version history](CHANGELOG.md) · [Plans](docs/ROADMAP.md) · [Weapon & armor art](art/README.md) · [Build](docs/BUILD.md)

## Remains Legendary — A Community Project

Remains Legendary is an unofficial modification project for Fallout Equestria: Remains.

Development of this project is currently on indefinite hiatus.

I am making my original development materials, concepts, plans, and eligible assets available so that other developers can study them, improve them, create their own versions, or continue development.

You are welcome to fork the project, experiment with its mechanics, create new weapons, armor, locations, and stories, or take the project in a completely different direction, subject to the licenses and third-party rights that apply to individual files.

The repository includes both implemented features and ideas that were never completed.

**Important:** This project is unofficial and is not affiliated with the original creators of Fallout Equestria: Remains. Third-party game assets and intellectual property remain the property of their respective owners.

Thank you to everyone who played, supported, or contributed to Remains Legendary.

### How this project was made

I developed this project with the help of AI / neural networks, including Codex/ChatGPT for code, debugging and documentation, and AI image generation for weapon and armor concepts. This is a personal experiment based on my own vision, rather than an attempt to follow an established community balance standard.

**I did not carry out a dedicated balancing pass.** Damage, prices, skill bonuses, enemy multipliers and rewards are provisional test values. Passing a technical test does not mean that a mechanic is balanced or that a whole campaign is bug-free.

I am happy for someone to take these materials, improve their quality, fix the rough edges and develop their own version. Attribution and reuse are governed by the [scoped license](LICENSE.md) and [third-party notices](THIRD_PARTY_NOTICES.md); this is not a license to the original game or its franchises.

### What actually exists in v0.4.8

- Skill ranks 6–10 with costs **2 / 2 / 3 / 3 / 4**. Original ranks 1–5 and per-point bonuses are preserved. The maid outfit adds one effective rank, including 10 → 11.
- 28 experimental weapons, including one flashbang, plus one new spell and five outfits. Missing test items are automatically issued to the backpack; this is a testing shortcut, not a balanced progression system.
- Seven initial weapon concepts and a further 20-weapon arsenal. “Vigilance” uses **.50 MG**, while “Valera” uses **.44**.
- Distinct projectiles and prototype effects for eight weapons; the launcher “Hello, Ceiling” has a rocket matching its model.
- Multilightning levels I/II: up to **3/5 different enemies**, line-of-sight checks, friendly exclusion and one resource charge per cast. Level I is issued for testing; a new player-facing acquisition system for level II was not implemented.
- A nine-category weapon wheel, main-menu return button, change log and visible mod version. Dialog and wheel input regressions were addressed.
- **Factory-only location difficulty prototype**: all five modes I–V are offered before each entry, with free selection on later entries. HP, damage, XP and additional native elites vary; global difficulty stays separate. Reward changes currently mean XP, not improved chest loot.
- 34 available AI-generated/AI-assisted images: 32 prototype weapon/armor assets and two earlier Aurora wing concepts.

### Limits and unfinished work

Armor visuals are simplified in-game adaptations and do not reproduce the concept art exactly. Several systems remain prototypes. Full campaign progression, every boss phase, long-session stability and final combat balance have not been verified. Bullet-time, multi-weapon telekinesis, most proposed spells, new enemy behavior, a personal base and story DLCs are **plans, not shipped features**.

The latest local build passed a skip-tutorial loading check, 482 skill assertions, 4,026 Factory/profile/re-entry assertions in the full integration run, and additional boss-phase checks. These are archived [technical results](docs/verification/0.4.8.txt), not a quality guarantee. Hidden game tests used 5% sound/music/footstep volume.

### What is included

This repository contains **mod additions, source patches, build tools, art, plans, version notes and verification records**. It does not contain the full game, compiled game SWFs, Adobe AIR, proprietary dependencies or personal saves. Building requires your own compatible game installation; see [BUILD.md](docs/BUILD.md).

The public Git history begins with this community handoff. Earlier version history is documented in [CHANGELOG.md](CHANGELOG.md), rather than presented as fabricated historical commits or releases.

---

## Remains Legendary — проект для сообщества

Remains Legendary — неофициальный проект модификации Fallout Equestria: Remains.

Сейчас разработка проекта приостановлена на неопределённый срок.

Я публикую собственные материалы разработки, концепты, планы и допустимые к распространению ресурсы, чтобы другие разработчики могли изучать их, улучшать, создавать свои версии или продолжить разработку.

Вы можете сделать форк проекта, экспериментировать с его механиками, создавать новое оружие, броню, локации и истории или развивать проект в совершенно другом направлении — с соблюдением лицензий и прав третьих лиц, относящихся к отдельным файлам.

В репозитории есть как реализованные возможности, так и идеи, которые так и не были завершены.

**Важно:** это неофициальный проект, не связанный с создателями оригинальной Fallout Equestria: Remains. Сторонние игровые ресурсы и интеллектуальная собственность остаются собственностью соответствующих правообладателей.

Спасибо всем, кто играл в Remains Legendary, поддерживал проект или участвовал в его развитии.

### Как создавался проект

Я делал этот проект с помощью нейросети: Codex/ChatGPT помогали с кодом, исправлениями и документацией, а генерация изображений — с концептами оружия и брони. Разрабатываю чисто по своему видению: это личный эксперимент, а не попытка соответствовать общепринятому стандарту баланса.

**Полноценной балансировкой я не занимался.** Урон, цены, бонусы навыков, множители врагов и награды — предварительные тестовые значения. Успешная техническая проверка не означает, что механика сбалансирована или всё прохождение работает без ошибок.

Я не против, чтобы кто-то взял мои наработки, довёл их до ума, исправил недочёты и сделал свою версию. Условия использования описаны в [LICENSE.md](LICENSE.md) и [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Они не передают права на оригинальную игру или сторонние вселенные.

### Что действительно реализовано в 0.4.8

- Легендарные ранги навыков 6–10 стоимостью **2 / 2 / 3 / 3 / 4** очка. Обычные ранги 1–5 и бонусы за каждое очко сохранены. Горничная добавляет эффективный ранг, включая 10 → 11.
- 28 экспериментальных оружий, включая одну светошумовую гранату, одно новое заклинание и пять костюмов. Недостающие тестовые предметы выдаются сразу в рюкзак — это временный способ проверки, не готовая система получения экипировки.
- Первые семь оружий и дополнительный арсенал из 20 пушек. «Бдительность» переведена на **.50 MG**, «Валера» использует **.44**.
- Особые снаряды и эффекты восьми пушек; ракета «Здравствуй, потолок» соответствует модели оружия.
- Мультимолния I/II на **3/5 разных врагов**: проверка стен, исключение союзников, один расход ресурсов за применение. Выдаётся I уровень; отдельная система получения II уровня не реализована.
- Колесо оружия из девяти категорий, возврат в главное меню, журнал изменений и номер сборки. Исправлялись ошибки диалогов и кликов по колесу.
- **Сложность Завода**: пять режимов I–V перед каждым входом, свободная смена при следующих заходах, отдельные множители HP, урона, опыта и дополнительная штатная элита. Глобальная сложность не меняется. Изменения наград пока касаются опыта, а не сундуков и редкости вещей.
- 34 сохранившихся изображения, созданных с помощью нейросети: 32 изображения оружия/брони для прототипа и два ранних варианта крыльев Авроры.

### Ограничения и незавершённые идеи

Броня в игре — упрощённая адаптация рисунков; она не выглядит точно как на концептах. Полное прохождение, все фазы боссов, долгие игровые сессии и итоговый баланс не проверены. Замедление времени, мультиоружейный телекинез, большинство новых заклинаний, новое поведение врагов, личная база и сюжетные DLC остаются **планами, а не готовыми функциями**.

Для последней локальной сборки прошли загрузка с пропуском обучения, 482 проверки навыков, 4026 проверок сложности/повторного входа в общем прогоне и дополнительные проверки фаз боссов. [Результаты](docs/verification/0.4.8.txt) описывают технические испытания, а не гарантируют отсутствие ошибок. Звук, музыка и шаги в скрытых игровых тестах были выставлены на 5%.

### Содержимое репозитория

Здесь опубликованы **добавления мода, патчи исходников, инструменты сборки, арты, планы, история версий и результаты проверок**. Полная игра, готовые игровые SWF, Adobe AIR, чужие библиотеки и личные сохранения не публикуются. Для сборки нужна собственная совместимая копия игры: [инструкция](docs/BUILD.md).

Публичная история Git начинается с этой передачи проекта сообществу. Старые версии описаны в [CHANGELOG.md](CHANGELOG.md); отдельные исторические коммиты и релизы задним числом не выдумывались.
