import type { NextApiHandler } from "next";

const handler: NextApiHandler = (_req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
};

export default handler;
