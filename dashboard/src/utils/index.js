
export const imageUpload = async(img) => {
    const data = new FormData();
    data.append("file", img)
    data.append("upload_preset", "doancoso")
    data.append("cloud_name", "dv4dqguu2")
    const res = await fetch("https://api.cloudinary.com/v1_1/dv4dqguu2/upload", {
        method: "post",
        body: data
    });
    const resData = await res.json();
    return {public_id: resData.public_id, url: resData.url}
}