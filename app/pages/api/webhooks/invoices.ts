import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

// many other properties come back from the lnbits webhook, but only the ones that are actually used are added here.
type PaidInvoice = {
  payment_hash: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { key } = req.query;
  if (key !== process.env.LNBITS_WEBHOOK_SECRET_KEY) {
    // TODO: add http status codes
    res.status(StatusCodes.UNAUTHORIZED).end();
    return;
  }
  const invoice: PaidInvoice = req.body as PaidInvoice;
  // console.log("Received invoice", invoice);
  await prisma.tip.updateMany({
    data: {
      status: "UNCLAIMED",
    },
    where: {
      invoiceId: {
        equals: invoice.payment_hash,
      },
    },
  });
  res.status(StatusCodes.OK).end();
}
