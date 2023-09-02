import { connectToDb } from "@utils/db";
import Prompts from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, tag, prompt } = await req.json();

  try {
    await connectToDb();

    const newPrompt = new Prompts({
      prompt,
      tag,
      creator: userId,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response('failed to return new prompt', { status: 500 });
  }
};
