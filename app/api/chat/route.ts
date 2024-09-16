import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai'; // 'OpenAI'를 기본 내보내기로 가져옴

// OpenAI API 설정
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    });

    const reply = response.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'OpenAI API call failed' }, { status: 500 });
  }
}
