import { GetUsersQuery } from "../graphql/generated/graphql";

export type Message = GetUsersQuery["users"][0]["messages"][0];
