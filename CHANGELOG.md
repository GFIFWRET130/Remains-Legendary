# Version history / История версий

Latest local prototype: **0.4.8**. Public community handoff: **2026-10-27**. Development is on indefinite hiatus.

This history was reconstructed from development notes, retained checkpoints and verification records. It is not a claim that every old build was publicly released or passed the current tests. Older broken prototypes are not provided as ready-to-play releases. The public Git history starts with this handoff.

## 0.4.8 — Factory location difficulty / Сложность Завода

Five freely selectable I–V modes before each Factory entry, parameter preview, confirmation and cancel/Esc. Separate HP, damage, XP and additional elite profiles. Re-entry can change V → I in an existing Factory without stacking buffs, reviving dead enemies or clearing game progress. Boss phase changes are preserved during rescaling. Only the Factory is connected; item/chest rewards are unchanged. Numbers remain provisional.

Пять режимов перед каждым входом на Завод, свободная смена при повторном заходе, предпросмотр и отмена. Пересчитываются HP, урон, опыт и дополнительная элита; глобальная сложность, сюжет и инвентарь отдельно. Сундуки и редкость вещей ещё не менялись. Проверены вход, выход, сохранение выбора, возврат V → I и базовая работа боссов; полного прохождения нет.

## 0.4.7 — Projectiles, magic and skill audit / Снаряды, магия и навыки

Eight distinct projectile concepts implemented: Northern Lights chill; Lunar Debt mark; Reverse Rainbow converging rays; Storm in a Jar electric orb; Surprise plasma shards; Good Morning sonic projectile; Ash Star burning plasma; matching rocket for Hello, Ceiling. Added Multilightning with I/II variants for 3/5 targets. Audited per-point/rank skill effects and showed the next legendary bonus at rank 5.

Восемь особых снарядов с прототипными эффектами, мультимолния I/II на 3/5 врагов, проверка навыков и предпросмотр легендарного ранга 6. Для мультимолнии выдаётся I уровень; новый способ получения II уровня не реализован.

## 0.4.6 — One flashbang / Одна светошумовая граната

Added one grenade type: a two-second fuse, five-second blindness, two-second contusion, wall checks, mechanical immunity and self-blinding risk, without direct HP damage. Six issued for testing. The owner cancelled the rest of the new-grenade branch; original explosives remain.

Одна светошумовая граната, 6 штук для проверки. Ослепление 5 секунд и контузия 2 секунды без прямого HP-урона. Остальные новые гранаты отменены по решению автора; исходная взрывчатка сохранена.

## 0.4.5 — Input, dialogue and version fixes / Исправления интерфейса

Fixed weapon-wheel mouse access through disabled HUD ancestors and dialogue XML lookups. Strengthened input regression checks. Central version text now updates the main menu and native window title without changing the original save-format version.

Исправлены реальные причины некликабельности колеса и пропавших диалогов. Номер сборки добавлен в меню и заголовок окна. Синтетическая отправка событий сама по себе ранее не подтверждала доступность кнопок; проверки усилены.

## 0.4.4 — Weapon wheel / Колесо оружия

Nine categories, concrete weapon selection, pages, back/cancel, preserved quick slots and ammo selection, and a setting to restore the original selector. Time behavior unchanged. Subsequent manual feedback exposed input/dialogue regressions corrected in 0.4.5.

Девять категорий оружия, страницы, выбор мышью и отмена. Быстрые слоты и выбор боеприпасов сохранены. Исправления после ручной проверки вошли в 0.4.5.

## 0.4.3 — Changelog and .50 MG migration / Журнал и .50 MG

Added an in-game Legendary changelog separate from the normal event log. Vigilance changed from the initial 10 mm prototype to .50 MG; old loaded rounds are refunded during migration. Arsenal verification continued.

Добавлен журнал изменений. «Бдительность» переведена на .50 MG с возвратом прежних патронов из магазина. В ранних заметках 0.4 она ещё указана с 10 мм — это историческое значение.

## 0.4.2 — Twenty more weapons / Ещё двадцать пушек

Added 20 AI-assisted weapon concepts and prototype definitions on native weapon mechanics: firearms, energy weapons, explosives and heavy weapons. The test kit reached 27 weapons plus five outfits. The .50 MG decision for Vigilance was made during this arsenal phase and finalized in the migration/changelog follow-up. See [the arsenal data](data/arsenal20.json).

