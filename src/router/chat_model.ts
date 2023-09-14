import { Router, Request, Response } from "express";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";
require("dotenv").config();

const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});
export default (router: Router) => {
  router.post("/chat", async (req: Request, res: Response) => {
    const { input } = req.body;
    const result = await llm.call([new HumanMessage(input)]);
    return res.status(200).json(result.content);
  });
};
