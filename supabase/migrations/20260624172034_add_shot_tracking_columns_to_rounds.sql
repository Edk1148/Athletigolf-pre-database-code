/*
# Add shot-tracking columns to rounds

Adds three new optional integer columns to the `rounds` table for more
detailed shot tracking per round.

## New Columns
- `penalty_shots` (integer, default 0) — total penalty shots taken in the round
- `chip_shots` (integer, default 0) — total chip shots taken in the round
- `greenside_bunker_shots` (integer, default 0) — total greenside bunker shots taken

## Notes
1. All three use `ADD COLUMN IF NOT EXISTS` so the migration is safe to re-run.
2. Default of 0 means existing rows get a sensible value automatically.
3. No existing columns are modified.
*/

ALTER TABLE rounds
  ADD COLUMN IF NOT EXISTS penalty_shots integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS chip_shots integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS greenside_bunker_shots integer DEFAULT 0;
