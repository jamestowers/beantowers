<template>
    <div id="contact-form" class="pad inner">

        <h2 class="huge">Hello.</h2>
        
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
                <label for="message">Message</label>
                <textarea v-model="formData.message" name="message" placeholder="Enter message" required></textarea>
            </div>
            
            <div class="form-row">
                <input @click.prevent="onSubmit" type="submit" value="Send" />
            </div>

        </form>
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

        methods: {
            beforeSubmit() {
                console.log('[Contact] Submitting...')
                this.loading = true
            },
            onSubmit() {
                this.beforeSubmit()
                let vm = this
                this.$http.post('contact', this.formData)
                    .then(this.onSuccess, this.onError);
            },
            onSuccess(response) {
                console.log('[Contact] Success')
                this.loading = false
                this.success = true
                console.log(this.success);
                let vm = this
                setTimeout(function(){
                    vm.success = false
                }, 5000)
            },
            onError(errors) {
                console.error(errors)
                this.loading = false
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