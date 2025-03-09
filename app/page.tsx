import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "100%",
            position: "relative",
          }}
        >
          <div style={{ height: "50px", background: "red" }}>
            <div>
              <Link href="/blog/123">blog</Link>
              <Link href="/city/london">City</Link>
              <Link href="/dashboard/analytics">Analytics page</Link>
              <Link href="/dashboard/settings/passwords">Password</Link>
              <Link href="/dashboard/settings/profile">Profile</Link>
              <h1>all links added now</h1>
              <h1>new page added</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
