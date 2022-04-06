import React from 'react';
import axios from 'axios';

export const getDatabase = function() {
axios.get("https://api.notion.com/v1/databases/ab001236a63c46dabc8196e0f4557e80").then(
    (response) => {
    console.log(response)
})
}