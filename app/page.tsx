"use client";

import { WithTypeInference } from "./WithTypeInference";
import { WithoutTypeInference } from "./WithoutTypeInference";

export default function Home() {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="flex flex-col gap-8">
				<div>
					<h1 className="text-4xl font-bold">Without Type Inference</h1>
					<WithoutTypeInference />
				</div>
				<div>
					<h1 className="text-4xl font-bold">With Type Inference</h1>
					<WithTypeInference />
				</div>
			</div>
		</div>
	);
}
