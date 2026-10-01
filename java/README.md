# Java Exercises ☕

Maven exercises 01-09 + Gradle final project. Same domains as Rust/TS: bank, words, todo.

## Setup (one time)

```bash
cd java
mvn -q test-compile    # downloads JUnit once, checks everything compiles
```

## How to use

```bash
mvn test                          # all tests
mvn test -Dtest=HelloTest          # one test class
mvn test -Dtest='BankTest#deposit' # one test method
```

1. Open `src/main/java/exercises/hello/Hello.java`, finish the `TODO`
2. Run: `mvn test -Dtest=HelloTest`
3. Green → next package

## The exercises (Maven)

| # | Package | You learn |
|---|---------|-----------|
| 01 | `exercises.hello` | types, `String`, `main`, `args` |
| 02 | `exercises.methods` | methods, `if`, exceptions (`div` by 0!) |
| 03 | `exercises.bank` | class, fields, `private`, `throw` |
| 04 | `exercises.shapes` | `interface`, `implements`, polymorphism |
| 05 | `exercises.collections` | `HashMap`, `List`, sorting |
| 06 | `exercises.errors` | `Optional`, `try/catch`, own exception |
| 07 | `exercises.generics` | `<T>`, `Box<T>`, `Pair<A,B>` |
| 08 | `exercises.streams` | lambdas, `map/filter/reduce` |
| 09 | `exercises.files` | read/write files, `@TempDir` in tests |

## The final project (Gradle)

`gradle-todo/` = todo app with JSON save (Gson). Same idea as Rust 09 + Tauri 02.
Learn Gradle there: `gradle test`, `gradle run`.

## Maven vs Gradle

| | Maven (`pom.xml`) | Gradle (`build.gradle.kts`) |
|---|---|---|
| Language | XML (words) | Kotlin (code) |
| Commands | `mvn test`, `mvn compile` | `gradle test`, `gradle run` |
| Common in | backend jobs, banks | Android, modern startups |
| Learn | exercises 01-09 | `gradle-todo/` project |

Both do the same job: download libraries, compile, run tests.

## Useful words

* `class` = blueprint. `new Account()` = real object from blueprint.
* `static` = belongs to the class, no `new` needed. Like free functions.
* `interface` = promise. "I have these methods". Class `implements` it.
* `exception` = error as object. `throw` it, `catch` it, or test it with `assertThrows`.
* `Optional` = "value or nothing". Better than `null`!
* `stream` = list processing pipeline. Like bash pipes, but in Java.
* `record` = small class for data. `record Task(int id, String t)` writes getters for you!
