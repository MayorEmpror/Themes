const BASE_CLOUDNIARY_URL = "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1691296927/Compressed_Files/compression/"
function generateCloudinaryTargetURL(file) {
            return BASE_CLOUDNIARY_URL + file
}

export default generateCloudinaryTargetURL