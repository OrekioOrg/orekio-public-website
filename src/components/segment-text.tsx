import Link from "next/link";
import type { Segment } from "@/i18n/segment";

// Renders a single Segment: plain text, an internal (locale-prefixed) link,
// or an external/mailto link.
export function SegmentText({ segment }: { segment: Segment }) {
  if (typeof segment === "string") {
    return <>{segment}</>;
  }
  if (segment.external) {
    return (
      <a href={segment.href} className="text-secondary underline">
        {segment.text}
      </a>
    );
  }
  return (
    <Link href={segment.href} className="text-secondary underline">
      {segment.text}
    </Link>
  );
}
