<template>
    <div class="image-uploader">
        
        <file-upload 
            @uploadComplete="onFileUploadComplete"
            @uploadSuccess="onFileUploadSuccess"
            @uploadError="onFileUploadError"
            label="Upload images" 
            :name="name"
            :multiple="multiple"
            :maxSize=12
            :auto="true"
            accept='image/*'
            action="/media/upload"
            ></file-upload>

        <input v-for="image in images" type="hidden" name="images[]" :value="image.id" />

        <ul class="image-thumbnails">
            <li v-for="image in images">
                <img 
                    :src="`/images/${ thumbnailSize }/${ image.url }`" 
                    width="300" />

                <a 
                    @click.prevent="onDeleteImage(image)"
                    :href="`/media/${ image.id }/destroy`" 
                    class="close btn-sm" 
                    role="button"
                    >Delete</a>
            </li>
        </ul>
    </div>
</template>

<script>
    
    import FileUpload from './FileUpload.vue'

    export default {

        props: {
            currentImages: {
                type: Array
            },
            thumbnailSize: {
                type: String,
                defaut: 'thumbnail'
            },
            name: {
                type: String,
                default: 'files'
            },
            multiple: {
                type: Boolean,
                default: true
            }
        },

        data(){
            return {
                images: this.currentImages
            }
        },

        components: {
            FileUpload
        },

        methods: {
            onFileUploadSuccess(files){
                console.log(files);
                this.images = this.images.concat(files);
            },
            onFileUploadError(error){
                console.error(error);
            },
            onFileUploadComplete(){
                //
            },
            onDeleteImage(image){
                //console.log(image);
                let accepted = confirm('Do you really want to delete the image?');
                if(accepted){
                    this.$http.delete(`/media/${image.id}`)
                        .then(response => {
                            let resp = response.body;
                            this.images = this.images.filter(function (item) {
                                return image.id != item.id;
                            });
                        }, error => {
                            console.error(error)
                        });
                }
            }
        }

    }

</script>

<style lang="sass">
    
    @import "../../sass/_variables.scss";
    
</style>