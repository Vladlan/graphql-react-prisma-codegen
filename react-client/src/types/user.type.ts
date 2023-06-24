import { GetUsersQuery } from "../graphql/generated/graphql"

export type User = GetUsersQuery["users"][0]