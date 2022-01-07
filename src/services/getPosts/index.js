import fetch from 'node-fetch';

export default async (req, res) => {
    const data = await fetch('http://localhost:5000/data').then(d => d.json());
    return data;
};