import axios from "axios";

const uploadImage = async(file) => {
    if (!file) return;

    try {
        //Regresa la imga de la url

        const formData = new FormData();
        formData.append("upload_preset", "curso-vue");
        formData.append("file", file);

        const url = `https://api.cloudinary.com/v1_1/vue-curso-fernando-herrera-santiago/image/upload`;
        const { data } = await axios.post(url, formData);
        console.log(data);

        return data.secure_url;
    } catch (e) {
        console.error("Error al cargar la imagen ");
        console.log("e");
        return null;
    }
};

export default uploadImage;