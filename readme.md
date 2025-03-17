### RDBMS + 비즈니스 쇼핑몰 e-shop 연습 basic

### Prisma + SQLite + PostgreSQL

![image](https://github.com/user-attachments/assets/d6cbdebb-c714-49f9-8c80-477ccdd59919)

### VScode 확장 Rest Client 사용

### 프리즈마 Enum 타입 사용

### @id 필드 uuid() 사용

---

### 로그인에 성공하면, "토큰"을 받음

### 토큰을 항상 소지해야 함. 위조를 검사

---

### `A better git log` 사용하기 :

git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

---

### `npx prisma migrate dev`

### `npx prisma studio`

### npm install cors : cors 해결하는 미들웨어 설치

---

### import { PrismaClient } from "@prisma/client";

### const prisma = new PrismaClient();

---

### 라우터 기본형 (비동기)

router.post("/", async (req, res, next) => {
try {

} catch (e) {
next(e);
}
});

---
