
async function topslider(){
    const res = await fetch(process.env.NEXT_APP_URL + 'api/home/corosual', { next: { revalidate: 10 } });
    const slider = await res.json();
    return slider;
}
const Corosualdata = async () => {
   const slidedata = await topslider();
   return slidedata;
}

export default Corosualdata