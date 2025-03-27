// src/pages/Home.jsx
import React, { useEffect } from "react";
import Glide from "@glidejs/glide"; // Glide 패키지를 설치한 경우

const Home = () => {
  useEffect(() => {
    // Glide.js 초기화 (패키지로 설치하지 않고 CDN을 사용할 경우 다른 방법을 사용)
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
    <div>
      <header className="bg-white shadow-sm">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
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
                <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-custom/90">
                  로그인
                </button>
                <button className="!rounded-button border border-custom text-custom px-4 py-2 text-sm font-medium hover:bg-custom/10">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* 메인 콘텐츠 부분 (슬라이더, 카테고리 등) */}
        {/* 기존 HTML의 내용을 JSX 문법에 맞게 삽입 */}
      </main>

      <footer className="bg-gray-800 text-gray-300">{/* 푸터 내용 */}</footer>
    </div>
  );
};

export default Home;
