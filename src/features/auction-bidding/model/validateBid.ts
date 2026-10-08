import type { Auction } from "@/entities/auction/auction.types";

export const MIN_BID_STEP = 50;

export type BidValidationResult =
  | { valid: true }
  | {
      valid: false;
      reason: "FINISHED" | "TOO_LOW";
    };

export function validateBid(
  auction: Auction,
  bid: number,
  now = Date.now(),
): BidValidationResult {
  if (new Date(auction.endTime).getTime() <= now) {
    return {
      valid: false,
      reason: "FINISHED",
    };
  }

  if (!Number.isFinite(bid) || bid < auction.currentBid + MIN_BID_STEP) {
    return {
      valid: false,
      reason: "TOO_LOW",
    };
  }

  return { valid: true };
}
