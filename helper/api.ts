import type { NextResponse } from "next/server";

export type InferNextResponse<T> = T extends (
	// biome-ignore lint: lint/suspicious/noExplicitAny
	...args: any[]
) => Promise<NextResponse<infer U>>
	? U
	: never;
