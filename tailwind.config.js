module.exports = {
  content: [
    "./index.html", // Vite는 루트에 index.html
    "./src/**/*.{js,jsx,ts,tsx}", // src 내부 모든 컴포넌트 파일
  ],
  theme: {
    extend: {
      colors: {
        custom: "#000000", // 예: 버튼, 텍스트 등에서 사용하는 색상
      },
      borderRadius: {
        button: "0.5rem",
      },
    },
  },
  plugins: [],
};
