import { expect, it } from "vitest";
import { GUEST, runPython } from "./support/python.ts";

it("keeps one SQL client API for canonical and supported legacy imports", async () => {
  const result = await runPython(["-I", "-c", `
import sys
sys.path.insert(0, ${JSON.stringify(GUEST)})
import oxvm_pglite, oxidevm_pglite
print(oxvm_pglite.query is oxidevm_pglite.query)
print(oxvm_pglite.PGliteError is oxidevm_pglite.PGliteError)
print(oxvm_pglite.__all__ == oxidevm_pglite.__all__)
`], "");
  expect(result.stderr).toBe("");
  expect(result.code).toBe(0);
  expect(result.stdout).toBe("True\nTrue\nTrue\n");
});
