# Building from your own game / Сборка из собственной копии

This is a source-and-art handoff, not a complete game download. The full decompiled game source is deliberately not included. Four source patches plus a targeted bytecode patcher reproduce the current mod locally.

## Requirements

- Your own compatible **original Remains 1.0.4 DLC `pfeUI.swf`**, before applying this mod. The exact baseline SHA256 is `3cb37d48df3dc5721b0752e634b8e8d7e66c3487fdbe0b3b654651f634beaf8e`.
- JPEXS Free Flash Decompiler **26.4.0**, with its `ffdec.jar` and normal companion files. It is not bundled.
- A working Java runtime compatible with that FFDec version. Local development used Java 8.
- Node.js, Git, and PowerShell 7. Paths containing spaces are supported through script parameters.
- For actually playing, a compatible AIR runtime and all original game resources from your own installation. They are not part of the generated overlay.

## Build

From a cloned repository, run:

```powershell
./tools/build.ps1 -OriginalSwf '<path-to-original-pfeUI.swf>' -FFDecJar '<path-to-ffdec.jar>'
```

Use `-Java` and `-Node` if those programs are not on PATH. Optionally choose `-OutputDirectory`.

The script checks the baseline hash, exports only four required classes, normalizes their text, verifies and applies `patches/0.4.8.patch`, checks reconstructed source hashes, compiles into a separate work folder, adds 20 targeted hooks and verifies that all original non-code SWF tags are unchanged. No original input is overwritten.

The result is a local **overlay** in `dist/`: `DLC/pfeUI.swf`, project images under `Assets/`, `legendary.xml`, `Launch-Legendary.bat` and `VERSION.txt`. Apply it only to a separate backed-up copy of the compatible game. Its launcher expects that copy's existing `adl64.exe` and `runtimes/air/win64`, plus the original game data and media. The mod uses the separate application ID `pfe.legendary.test`.

`dist/`, `.build/` and local game files are ignored by Git. Do not upload the generated game SWF or third-party dependencies simply because a local build succeeded.

## Editing and tests

- `src/additions/` preserves the original project-authored helper fragments for study. The reproducible build currently uses the consolidated source patch, not automatic assembly of these fragments. When editing a helper, update the patch and its source manifest as well.
- `data/arsenal20.json` records weapon parameters; embedded definitions in the patch are the runtime source. It is a catalog, not a hot-reload configuration file.
- `tools/patch-abc.cjs` adds narrow hooks to native classes. Avoid recompiling shared game classes unnecessarily: earlier attempts broke animation and XML lookup behavior.
- `tests/snippets/` preserves selected authored test methods. These are harness fragments, not a portable one-command test suite; they depend on the original MainFE test scaffold, which is not redistributed. Historical runtime results are in `docs/verification/`.
- The preserved 0.4.8 local SWF hash is recorded in `data/source-manifest.json`. Source reconstruction is checked exactly; compare build hashes and resource tags when changing tools or compiler versions.
- Never infer full-campaign stability or correct balance from the archived smoke/regression results.

## Русский

Нужна собственная исходная копия DLC `pfeUI.swf` от совместимой Remains 1.0.4 с указанной выше контрольной суммой, FFDec 26.4.0, Java, Node.js, Git и PowerShell 7. Игра, её полные исходники, AIR и сторонние программы в репозиторий не входят.

Команда выше создаёт отдельный локальный комплект `dist/`: проверяет исходный файл, извлекает четыре класса, применяет патч, сверяет восстановленный текст, компилирует и добавляет точечные изменения. Проверяется сохранность исходной графики, звуков, таймлайнов и символов. Исходный SWF не перезаписывается.

Результат накладывается на отдельную резервную копию игры с её штатными файлами и рантаймом. Готовый SWF и локальные игровые файлы не надо коммитить. Фрагменты тестов сохранены для изучения, но не являются самостоятельным универсальным тестовым набором. Полное прохождение и итоговый баланс не проверены.
