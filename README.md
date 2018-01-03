#Angular5 게시판만들어 보자!!
---
# 게시판 프로젝트
```bash 
 - 프로젝트명: bbs

```
---
| 기능           | 사용법                            |
| ------------- | ------------------------------- |
| Component     | ng g component my-new-component |
| Directive     | ng g directive my-new-directive |
| Pipe          | ng g pipe my-new-pipe           |
| Service       | ng g service my-new-service     |
| Class         | ng g class my-new-class         |
| Guard         | ng g guard my-new-guard         |
| Interface     | ng g interface my-new-interface |
| Enum          | ng g enum my-new-enum           |
| Module        | ng g module my-module           |


## 1.페이지 만들기
1) ng g c pageName
 - app.module.ts

## 2. Two-way Binding
```bash
 - <input [(ngModel)]="hero.name" placeholder="name">
 - app.module.ts
 > import { FormsModule } from '@angular/forms';
 > import { FormsModule }
```

## 3. Service Add
> ng generate service hero --module=app


## Model 만들기.
```base 
인터페이스는 클래스와 매우 흡사한 모습을 가지고 있지만 주 용도는 다르다. 인터페이스로는 객체 인스턴스를 생성할 수 없으므로 주로 타입 검사를 위해서 활용된다. ES2015에 클래스는 있지만 인터페이스는 없다는 것이 그 사실을 방증한다. 그 차이가 Optional 프로퍼티에서 잘 드러난다. 인터페이스의 모든 프로퍼티 및 메소드는 구현하는 클래스에서 기본적으로 가지고 있어야 될 것들이지만, Optional 프로퍼티는 말 그대로 선택적으로 구현하는 프로퍼티다. 프로퍼티 식별자 뒤에 간단하게 ?를 붙여서 사용한다.
```
 1) Interface 
   - 인터페이스로는 객체 인스턴스를 생성할 수 없으므로 주로 타입 검사를 위해서 활용된다.
   - Optional 프로퍼티는 말 그대로 선택적으로 구현하는 프로퍼티다. 프로퍼티 식별자 뒤에 간단하게 ?를 붙여서 사용한다.

 2) Class : 



```bash
참조 
 - https://jaxenter.com/road-to-angular-5-133253.html
```