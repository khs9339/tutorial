
export interface GithubApi {
	items: GithubIssue[];
	total_count: number;
}

export interface GithubIssue {
	created_at: string;
	number; string;
	title: string;
	state: string;
}