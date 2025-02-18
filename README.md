# Admin Page

이 프로젝트는 관리자 페이지에서 회원 가입, 상품 목록, 검색, 필터링 및 페이지네이션 기능을 제공합니다. 또한, 다크모드와 라이트모드를 전환할 수 있는 기능도 지원합니다.

## 기능

- **회원 가입**: 사용자는 아이디, 비밀번호, 이름, 전화번호 등을 입력하여 회원가입을 할 수 있습니다.
- **상품 목록**: 상품은 카테고리, 브랜드, 이름, 가격 등의 정보로 구성되어 있습니다.
- **상품 필터링**: 사용자는 카테고리와 제품명을 기준으로 상품을 필터링할 수 있습니다.
- **페이지네이션**: 상품 목록이 10개를 넘을 경우, 페이지네이션을 사용하여 페이지를 나누어 표시합니다. (1페이지당 10개)
- **다크모드/라이트모드 전환**: 버튼을 통해 페이지의 테마를 다크모드와 라이트모드로 변경할 수 있습니다.
- **폼 유효성 검사**: 회원가입 폼에 대한 유효성 검사(비밀번호 확인, 전화번호 형식 등)를 수행합니다. (formData에 key : value 형식으로 저장 console.log로 회원가입시 출력)
- **Toast 알림**: 회원가입 완료 시 Toast 알림이 화면에 표시됩니다.

## 기술 스택

- **HTML**: 웹 페이지 구조
- **CSS**: 스타일링 (Bootstrap 사용)
- **JavaScript**: 동적 기능 구현
- **Bootstrap**: 레이아웃과 UI 컴포넌트 제공

# 파일 구조

/admin-page

├── index.html             # 메인 HTML 파일

├── style.css              # 스타일 시트

├── script.js              # JavaScript 파일

└── README.md              # 프로젝트 설명 파일
