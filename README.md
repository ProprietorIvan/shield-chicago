# Shield Chicago

Street-level flood monitoring for Chicago — a public demonstration site with a 64-station modeled network, neighborhood hydrographs, and reconstructed maps of documented flood events.

This is original software and original writing. It is inspired by the *structure* of a civic flood-monitoring site, not a copy of another city’s words, files, or data.

## Demonstration data

Every depth, hydrograph, and map dot is produced by a seeded model in `lib/mock/`. The storms on the Events pages are real Chicago events. The inches are not a historical gauge archive. Keep the red demonstration banner until a live sensor feed exists.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Routes

| Path | What it is |
| --- | --- |
| `/` | Home, mission, map preview, reconstructed events |
| `/about` | Mission, principles, timeline, placeholder team |
| `/sensors` | How an ultrasonic node estimates street depth |
| `/dashboard` | Interactive map, list, compare hydrographs |
| `/events` | Five Chicago flood events |
| `/data` | CSV downloads, dictionary, JSON API |
| `/get-involved` | Suggest a site, preparedness links |

JSON: `/api/stations`, `/api/stations/SC-023`, `/api/events`, `/api/events/[slug]`.  
CSV: `/api/export/stations`, `/api/export/readings?station=SC-023`, `/api/export/readings?event=west-side-cloudburst-2023`.

## Edit the content

- Stations and coordinates: [`lib/mock/stations.ts`](lib/mock/stations.ts)
- Storm reconstructions: [`lib/mock/events.ts`](lib/mock/events.ts)
- Hydrograph generator: [`lib/mock/readings.ts`](lib/mock/readings.ts)
- Placeholder people, quotes, partners: [`lib/mock/people.ts`](lib/mock/people.ts)
- Placeholder meetings: [`lib/mock/meetings.ts`](lib/mock/meetings.ts)
- Site name and nav: [`lib/site.ts`](lib/site.ts)

## Before a public launch

Replace every item marked placeholder:

- [ ] Team names and roles
- [ ] Testimonials (do not invent quotes from real officials)
- [ ] Partner lists (do not claim City of Chicago or MWRD partnerships that do not exist)
- [ ] Meeting dates and venues
- [ ] Contact and site-suggestion form handlers
- [ ] `NEXT_PUBLIC_SITE_URL` for canonical SEO
- [ ] Live sensor feed in place of `lib/mock`

## Rename the GitHub repository

The local remote already points at `https://github.com/ProprietorIvan/shield-chicago.git`.

If GitHub still shows `Sield-Chicago`, rename it in the repository settings (Settings → General → Repository name → `shield-chicago`) or run:

```bash
gh auth login
gh repo rename shield-chicago --repo ProprietorIvan/Sield-Chicago --yes
gh repo edit ProprietorIvan/shield-chicago --description "Shield Chicago — real-time urban flood monitoring and community flood resilience for Chicago"
```

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, Leaflet / CARTO tiles, Recharts.

## License

MIT. See [LICENSE](LICENSE).
