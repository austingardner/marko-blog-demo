export default async (req, res) => {
    const data = await fetch('localhost:5000/data');
    return data;
  };