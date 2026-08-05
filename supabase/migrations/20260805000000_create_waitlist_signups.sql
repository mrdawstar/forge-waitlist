-- Waitlist signups captured from the Forge landing page.
--
-- Anyone (anonymous visitors) may insert a row, nobody may read, update or
-- delete through the public API. Reading the list is done with the service
-- role key from the Supabase dashboard.

create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'landing',
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_length check (char_length(email) between 3 and 254),
  constraint waitlist_signups_email_format check (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  constraint waitlist_signups_email_lowercase check (email = lower(email))
);

-- One signup per address, case-insensitively.
create unique index if not exists waitlist_signups_email_key
  on public.waitlist_signups (email);

create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

alter table public.waitlist_signups enable row level security;

-- Insert-only access for the public API roles: table grants first, then the
-- matching row level security policy. Without the grant PostgREST answers 401
-- before RLS is ever evaluated.
revoke all on public.waitlist_signups from anon, authenticated;
grant insert on public.waitlist_signups to anon, authenticated;

drop policy if exists "waitlist_signups_public_insert" on public.waitlist_signups;
create policy "waitlist_signups_public_insert"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (true);
