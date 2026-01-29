
import { OpenAI } from 'ai/openai';
import { experimental_StreamObject } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'openai/gpt-5.2-chat',
    stream: true,
    messages,
  });
  return experimental_StreamObject(response);
}
