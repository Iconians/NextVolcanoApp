/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as convex_seed from "../convex_seed.js";
import type * as migrations_importData from "../migrations/importData.js";
import type * as mutations_highScores from "../mutations/highScores.js";
import type * as mutations_profiles from "../mutations/profiles.js";
import type * as queries_answers from "../queries/answers.js";
import type * as queries_highScores from "../queries/highScores.js";
import type * as queries_profiles from "../queries/profiles.js";
import type * as queries_questions from "../queries/questions.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  convex_seed: typeof convex_seed;
  "migrations/importData": typeof migrations_importData;
  "mutations/highScores": typeof mutations_highScores;
  "mutations/profiles": typeof mutations_profiles;
  "queries/answers": typeof queries_answers;
  "queries/highScores": typeof queries_highScores;
  "queries/profiles": typeof queries_profiles;
  "queries/questions": typeof queries_questions;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
