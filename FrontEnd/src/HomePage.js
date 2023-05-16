import React from 'react'
import "./Homepage.css"
import SimpleImageSlider from 'react-simple-image-slider'
import { Link } from 'react-router-dom'
import watch1 from './images/watch1.jpg'
import watch2 from './images/watch2.jpg'
import watch3 from './images/watch3.jpg'
import watch4 from './images/watch4.jpg'
import watch5 from './images/watch5.jpg'
import clock1 from './images/clock1.jpg'
import clock2 from './images/clock2.jpg'

function HomePage() {
 const clockslider= {
  titan:[
 
  {
    url:"https://rukminim1.flixcart.com/image/832/832/jyeq64w0/wall-clock/h/t/p/wall-clock-w0002pa01-analog-titan-original-imafgnyjvfbpfwyc.jpeg?q=70"
  },
  {
    url:"https://m.media-amazon.com/images/I/61Wfpvj3-YS._SX679_.jpg"
  },
  {
    url:"https://rukminim1.flixcart.com/image/832/832/k7nnrm80/wall-clock/w/v/t/wall-clock-w0046pa01-analog-titan-original-imafpugetea7wefw.jpeg?q=70"
  },
  {
    url:"https://rukminim1.flixcart.com/image/832/832/jy7kyvk0/wall-clock/f/g/d/wall-clock-w0035wa01-analog-titan-original-imafggbdbythmgwx.jpeg?q=70"
  },
  {
    url:"https://staticimg.titan.co.in/Titan/Catalog/W0032GA01_1.jpg"
  }
],
ajanta:[
  {
    url:"https://rukminim1.flixcart.com/image/1408/1408/j4a6ykw0/wall-clock/9/x/h/ajanta-fancy-wall-clock-for-home-and-office-1217-analog-ajanta-original-imaeuty7hd5khutv.jpeg?q=90"
  },
  {
    url:"https://n2.sdlcdn.com/imgs/b/x/q/Ajanta-Yellow-Analog-Wall-Clock-SDL029616185-1-d9871.jpg"  },
    {
      url:"https://n1.sdlcdn.com/imgs/b/z/r/Ajanta-Yellow-Wall-Clock-SDL168445623-1-039c4.jpg"
    },
    {
      url:"https://rukminim1.flixcart.com/image/832/832/k19lvgw0/wall-clock/n/p/k/wall-clock-designer-clock-2877-analog-ajanta-original-imafkvmewky2uek4.jpeg?q=70",
    },
    { url:"https://rukminim1.flixcart.com/image/832/832/k5e7o280/wall-clock/3/b/k/designer-wall-clock8-cw-ct-red25412-analog-ajanta-original-imafzyxeape7nxsy.jpeg?q=70"}

],
sieko:[
  {url:"https://th.bing.com/th/id/R.2347edc9ce08b8ec6a63d234e35baa74?rik=odF2MkokBU2R2A&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2f10135799%2fprod_2252125012%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=e68oKTyFJ7ub90iKnjVfonC8FNUByvinsghp8vWloxE%3d&risl=&pid=ImgRaw&r=0"},
  {url:"https://th.bing.com/th/id/R.333fcfe5bc90322d0deedbedb48f277f?rik=DCnMf7mNVhnWUw&riu=http%3a%2f%2fimages.hayneedle.com%2fmgen%2fmaster%3aSKO447.jpg&ehk=eQpb2Z5311QlJr5EC%2bKXyU2GWTy6e1%2fE%2foZF9j3dqeQ%3d&risl=&pid=ImgRaw&r=0"},
  {url:"https://th.bing.com/th/id/R.25fc624c068ede88e07c495ae2d7ba2b?rik=Qnm7ZbNZasuB1w&riu=http%3a%2f%2fwww.cherryoo.com%2fsites%2fdefault%2ffiles%2f4MH810WD06_0.png&ehk=zLCse9yfB9W6E2jGzYLYy%2b0CegaXPrhxjdO1NZKinhM%3d&risl=&pid=ImgRaw&r=0"},
  {url:"https://th.bing.com/th/id/R.48462e84b4b81fa1cdba7ccca25aa667?rik=K5jT8S0quHtU9w&riu=http%3a%2f%2fi.ebayimg.com%2f00%2fs%2fNTAwWDUwMA%3d%3d%2fz%2fN14AAOxy4YdTWHng%2f%24_3.JPG%3fset_id%3d2&ehk=77fjV4%2bhb2haRJRGRaornSPa98QVuD18Zm5BKqpxPmc%3d&risl=&pid=ImgRaw&r=0"},
  {url:"https://th.bing.com/th/id/R.886a1c6084b5fdcb2155cf79bf6f92fc?rik=ZUOur5f86VqxmQ&riu=http%3a%2f%2fimages.hayneedle.com%2fmgen%2fmaster%3aSKO132.jpg&ehk=%2fqAN0V0afS3vQoz3NihbRGfFB4K%2bxyXP6qLndyF0JCw%3d&risl=&pid=ImgRaw&r=0"}
]
 }

const watchslider=
{
  titan:[
    {url:"https://n3.sdlcdn.com/imgs/i/x/6/Titan-0732-Metal-Analog-Men-SDL214403931-1-19f29.jpg"},
  {url:"https://th.bing.com/th/id/R.b5eeb9975a0c8c8c47d5d09c1e176e58?rik=pnxdivUAZM%2fepg&riu=http%3a%2f%2fwatchalive.files.wordpress.com%2f2010%2f10%2ftitan-tycoon-signature-we.jpg&ehk=F6of5scrCDzXeNxIF8G%2bdm%2boSyMDoAWxv1Ugbv%2fyeyI%3d&risl=&pid=ImgRaw&r=0"},
 
  {url:"https://n2.sdlcdn.com/imgs/a/t/b/Titan-Raga-Women-s-Watches-SDL084018269-1-374af.jpg"}
],
fasttrack:[
  {url:"https://n1.sdlcdn.com/imgs/b/s/6/1147772_1-456f7.jpg"},
  {url:"https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-fastrack-stylish-silver-watch-with-a-blue-dial-for-women-33338-m.jpg"},

  {url:"https://th.bing.com/th/id/OIP.3E_ylyyFQvDGxcsIXD22_wHaHa?pid=ImgDet&rs=1"}
],
fossil:[
  {url:"https://n3.sdlcdn.com/imgs/g/s/9/Fossil-Mens-ME3149-CREWMASTER-WATCH-SDL477412759-1-700fc.jpeg"},
  {url:"https://th.bing.com/th/id/OIP.64cE-ADJMfeeQR3MtjUQdAHaHa?pid=ImgDet&rs=1"},
  {url:"https://th.bing.com/th/id/OIP.jMLEy938QTVsKBV2G-hZvAHaIV?pid=ImgDet&rs=1"}
]
}
  return (
    
    <div className='main-home-page'>
      <div className='top-content'>
        Timecraft
        </div>
      <div className='top-menu-content'>
       
        <Link to ="/AdminLogin" >Admin</Link>
       <Link to ="/Userlogin">User</Link>
        <Link to="/RetailerLogin">Retailer</Link>
    </div>
    <div className='content' >
      <img className="content-image" src={watch1}></img>
      <p>SHOP WITH PEACE OF MIND</p>
      <div className='content-middle'>
      <div className='grid-images'>
       <div className='homepage-top-grid'> <img src={watch2}/>
       <h3>CASIO</h3></div>
        <div className='homepage-top-grid'><img src={clock1}/>
        <h3>Ambiguity de PARIS </h3></div>
        <div className='homepage-top-grid'><img src={watch4}/>
        <h3>CASIO</h3></div>
      </div>
      
      

    </div>
   
    </div>
   <div className='featured'>
    <div><img src={watch5}></img></div>
    <div><img src={clock2}></img></div>
    <div><img src={watch3}></img></div>
   </div>
   <h3 className='top-3-clock-brands'>Top 3 Wall Clock Brands</h3>
   <div className='featured-clocks'>
    
    <SimpleImageSlider className="SimpleImageSlider" width={360} height={360} images={clockslider.titan} showNavs={true} showBullets={true}/>
    <SimpleImageSlider width={360} height={360} images={clockslider.ajanta} showNavs={true} showBullets={true}/>
    <SimpleImageSlider width={360} height={360} images={clockslider.sieko} showNavs={true} showBullets={true}/>
    
   
    </div>
    <h3 className='top-3-watch-brands'>Top 3 Watch Brands</h3>
   <div className='featured-watches'>
    
    <SimpleImageSlider width={360} height={400} images={watchslider.titan} showNavs={true} showBullets={true}/>
    <SimpleImageSlider width={360} height={400} images={watchslider.fasttrack} showNavs={true} showBullets={true}/>
    <SimpleImageSlider width={360} height={400} images={watchslider.fossil} showNavs={true} showBullets={true}/>
    
   
    </div>
    <div className='footer'>
      Privacy Policy 
    </div>
    </div>
    
  )
}

export default HomePage