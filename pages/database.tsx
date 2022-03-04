import type { NextPage } from "next";
import { Client } from "@notionhq/client"
import {Card, CardContent, Grid, Typography} from "@mui/material";

const Home: NextPage = () => {

    const notion = new Client({ auth: process.env.NOTION_KEY })

    const databaseId = process.env.NOTION_DATABASE_ID

    async function addItem(text) {
        try {
            const response = await notion.pages.create({
                parent: { database_id: databaseId },
                properties: {
                    title: {
                        title:[
                            {
                                "text": {
                                    "content": text
                                }
                            }
                        ]
                    }
                },
            })
            console.log(response)
            console.log("Success! Entry added.")
        } catch (error) {
            console.error(error.body)
        }
    }
    return (
        <>
            <h1>회원 소개</h1>

        </>
    );
};

export default Home;