"use client";

import { Placeholder } from "@/components/placeholder";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Next.js requires this component to be named "Error"
export default function Error({ error }: { error: Error }) {
  return <Placeholder label={error.message || "Oh no! Something went wrong"} />;
}
