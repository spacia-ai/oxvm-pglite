/** Where the module puts its files; the manifest literal in module.ts repeats the values it declares. */

/** The directory the module owns inside the workspace: the socket, the Python client, the staging directory, archives. */
// Keep existing workspace paths until supported legacy clients complete their announced retirement period.
export const OXVM_DIRECTORY = "/workspace/_oxidevm";
/** The JSON endpoint's Unix socket. */
export const SQL_SOCKET = `${OXVM_DIRECTORY}/pglite.sock`;
/** Where a database that is being created or migrated is built before it replaces the data directory. */
export const STAGING_DIRECTORY = `${OXVM_DIRECTORY}/pgdata-migrating`;

export const CLIENT_SCRIPT = `${OXVM_DIRECTORY}/oxvm_pglite.py`;

/** Artifacts the module writes into the guest: `guestFiles` in the manifest. */
export const GUEST_FILES = [
  { artifact: "oxvm_pglite.py", to: CLIENT_SCRIPT, mode: 0o644 },
  { artifact: "oxidevm_pglite.py", to: `${OXVM_DIRECTORY}/oxidevm_pglite.py`, mode: 0o644 },
] as const;
