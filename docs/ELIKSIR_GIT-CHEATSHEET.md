# ELIKSIR – Git & workflow ściąga

## 0. Gałęzie

- Główna landingowa: `eliksir-landing-v1`
- Gałęzie robocze: jedna zmiana = jedna gałąź, np.  
  `eliksir-contact-mail-v1`, `eliksir-calculator-v2`, `eliksir-layout-fix-v1`

---

## 1. Start pracy nad nową zmianą

```bash
cd /d/REP/eliksir-website.tar
git checkout eliksir-landing-v1
git pull origin eliksir-landing-v1       # dociągnij najnowszy kod
git checkout -b NAZWA-NOWEJ-GALEZI       # np. eliksir-calculator-v2

2. Praca lokalna

Edytujesz pliki w VS Code.

Smoke test dev:

npm install           # zwykle tylko raz, jak potrzeba
npm run dev           # sprawdź http://localhost:5173/


Smoke test build (po każdej poważniejszej zmianie):

npm run build


Jeśli build OK (✓ built in Xs) – można commitować.

3. Commit & push

Sprawdź status:

git status


Dodaj konkretne pliki (nie rób git add . na ślepo):

git add src/App.tsx src/lib/content.ts     # przykłady plików
# + inne, które zmieniałeś


Commit z opisem:

git commit -m "Krótki opis zmiany, np. Improve calculator summary"


Wysłanie gałęzi na GitHuba:

git push origin NAZWA-NOWEJ-GALEZI

4. Pull Request (PR) na GitHubie

Wchodzisz na repo na GitHubie.

Klikasz Compare & pull request (albo New pull request).

Ustaw:

base: eliksir-landing-v1

compare: Twoja gałąź (np. eliksir-calculator-v2)

W tytule: krótko, np. eliksir-calculator-v2 – lepsze wyliczenia.

Opis: 2–3 punkty, co zostało zrobione.

Klikasz Create pull request, potem Merge.

5. Aktualizacja lokalnej gałęzi landingowej po merge

Po zmergowaniu PR na GitHubie:

cd /d/REP/eliksir-website.tar
git checkout eliksir-landing-v1
git pull origin eliksir-landing-v1
git branch -d NAZWA-NOWEJ-GALEZI     # usuń lokalnie gałąź roboczą
git status                           # powinno być clean

6. Typowe komendy „na pamięć”
git status            # sprawdź co się dzieje
git branch            # lista gałęzi lokalnych
git checkout NAZWA    # przełącz gałąź
git log --oneline     # historia commitów


Trzymamy się zasady: jedna zmiana = jedna gałąź = jeden PR.


### 2.2. Commit ściągi

W terminalu:

```bash
cd /d/REP/eliksir-website.tar
git checkout eliksir-landing-v1

git add docs/ELIKSIR_GIT-CHEATSHEET.md
git commit -m "Add git workflow cheatsheet for Eliksir landing"
git push origin eliksir-landing-v1


Smoke test tutaj nie jest krytyczny (zmieniliśmy tylko dokumentację), ale jak chcesz zachować rytuał:

npm run build