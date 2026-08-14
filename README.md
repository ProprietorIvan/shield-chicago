# Shield Chicago

Chicago water damage restoration company site. Original files, original copy, original brand.

This is **not** a reskin of flood.nyc and **not** a flood-sensor civic project. It is a restoration contractor site written for Chicago buildings and Chicago sewers.

## Run it

```bash
npm install
npm run dev
```

## Before launch

1. Put the real dispatch number in [`lib/firm.ts`](lib/firm.ts)
2. Put the real email and canonical URL in the same file
3. Wire [`components/dispatch-form.tsx`](components/dispatch-form.tsx) to a live inbox
4. Add crew photos you own — do not lift New York assets

## Stack

Next.js App Router, TypeScript, Tailwind v4.