20 новых пушек с отдельными изображениями и штатными базовыми механиками. Комплект: 27 оружий и пять костюмов. Баланс предварительный.

## 0.4.1 — Armor rendering / Внешний вид брони

Separate code-drawn outfit layers on the pony model, preserving original animation resources. Cat, maid, Stable 99, raider junk and Aurora armor. Aurora's folded side wings are decorative and do not grant flight. Rendering is a simplified adaptation, not a pixel-accurate reproduction of concept art; visual shortcomings remained.

Упрощённые отдельные детали костюмов поверх модели пони. Крылья Авроры сложены по бокам и не дают полёт. Внешний вид остался одним из незавершённых направлений.

## 0.4 / 0.4.0 — Initial complete item pack / Первый общий комплект

Seven weapons: Death of Insects, Bread, Valera, Shining Sun (earlier Golden Glow), Excalibur, Vigilance and Police Baton. Five outfits: Cat, Maid, Stable 99, Raider and Aurora. Automatic backpack testing grants; Bread's 5% heal-50 proc; maid effective +1 rank; trade/dodge/movement bonuses; Excalibur armor penetration and Shining Sun's extra enemy miss chance.

Семь оружий и пять костюмов, выдаваемых для теста в рюкзак. «Хлеб» с шансом 5% лечит на 50 HP, горничная даёт +1 ранг вплоть до 11, мечи и костюмы получают согласованные прототипные свойства.

## 0.3.4 — Resize safety / Защита изменения размера

Guarded world resizing while required scene objects are absent, following the reported World.resizeScreen/MainMenu.resizeDisplay null-reference failure.

Защита изменения размера окна на неполностью созданной сцене.

## 0.3.3 — Skill bonus repair / Исправление бонусов навыков

Repaired skill lookup/application so ordinary per-point and rank 1–5 effects coexist with legendary ranks. Dynamic XML attribute access and explicit ID searches avoided compiler-corrupted E4X filters.

Восстановлено применение обычных бонусов и совместная работа с легендарными рангами; обход ошибок компиляции XML-фильтров.

## 0.3.2 — Inventory/menu safety / Предпросмотр и меню

Inventory/item preview and information lookup fixes following the PipPage/setIco/infoItem/PipPageInv null-reference reports.

Исправления отображения информации и предпросмотра предметов после ошибок PipPage.

## 0.3.1 — Weapon initialization hotfix / Инициализация оружия

Hotfixes around the new pistol's decoration and weapon-animation initialization, including access to protected animated state. These checkpoint labels are reconstructed from retained backups; the modern regression results should not be attributed to these early builds.

Исправления инициализации нового оружия и доступа к состоянию анимации. Обозначения ранних контрольных версий восстановлены по резервным копиям; нынешние результаты проверок к ним не относятся.

## 0.3 — Death of Insects and safer patching / Первый пистолет

Introduced the plasma pistol with energy-weapon rank-5 requirement, insect damage bonus and test backpack grant. Legendary bonus descriptions and main-menu return were developed in this early phase. Reduced reliance on recompiling the shared Weapon class; ordinary animations and boss initialization became explicit regression concerns.

«Смерть насекомых», ранг 5 энергомагического оружия, бонус против насекомых и выдача для проверки. Описания легендарных бонусов, возврат в главное меню и работа над сохранностью штатных анимаций.

## 0.2 — Legendary effect prototype / Прототип эффектов

Developed effects beyond rank 5 and purchase/refund behavior. Early iterations had runtime and animation regressions and required later repairs. This was not a finished balance pass.

Развитие эффектов рангов выше 5 и списания/возврата очков. Ранние ошибки исправлялись в следующих сборках; полноценной балансировки не было.

## 0.1 — Skill-cap experiment / Первый эксперимент

Isolated test copy and the initial rank-cap extension from 5 to 10. Raising the cap alone did not prove that all bonuses were applied, which led to later effect and regression work.

Отдельная тестовая копия и первоначальное расширение предела с 5 до 10. Само увеличение числа очков ещё не означало корректной работы бонусов.

## Source notes / Первичные заметки

Original Russian development notes are archived in [docs/history](docs/history). They describe the state of their own version and may contain superseded values or known-broken behavior. The plans also mention future versions 0.5–2.0; those are not completed releases.
