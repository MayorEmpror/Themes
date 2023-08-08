import React from "react"
import Text from "./Content"

export default function Introduction(){
    return(
        <div className="flex flex-col h-screen w-full lg:flex-row items-center bg-white">
         <div className="container h-screen  w-full flex items-center mx-auto relative sm:h-[200rem] lg:h-[55rem] ">
       <div id="picture" className={`   w-5/6 h-5/6 relative mx-auto shadow-2xl hover:shadow-sm duration-500 overflow-hidden items-center flex`}>
       <div id="picture" className={`bg-[url('../images/Photographs/WormHole.jpeg')] bg-center  bg-no-repeat bg-cover w-5/6 h-5/6 relative mx-auto `}>
 
 </div>
       </div>
        
       </div>

       <div className="h-full w-full bg-white items-center mt-40 pr-10">
     <Text> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae, fugit tempora in rem voluptates qui minus odit nam dolores doloremque accusamus accusantium.
         <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nobis consequuntur facere error, porro repellendus beatae? Libero maiores totam soluta, possimus natus fugiat.
         </p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique facilis incidunt magnam aliquam delectus repellendus reiciendis velit totam earum numquam veniam, recusandae, voluptas maiores obcaecati corrupti eos quasi. Nostrum ducimus explicabo laborum minus facere magni, deserunt dignissimos excepturi consequuntur animi reiciendis ullam consectetur tempora quo. Accusamus reprehenderit enim neque assumenda pariatur, eius commodi aliquid eum aperiam sed similique iure consequatur, cum ad repellendus cumque sit exercitationem, nobis quidem! Architecto, eligendi dolore! Veritatis fugit nisi ullam alias! Sapiente iste numquam tenetur voluptas architecto eum alias enim minus, ducimus et sunt perspiciatis vel ipsum iusto quasi neque molestias quaerat similique pariatur ratione.
          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim officiis excepturi nisi ab dolor fugiat delectus temporibus libero totam, facere veniam accusantium tenetur quis ut eaque dolorum unde officia! Quod impedit doloribus et deserunt recusandae, maxime voluptate excepturi ea facilis at temporibus aspernatur neque officiis accusantium doloremque laudantium eum dolor repudiandae, porro, ipsam ducimus provident consectetur. Natus tempora perferendis voluptates iusto sed vel quos sint nemo aut recusandae, saepe dolor totam soluta ullam earum dolores odio dolorum aliquam quaerat? Ipsam vel quo officia libero doloribus alias quae, illo rerum ratione eveniet ducimus, labore eum possimus nobis id quis maiores.
          </p>
      </Text>
      
     </div>
        </div>
    )
}