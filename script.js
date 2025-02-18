// script.js

// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
// 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리를 작성해 볼 수 있음

// 제품 데이터
const product_data = [
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
// ...
];

// 페이지당 10개씩 표시
const itemsPerPage = 10;
let currentPage = 1;

// 상품 테이블과 페이지네이션 요소
const product_data_Table = document.getElementById('product_data_Table');
const pagination = document.getElementById('pagination');

// 필터링 및 페이지네이션 함수
function filterAndPaginate() {
    const category = document.getElementById('categorySelect').value;
    const searchQuery = document.getElementById('searchProduct').value.toLowerCase();

    // 카테고리와 제품명으로 필터링
    let filteredData = product_data.filter(item => {
        const matchesCategory = category ? item.category === category : true;
        const matchesSearch = item.product.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // 페이지네이션 적용
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // 현재 페이지에 해당하는 상품만 가져오기
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 테이블에 데이터 삽입
    displayProducts(paginatedData);

    // 페이지네이션 표시
    displayPagination(totalPages, totalItems);
}

// 상품 데이터를 테이블에 표시
function displayProducts(data) {
    // 기존 테이블 내용 초기화
    product_data_Table.innerHTML = '';

    // 새로운 데이터로 테이블 업데이트
    data.forEach(item => {
        const row = product_data_Table.insertRow();
        row.insertCell(0).innerHTML = item.category;
        row.insertCell(1).innerHTML = item.brand;
        row.insertCell(2).innerHTML = item.product;
        row.insertCell(3).innerHTML = item.price;
    });
}

// 페이지네이션 표시
function displayPagination(totalPages) {
    // 페이지네이션 내용 초기화
    pagination.innerHTML = '';

    // 이전 페이지 버튼
    const prevButton = document.createElement('li');
    prevButton.classList.add('page-item');
    prevButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>`;
    if (currentPage === 1) prevButton.classList.add('disabled'); // 첫 페이지일 때 'Previous' 비활성화
    pagination.appendChild(prevButton);

    // 페이지 번호 버튼
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        // 현재 페이지는 'active' 클래스를 추가
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(pageButton);
    }

    // 다음 페이지 버튼
    const nextButton = document.createElement('li');
    nextButton.classList.add('page-item');
    nextButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>`;
    if (currentPage === totalPages) nextButton.classList.add('disabled'); // 마지막 페이지일 때 'Next' 비활성화
    pagination.appendChild(nextButton);
}

// 페이지 변경 시 호출되는 함수
function changePage(pageNumber) {
    if (pageNumber < 1 || pageNumber > Math.ceil(product_data.length / itemsPerPage)) return; // 범위 내 페이지 번호만 허용
    currentPage = pageNumber;
    filterAndPaginate(); // 페이지 변경 후 데이터 필터링 및 페이지네이션 적용
}

// 데이터 필터링 및 페이지네이션 적용
filterAndPaginate();

// 다크모드 토글
function darkMode(){
    // 현재 모드를 가져옴
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // 현재 모드와 반대되는 모드로 설정
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    updateButtonText(newTheme);
    localStorage.setItem('theme', newTheme); // 선택된 테마 저장
}

// 다크모드 버튼 업데이트
function updateButtonText(mode) {
    if (mode === 'dark') {
        document.querySelector('.mode-change-btn').innerHTML = '라이트모드';
        document.querySelector('.mode-change-btn').classList.remove('btn-dark');
        document.querySelector('.mode-change-btn').classList.add('btn-light');
    } else {
        document.querySelector('.mode-change-btn').innerHTML = '다크모드';
        document.querySelector('.mode-change-btn').classList.remove('btn-light');
        document.querySelector('.mode-change-btn').classList.add('btn-dark');
    }
}

// 사이드바 변수명
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

// 사이드바 열기
openSidebar.addEventListener("click", () => {
sidebar.classList.add("open");
});

// 사이드바 닫기
closeSidebar.addEventListener("click", () => {
sidebar.classList.remove("open");
});

// 폼 유효성 검사
function validateForm() {
    // 비밀번호 확인 (Confirm Password) 확인
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-confirm").value;
    
    // 비밀번호와 비밀번호 확인이 일치하지 않으면 알림
    if (password !== confirmPassword) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return false; // 폼 제출을 막음
    }

    // 전화번호 형식이 맞지 않으면 알림
    const phoneNumber = document.getElementById("phone-number").value;
    const phonePattern = /^010-\d{4}-\d{4}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)");
        return false; // 폼 제출을 막음
    }

    // 폼 데이터를 객체로 변환
    const formData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        phoneNumber: document.getElementById("phone-number").value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    // 폼 데이터 출력
    console.log(formData);

    // 유효성 검사 후 성공 알림 (Toast 사용)
    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();  // 성공 알림 표시

    // 폼 초기화
    document.getElementById("signupForm").reset();

    // 폼 제출 방지
    return false;
}

// 시간 표시
function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

// 페이지가 로드될 때 날짜와 시간을 표시
function updateDateTime() {
    document.getElementById("date-time").innerText = getCurrentDateTime();
}

// 1초마다 날짜와 시간 업데이트
setInterval(updateDateTime, 1000); // 1초(1000ms)마다 업데이트

// 페이지가 로드될 때 날짜와 시간을 표시
document.getElementById("date-time").innerText = getCurrentDateTime();
