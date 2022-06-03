import fetch from 'node-fetch';
import { fetch_api } from './data/config';
import { StatusResponse, PageResponse, IncidentsResponse, IncidentUpdate } from './structure/interfaces';

async function checkapi() {
    await fetch(fetch_api)
    .then(response => response.json())
    .then(data => console.log(data));
}

checkapi();