# Gradle Todo 📝 (FINAL Java project!)

Todo app with JSON save (Gson). Same idea as Rust 09 + Tauri 02. But here YOU learn **Gradle**.

## Setup

```bash
cd java/gradle-todo
gradle test    # downloads Gson + JUnit once
```

## What to do

1. Finish `TodoStore`: `add`, `list`, `toggle`, `delete` (recipes in the file)
2. Check: `gradle test`
3. Finish `saveTo`, `loadFrom`
4. Check: `gradle test` all green
5. Run it!
   ```bash
   gradle run --args='add "Buy milk"'
   gradle run --args='list'
   gradle run --args='done 1'
   ```

## Tasks

- [ ] `gradle test` green (add, list, toggle, delete)
- [ ] `gradle test` green (save + load)
- [ ] Run the app, close, run again - tasks are back (`tasks.json`!)
- [ ] Bonus: run `gradle wrapper` - it makes `gradlew` so others don't need Gradle installed!

## Gradle words

* `plugins { java }` = "this is a Java project". `application` = "it runs!".
* `repositories { mavenCentral() }` = where to download libraries.
* `implementation("gson:2.11.0")` = "my app needs Gson". Like `dependencies` in Rust/Cargo!
* `tasks.test { useJUnitPlatform() }` = "run JUnit tests".
* `gradle test` = compile + test. `gradle run --args='...'` = run the app.

Compare with Maven (`../../pom.xml`): same ideas, different language!
