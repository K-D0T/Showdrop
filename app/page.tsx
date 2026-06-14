import { getUpcomingDrops, BRANDS } from "@/lib/drops";
import DropsView from "@/components/DropsView";

export const dynamic = "force-dynamic";

export default function Home() {
  const drops = getUpcomingDrops();
  const droppingThisWeek = drops.filter((d) => {
    const days =
      (new Date(d.releaseDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return days <= 7;
  }).length;

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="topbar">
            <div className="logo">Showdrop</div>
            <span className="eyebrow">Upcoming Drops</span>
          </div>
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow">The drop calendar</span>
          <h1>
            Coming
            <br />
            Soon.
          </h1>
          <p className="lede">
            Upcoming releases from Jordan, Nike, adidas, and New Balance —
            release dates, prices, and direct links. Get there before they sell
            out.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="n">{drops.length}</div>
              <div className="l">Upcoming drops</div>
            </div>
            <div className="stat">
              <div className="n">{droppingThisWeek}</div>
              <div className="l">Dropping this week</div>
            </div>
            <div className="stat">
              <div className="n">{BRANDS.length}</div>
              <div className="l">Brands tracked</div>
            </div>
          </div>
        </div>
      </header>

      <DropsView drops={drops} brands={BRANDS} />

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            Showdrop · Release data is community-sourced and subject to change.
            Prices shown are MSRP.
          </span>
          <span>
            Drop details via{" "}
            <a href="https://houseofheat.co" target="_blank" rel="noreferrer">
              House of Heat
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
