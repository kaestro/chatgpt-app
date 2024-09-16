import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

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
    return NextResponse.json(
        { error: `your message "${message}" is waiting for server to be ready`},
        { status: 500 }
    )
  }
}
