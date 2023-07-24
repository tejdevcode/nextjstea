import Navmenu from "./Nav"

async function navdata(){
  const res = await fetch(`http://localhost:3001/api/header`,{ next: { revalidate: 10 } });
  //const res = await fetch(`https://tejrdev.github.io/api/general.json`,{ next: { revalidate: 10 } });
  const nav = await res.json();  
  return nav;
}

const Header = async () => {
  const navmenu = await navdata();
  //console.log(navmenu.mainmenu) 
  
  return (
    <header className="container-fluid bg-white sticky-top">
      <Navmenu data={navmenu} />
    </header>
  )
}

export default Header