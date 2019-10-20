import axios from 'axios';
import {key} from '../config.js'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
        try {
            //axios is like fetch but uses a 3rd party module 
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
           // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}




