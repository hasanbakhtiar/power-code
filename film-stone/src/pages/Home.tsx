
const Home = () => {
  function setCookie(cname:string, cvalue:string, exdays:number) {
    const d = new Date();
    d.setTime(d.getTime() + (1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie('test','data',2)
  return (
    <div>
  <div className="sketchfab-embed-wrapper"> <iframe title="Florianne Becker Flowers" frameBorder={0} allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width={1000} height={1000} src="https://sketchfab.com/models/e9aed37c2ea746e48374acb8301261ca/embed?autostart=1"> </iframe> </div>


    </div>
  )
}

export default Home