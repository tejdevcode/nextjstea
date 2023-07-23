
async function secdata() {
    const res = await fetch(process.env.NEXT_APP_URL + 'api/home/testimonial', { next: { revalidate: 10 } });
    const secdata = await res.json();
    return secdata;
}

const Resdata = async () => {
    const datares = await secdata();
    return datares;
 }
 
 export default Resdata