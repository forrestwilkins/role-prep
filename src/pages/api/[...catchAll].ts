// TODO: Catch all function needs to be refactored. Promise executor functions should not be async.
// https://docs.w3cub.com/eslint/rules/no-async-promise-executor
// https://eslint.org/docs/rules/no-async-promise-executor

import { NextApiRequest, NextApiResponse } from "next";
import { getListener } from "../../backend/main";

const catchAll = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> =>
  new Promise(async (resolve) => {
    const listener = await getListener();

    listener(req, res);
    res.on("finish", resolve);
  });

export default catchAll;
