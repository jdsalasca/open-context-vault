import { readFileSync } from "node:fs";

function isIsoDate(value) {
  if (typeof value !== "string") return false;
  const date = new Date(value);
  return !Number.isNaN(date.getTime()) && value.includes("T");
}

function validateEntry(entry, index) {
  const required = ["id", "source", "kind", "content", "createdAt", "updatedAt", "sensitivity"];
  for (const key of required) {
    if (!(key in entry)) {
      throw new Error(`Entry ${index} is missing required key: ${key}`);
    }
  }

  const allowedKinds = new Set(["event", "preference", "task", "knowledge"]);
  const allowedSensitivity = new Set(["low", "medium", "high"]);

  if (!allowedKinds.has(entry.kind)) {
    throw new Error(`Entry ${index} has invalid kind: ${entry.kind}`);
  }
  if (!allowedSensitivity.has(entry.sensitivity)) {
    throw new Error(`Entry ${index} has invalid sensitivity: ${entry.sensitivity}`);
  }
  if (!isIsoDate(entry.createdAt) || !isIsoDate(entry.updatedAt)) {
    throw new Error(`Entry ${index} has invalid createdAt/updatedAt date format`);
  }
}

function main() {
  const path = process.argv[2] ?? "examples/memory.json";
  const raw = readFileSync(path, "utf8");
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error("Memory file must be an array of entries.");
  }

  data.forEach((entry, index) => validateEntry(entry, index));
  console.log(`Validation passed: ${data.length} entries.`);
}

main();
