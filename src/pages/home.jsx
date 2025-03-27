import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

function App() {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 5000,
      hoverpause: true,
      gap: 0,
      animationDuration: 1000,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        800: {
          perView: 1,
        },
      },
    });
    glide.mount();
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1606788075761-8c7b30fd597f?auto=format&fit=crop&w=600&q=80"
                  alt="농산물 경매 마켓"
                />
              </a>
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-custom hover:bg-custom hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"
                >
                  경매참여
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  마이페이지
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  고객센터
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <input
                    type="text"
                    className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                    placeholder="상품을 검색해보세요"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center space-x-3">
                <button className="rounded-button bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-custom/90">
                  로그인
                </button>
                <button className="rounded-button border border-custom text-custom px-4 py-2 text-sm font-medium hover:bg-custom/10">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="glide mb-12">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img
                      src="src/images/스크린샷 2025-03-25 오후 9.00.33.png"
                      className="w-full h-full object-cover"
                      alt="신선한 농산물"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="text-white ml-12">
                        <h2 className="text-4xl font-bold mb-4">
                          신선한 농산물 <br />
                          실시간 경매
                        </h2>
                        <p className="text-lg mb-6">
                          전국 각지의 신선한 농산물을
                          <br />
                          합리적인 가격에 만나보세요
                        </p>
                        <button className="rounded-button bg-custom text-white px-6 py-3 text-lg font-medium hover:bg-custom/90">
                          지금 참여하기{" "}
                          <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">카테고리</h2>
            <div className="grid grid-cols-6 gap-4">
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-apple-alt text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">과일</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-carrot text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">채소</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-seedling text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">곡물</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-leaf text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">특산물</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-pepper-hot text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">양념류</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <i className="fas fa-th text-3xl text-custom mb-3"></i>
                <span className="text-sm font-medium">기타</span>
              </a>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">실시간 경매 현황</h2>
              <a href="#" className="text-custom hover:text-custom/80">
                전체보기 <i className="fas fa-chevron-right ml-1"></i>
              </a>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {/* 경매 상품 예시 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/Users/chonakyung/조선대학교/capstone/frontend/src/스크린샷 2025-03-25 오후 8.55.47.png"
                  className="w-full h-48 object-cover"
                  alt="사과"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">충주 사과</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      마감 임박
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">충주 사과 10kg</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">현재가</span>
                    <span className="font-bold text-custom">35,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>입찰 32회</span>
                    <span>남은시간 01:23:45</span>
                  </div>
                </div>
              </div>
              {/* 두 번째 상품 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1606788075761-457c9b1c9d87?auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-48 object-cover"
                  alt="배2"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">나주 배</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      진행중
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">나주 배 5kg</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">현재가</span>
                    <span className="font-bold text-custom">28,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>입찰 15회</span>
                    <span>남은시간 03:45:12</span>
                  </div>
                </div>
              </div>
              {/* 세 번째 상품 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Fresh Korean sweet potatoes arranged on a clean white surface with soft natural lighting, showing their rich purple skin and perfect condition. The presentation is simple and professional&width=300&height=200&orientation=landscape&flag=7584666a-43f6-425a-84ea-950dc0453c5f"
                  className="w-full h-48 object-cover"
                  alt="고구마"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">해남 고구마</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      진행중
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">해남 고구마 10kg</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">현재가</span>
                    <span className="font-bold text-custom">25,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>입찰 8회</span>
                    <span>남은시간 05:30:00</span>
                  </div>
                </div>
              </div>
              {/* 네 번째 상품 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Fresh Korean rice displayed in a modern presentation on a clean white surface with soft natural lighting. The grains are perfectly arranged showing their quality and purity&width=300&height=200&orientation=landscape&flag=64a047d3-58b2-4cad-b593-a7b1e8a1fdbb"
                  className="w-full h-48 object-cover"
                  alt="쌀"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">이천 쌀</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      진행중
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">이천 쌀 20kg</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">현재가</span>
                    <span className="font-bold text-custom">55,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>입찰 20회</span>
                    <span>남은시간 02:15:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">실시간 낙찰 현황</h2>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-sm text-gray-500 mb-1">
                    충주 사과 10kg
                  </div>
                  <div className="font-bold text-lg mb-1">35,000원</div>
                  <div className="text-xs text-gray-400">1분 전 낙찰</div>
                </div>
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-sm text-gray-500 mb-1">나주 배 5kg</div>
                  <div className="font-bold text-lg mb-1">28,000원</div>
                  <div className="text-xs text-gray-400">5분 전 낙찰</div>
                </div>
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-sm text-gray-500 mb-1">
                    해남 고구마 10kg
                  </div>
                  <div className="font-bold text-lg mb-1">25,000원</div>
                  <div className="text-xs text-gray-400">10분 전 낙찰</div>
                </div>
                <div className="border-r border-gray-200 last:border-r-0">
                  <div className="text-sm text-gray-500 mb-1">이천 쌀 20kg</div>
                  <div className="font-bold text-lg mb-1">55,000원</div>
                  <div className="text-xs text-gray-400">15분 전 낙찰</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">신규 경매 예정 상품</h2>
              <a href="#" className="text-custom hover:text-custom/80">
                전체보기 <i className="fas fa-chevron-right ml-1"></i>
              </a>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Fresh Korean strawberries beautifully arranged on a clean white surface with soft natural lighting, showcasing their bright red color and perfect ripeness. The presentation is minimal and elegant&width=300&height=200&orientation=landscape&flag=7f604fde-c257-48c5-aa4e-c46de4f238d9"
                  className="w-full h-48 object-cover"
                  alt="딸기"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">논산 딸기</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      예정
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">논산 딸기 2kg</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">시작가</span>
                    <span className="font-bold text-custom">25,000원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>시작 예정일</span>
                    <span>2024.02.15 14:00</span>
                  </div>
                  <button className="rounded-button w-full mt-3 bg-custom/10 text-custom px-4 py-2 text-sm font-medium hover:bg-custom/20">
                    <i className="far fa-bell mr-2"></i> 알림 신청
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <img
                className="h-8 w-auto mb-4"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="농산물 경매 마켓"
              />
              <p className="text-sm">
                신선한 농산물을 합리적인 가격에 만나보세요.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">고객센터</h3>
              <p className="text-2xl font-bold text-white mb-2">1588-1234</p>
              <p className="text-sm">평일 09:00 - 18:00</p>
              <p className="text-sm">점심 12:00 - 13:00</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">회사 정보</h3>
              <ul className="space-y-2 text-sm">
                <li>상호명: (주)김동완</li>
                <li>대표: 김동완</li>
                <li>주소: 광주광역시 동구 조선대학교</li>
                <li>사업자등록번호: 123-45-67890</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">바로가기</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    공지사항
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
            © 2025 농산물경매마켓. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
