"use client";

import { useEffect, useMemo, useState } from "react";
import type { Brand, Drop } from "@/lib/drops";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function countdown(iso: string, now: number): { label: string; soon: boolean } {
  const target = new Date(iso + "T00:00:00Z").getTime();
  const diff = target - now;
  if (diff <= 0) return { label: "Available now", soon: true };

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);

  let label: string;
  if (days >= 1) label = `${days}d ${hours}h`;
  else if (hours >= 1) label = `${hours}h ${minutes}m`;
  else label = `${minutes}m`;

  return { label: `Drops in ${label}`, soon: days <= 7 };
}

export default function DropsView({
  drops,
  brands,
}: {
  drops: Drop[];
  brands: Brand[];
}) {
  const [brand, setBrand] = useState<Brand | "All">("All");
  const [query, setQuery] = useState("");
  const [now, setNow] = useState(() => Date.now());

  // Tick once a minute so countdowns stay live without thrashing renders.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return drops.filter((d) => {
      if (brand !== "All" && d.brand !== brand) return false;
      if (q && !d.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [drops, brand, query]);

  return (
    <>
      <nav className="toolbar">
        <div className="wrap toolbar-inner">
          <div className="filters">
            <button
              className={`chip ${brand === "All" ? "active" : ""}`}
              onClick={() => setBrand("All")}
            >
              All
            </button>
            {brands.map((b) => (
              <button
                key={b}
                className={`chip ${brand === b ? "active" : ""}`}
                onClick={() => setBrand(b)}
              >
                {b}
              </button>
            ))}
          </div>
          <input
            className="search"
            type="search"
            placeholder="Search drops…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search drops"
          />
        </div>
      </nav>

      <main className="wrap">
        <div className="section-head">
          <h2>{brand === "All" ? "All upcoming drops" : `${brand} drops`}</h2>
          <span className="muted">
            {filtered.length} {filtered.length === 1 ? "drop" : "drops"}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            No drops match your filters. Try a different brand or search term.
          </div>
        ) : (
          <div className="grid">
            {filtered.map((d) => {
              const cd = countdown(d.releaseDate, now);
              return (
                <a
                  key={d.id}
                  className="card"
                  href={d.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thumb">
                    {cd.soon && (
                      <span className="soon-badge">Dropping soon</span>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.image} alt={d.name} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <div className="card-brand">{d.brand}</div>
                    <div className="card-name">{d.name}</div>
                    <div className="card-sub">
                      {formatDate(d.releaseDate)}
                      {d.dateEstimated ? "*" : ""} · ${d.price}
                    </div>
                    <div className="card-foot">
                      <span className={`countdown ${cd.soon ? "soon" : ""}`}>
                        {cd.label}
                      </span>
                      <span className="cta">View</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
