import fetch from "node-fetch";
import { User } from "../models/user";

const repos = ['kids', 'adults', 'seniors'];

export class UserRepository {
    constructor(private endpoint: string) { }

    public async fetch(min: number = -Infinity, max: number = Infinity): Promise<User[] | undefined> {

        const init = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        }

        // fetch all users information
        const responses = await Promise.all(repos.map(repo => fetch(`${this.endpoint}/users/${repo}`, init)));
        const results = await Promise.all(responses.map(response => response.json()))
        const allUsers: User[] = results.reduce((acc, result) => acc.concat(result.data ?? result), []);

        // apply age filtering before returning the result
        return allUsers.filter((user: User) => user.age >= min && user.age <= max);
    }
}