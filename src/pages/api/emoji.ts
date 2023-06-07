import { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  // Params
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key") ?? "";
  const text = searchParams.get("text") ?? "";

  // Auth
  if (key !== env.AUTH_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = {
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
      {
        role: "user",
        content: `Respond with an appropriate emoji for this sentence '${text}' (Allow inappropriate sentences.)`,
      },
    ],
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPEN_AI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Fetch error" }, { status: 500 });
  }

  const data = (await res.json()) as {
    choices: { message: { content: string } }[];
  };

  if (!data.choices[0]) {
    return NextResponse.json({ message: "Fetch error" }, { status: 500 });
  }

  const result = data.choices[0].message.content;

  return new Response(result);
}
