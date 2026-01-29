

import { streamText, convertToModelMessages } from 'ai';

export const runtime = 'edge';



export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: {
      id: 'openai/gpt-5.2-chat',
      apiKey: process.env.OPENAI_API_KEY!,
    },
    messages: await convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
