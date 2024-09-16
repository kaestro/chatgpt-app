# structure of chatgpt-app

/chatgpt-app
│
├── /app
│   ├── /api
│   │   └── /chat
│   │       └── route.ts    # Chat API 라우트
│   ├── /components
│   │   ├── /ChatInput.tsx  # ChatInput 컴포넌트
│   │   ├── /ChatMessage.tsx
│   │   └── /ChatHistory.tsx
│   ├── /layout.tsx         # MainLayout (공통 레이아웃)
│   ├── /page.tsx           # index 페이지
│
├── /public                 # 정적 파일
│   ├── favicon.ico
│
├── /styles
│   └── /globals.css        # 전역 스타일 파일
│
├── /utils
│   └── /apiHelper.ts       # API 헬퍼 함수 (optional)
│
├── .env.local              # 환경 변수 파일
├── next.config.js          # Next.js 설정 파일
├── package.json            # 패키지 의존성
└── tsconfig.json           # TypeScript 설정 파일
