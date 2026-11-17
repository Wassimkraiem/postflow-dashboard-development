import { accounts, automations, inboxItems, posts } from "./mock-data"
import type { AutomationRule, InboxItem, Post, SocialAccount } from "./types"
const wait = () => new Promise((resolve) => setTimeout(resolve, 180))
export function getMockData() { return { accounts, automations, inboxItems, posts } }
export async function getPosts(): Promise<Post[]> { await wait(); return posts }
export async function createPost(post: Post): Promise<Post> { await wait(); posts.unshift(post); return post }
export async function updatePost(id: string, changes: Partial<Post>): Promise<Post | undefined> { await wait(); const post = posts.find((item) => item.id === id); if (post) Object.assign(post, changes); return post }
export async function getAccounts(): Promise<SocialAccount[]> { await wait(); return accounts }
export async function getAutomations(): Promise<AutomationRule[]> { await wait(); return automations }
export async function saveAutomation(rule: AutomationRule): Promise<AutomationRule> { await wait(); const index = automations.findIndex((item) => item.id === rule.id); if (index >= 0) automations[index] = rule; else automations.unshift(rule); return rule }
export async function getInbox(): Promise<InboxItem[]> { await wait(); return inboxItems }
export async function getMedia() { await wait(); return posts.flatMap((post) => post.media) }
