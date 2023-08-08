export default function PortfolioCard(props) {
  const {imageSrc, heading} = props
//   https://res.cloudinary.com/dvv1pqwtb/image/upload/v1691296927/Compressed_Files/compression/digitalization_copy_qhggwj.jpg
  return (
    <div className="ml-1 mr-1 h-5/6 w-1/3  overflow-hidden bg-white md:ml-5 md:mr-3">
      <div className="h-1/2 w-full overflow-hidden">
        <div className={`h-full w-full bg-[url('${imageSrc}')] bg-cover bg-center  transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`}></div>
      </div>
      <h1 className="bg-gradient-to-r from-black to-black bg-clip-text p-2 font-serif text-2xl text-transparent text-center">
        {heading}
      </h1>
      <hr className="text-blue-900" />
      <h6 className="max-h-full bg-gradient-to-r from-black to-black  bg-clip-text text-center font-serif text-xl text-transparent ">
        <p className="para">
          {props.children}
        </p>
      </h6>
    </div>
  );
}
