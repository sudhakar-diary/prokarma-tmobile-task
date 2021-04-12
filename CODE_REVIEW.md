# Task 1: Code fixes and review

## 1.1 Static Analysis : Sonar Qube : libs (excluded spec)

1. Code Smell : Unexpected empty source <br />
File : libs/books/feature/src/lib/total-count/total-count.component.scss <br />
Fix : added comment <br />

2. Bug : Add an "alt" attribute to this image. <br />
File : libs\books\feature\src\lib\reading-list\reading-list.component.html <br />
Fix : <img class="reading-list-item--cover" alt="book list" [src]="b.coverUrl" /> <br />

3. Security Hotspots  : Make sure that executing this OS command is safe here. <br />
File : decorate-angular-cli.js <br />
Issue At : 
```
// If unix-based, symlink
cp.execSync(`ln -sf ./nx ${ngPath}`);
RCA : Ignoring, it's related the env setup. 
```

## 1.2 Accessibility : Desktop : lighthouse

1. Buttons do not have an accessible name <br />
File : libs\books\feature\src\lib\book-search\book-search.component.html <br />
Fix : `<button mat-icon-button matSuffix aria-label="search">` <br />

2. Background and foreground colors do not have a sufficient contrast ratio. <br />
File : libs\books\feature\src\lib\book-search\book-search.component.scss <br />
Fix : color: `$gray60;` <br /> 

---

> Note : As .vscode is at master, adding .scanner also <br />

---