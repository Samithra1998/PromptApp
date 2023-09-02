import { connectToDb } from "@utils/db";
import Prompts from "@models/prompt";

export const GET = async(req,res) => {
    try {
        await connectToDb();

        const prompts = await Prompts.find().populate('creator')

        return new Response(JSON.stringify(prompts),{status:200})
    } catch (error) {
        return new Response('failed to fetch prompt', { status: 500 });
    }
}