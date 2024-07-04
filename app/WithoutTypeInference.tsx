import type { FC } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const WithoutTypeInference: FC = () => {
	const { data, error } = useSWR("/api/hello", fetcher);

	if (error) return <div>読み込みに失敗しました</div>;
	if (!data) return <div>読み込み中...</div>;

	return <div>{data.message}</div>;
};
