import type { ModuleHandle } from "@oxvm/sdk/wasm";
import type definition from "../../../module.ts";

/**
 * Stands in for the file `oxvm wasm add` generates in a consuming project, so that this directory type-checks in
 * this repository. The harness does not copy it: the real generated file, made from the real release, takes its place.
 */
export declare const pglite: ModuleHandle<(typeof definition)["manifest"]>;
