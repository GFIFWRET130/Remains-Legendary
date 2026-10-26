# Planned direction / Что планировалось

**Development is on indefinite hiatus.** This is an archive of the owner's personal direction, not a delivery promise. Implemented milestones are listed in the [changelog](../CHANGELOG.md). The original Russian plan was written when its heading still said 0.3.4; the final local prototype is 0.4.8.

Full source documents:

- [Original master plan, Russian](plans/MASTER-PLAN.md).
- [Accepted amendments, Russian](plans/PLAN-ADDENDUM.md).
- [Implementation/progress record, Russian](plans/PROGRESS.md).

## Main areas

1. **Skills, perks and magic.** Legendary ranks and the maid outfit exist; most further progression ideas remain open. Multilightning is the first new spell prototype. Candidates include magical mines, discs, a reflecting shield, detection and an ice spear, after checking for overlap with existing game mechanics.
2. **Advanced telekinesis.** Multi-weapon mode, initially two identical guns; a separate enemy-grab/throw/crush/human-shield mode. The shield mode may allow one conventional gun, but not simultaneous multi-weapon mode. Costs should depend on load and held objects. Not implemented.
3. **Bullet-time.** A prototype replacing/extending the existing SATS/ЗПС behavior only after testing. All related skills/perks/resources and the ability to inspect enemy stats must be carried over to the new mechanic. Not implemented; the original system remains.
4. **Location difficulty.** Five freely selectable modes before every entry, separate from global difficulty. Factory is the first test location, implemented as a prototype in 0.4.8. Other locations, final rewards and final numeric balance remain unfinished.
5. **Enemies and behavior.** New raiders, ghouls, mutants, robots, wasteland creatures, elites and bosses, initially on existing AI. Selected behavior candidates: medics, commanders, shields, engineers, sniper spotters, retreat/panic, ambushes, kamikazes and patrols.
6. **Weapons, armor and resources.** Extend the experimental arsenal; add outfits, armor systems, amulets, replaceable plates, set bonuses, salvage, components, stashes, varied safes, damaged pre-war items, collectibles, recycling, magazines, geological finds and robot parts. Check what already exists before adding duplicates.
7. **Trade and economy.** Investigate whether sold items are being displaced. Candidates: merchant orders/specializations, shortages, scrap buyers, reputation discounts, unique trades, rumors and transaction history. Not implemented as a new economy system.
8. **Locations and exploration.** Improve existing side-view locations, then add regions, secret routes, electric traps, generators and laboratories. The game remains a 2D side-view game, not an isometric conversion.
9. **Littlepip's Hideout.** A modest permanent base with storage, a bed, workbench, medical area, mannequins, weapon stands, display cases, sorting and practical upgrades. Not a large construction simulator; not implemented.
10. **Interface and quality of life.** Continue improving input, feedback, accessibility and the wheel. Some UI conveniences are implemented; a complete overhaul is not.
11. **Expanded Wasteland / longer-term 1.x–2.0 ideas.** Regions, factions, quests, companions and bosses, plus story DLC concepts, playable-character concepts and cybernetics. These are ideas with large technical and rights dependencies, not playable campaigns.

The full plan contains additional narrative details and version labels. Those labels are aspirations, not completed release numbers.

## Explicitly changed decisions

- New grenade development was stopped after **one flashbang**. Do not treat the earlier sticky/smoke/magnetic/decoy/cluster-grenade list as an outstanding commitment. Original explosives remain in the game.
- All five location difficulty modes are available **at every entry**, without permanent first-visit locking or sequential unlocking. Changing mode must not clear quests, story progress or obtained items.
- Difficulty values are provisional. The 0.4.8 reward prototype changes XP only; improved item/chest rewards were not implemented.
- The project stayed on Adobe AIR / Flash / ActionScript. A new-engine port and a general third-party mod framework were not agreed deliverables.

## По-русски

**Разработка приостановлена на неопределённый срок.** Это сохранённое личное видение автора, а не обещание сделать всё перечисленное.

Планировались дальнейшие навыки, перки и магия; мультиоружейный телекинез и захват врагов; замедление времени с переносом всех бонусов ЗПС и просмотра характеристик врагов; пять сложностей отдельных локаций; новые враги и поведение; экипировка, ресурсы, экономика, исследование, убежище Литлпип, интерфейс и большие сюжетные/мировые дополнения вплоть до условной 2.0.

Готовая часть перечислена в CHANGELOG.md. Большинство крупных направлений не реализовано. Полные формулировки и сюжетные задумки сохранены в исходном плане. При продолжении важно сначала проверить, нет ли похожей функции в оригинале, и не выдавать прототип за завершённую систему.

Последние решения автора: новые гранаты закончить одной светошумовой; сложности свободно выбирать перед каждым входом; числовой баланс считать тестовым; сюжет и полученные предметы сменой режима не сбрасывать.
