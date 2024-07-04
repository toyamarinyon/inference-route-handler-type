import type { GET } from "@/app/api/hello/route";
import type { InferNextResponse } from "@/helper/api";
import type { FC } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const WithTypeInference: FC = () => {
	const { data, error } = useSWR<InferNextResponse<typeof GET>>(
		"/api/hello",
		fetcher,
	);

	if (error) return <div>読み込みに失敗しました</div>;
	if (!data) return <div>読み込み中...</div>;

	return <div>{data.message}</div>;
};
