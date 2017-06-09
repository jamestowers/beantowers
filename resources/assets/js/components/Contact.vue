<template>
    <div id="contact-form" class="page pad inner">
        
        <transition name="fade">
            <div v-if="!success">
                
                <h2 class="huge">Hello.</h2>

                <p>Want to use us for your next project? Tell us about it here and we'll get back to you ASAP.</p>
                
                <form
                    ref="form" 
                    action="/contact"
                    method="post">
                    
                    <div class="form-row">
                        <label for="name">Name</label>
                        <input v-model="formData.name" type="text" name="name" placeholder="Your name" required />
                    </div>

                    <div class="form-row">
                        <label for="company">Company</label>
                        <input v-model="formData.company" type="text" name="company" placeholder="Company" />
                    </div>

                    <div class="form-row">
                        <label for="">Email address</label>
                        <input v-model="formData.email" type="text" name="email" placeholder="Email address" required />
                    </div>

                    <div class="form-row">
                        <label for="message">About your project</label>
                        <textarea v-model="formData.message" name="message" placeholder="Enter message" required></textarea>
                    </div>
                    
                    <div class="form-row">
                        <input @click.prevent="onSubmit" type="submit" :value="btnText" />
                    </div>

                </form>

            </div>

            <div v-else class="flex-center flex-column">
                <h2 class="huge">Thanks.</h2>

                <p>We'll get back to you in a bit.</p>
            </div>

        </transition>

    </div>
</template>

<script>

    export default {


        data(){
            return {
                loading: false,
                success: false,
                errors: [],
                formData: {
                    'name': null,
                    'email': null,
                    'company': null,
                    'message': null
                }
            }
        },

        created(){
            //console.log('');
        },

        computed: {
            btnText(){
                return this.loading ? 'Sending...' : 'Send'
            }
        },

        methods: {
            beforeSubmit() {
                this.validate()
            },
            onSubmit() {
                this.beforeSubmit()
                if(this.errors.length < 1){
                    this.loading = true
                    let vm = this
                    this.$http.post('contact', this.formData)
                        .then(this.onSuccess, this.onError)
                }
            },
            onSuccess(response) {
                this.loading = false
                this.success = true
            },
            onError(errors) {
                console.error(errors)
                this.loading = false
            },
            validate(){
                return this.formData.name !== null 
                    && this.formData.email !== null 
                    && this.formData.message !== null
            }
        }

    }

</script>

<style lang="scss">
    
    @import "../../sass/_variables.scss";
    @import "../../sass/_mixins.scss";

    .form-row{
        transform: translateY(100%);
        opacity:0;
        transition: all 0.8s $ease-out-back;
        @include delay(0, 0.1, 7);
    }

    .isReady{
        .form-row{
            transform: translateY(0);
            opacity: 1;
        }
    }
    
</style>