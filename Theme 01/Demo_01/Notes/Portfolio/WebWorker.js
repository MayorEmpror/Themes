importScripts("./GalleryImageContainer.jsx")

onmessage = () => {
    const Images = [
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996060/Photographs%20copy/digitalization_lny1mh.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996034/Photographs%20copy/Code_ue0pyz.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996028/Photographs%20copy/secure_vkn75s.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996024/Photographs%20copy/forestRoad_deq21k.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996051/Photographs%20copy/Man_a1utla.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996050/Photographs%20copy/faris-mohammed-d30sszrW7Vw-unsplash_bplgxy.jpg",
    
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996020/Photographs%20copy/horse_rx7ysl.jpg",
    
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996067/Photographs%20copy/city_tjnwsg.png",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690997583/AdobeStock_274822582_Preview_pjlxen.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690997714/AdobeStock_611536941_Preview_ue0seo.jpg",
        "https://as2.ftcdn.net/v2/jpg/06/05/17/65/1000_F_605176535_TXwkzeHX45ABXuWMtBGpNGuFirXj1Zcm.jpg",
        "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996020/Photographs%20copy/horse_rx7ysl.jpg",
      ];
      if (window.innerWidth <= 400) {
        // No_of_Blocks = 5;
      }
      const Array_Images = [];
      for (let i = 0; i < 12; i++) {
        Array_Images.push(<GalleryImageContainer key={i} image={Images[i]} />);
      }
      postMessage("o", "*", Array_Images)
}