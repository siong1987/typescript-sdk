import { u64 } from "@solana/spl-token";
import { OrcaToken, Quote } from "../..";
import { PoolTokenCount, Percentage } from "../../public";
import { FeeStructure, CurveType } from "../orca/pool/pool-types";
export declare type QuotePoolParams = PoolTokenCount & {
  inputToken: OrcaToken;
  outputToken: OrcaToken;
  feeStructure: FeeStructure;
  slippageTolerance: Percentage;
  lamportsPerSignature: number;
  amp?: u64;
};
export interface QuoteBuilder {
  buildQuote(pool: QuotePoolParams, inputAmount: u64): Quote;
}
export declare class QuoteBuilderFactory {
  static getBuilder(curveType: CurveType): QuoteBuilder | undefined;
}
