const linkShortener = Vue.createApp({
        data() {
            return{
                token: "21aa50b796d4d5214480da4601749ee06793ba40",
                urlInput: "",
                displayUrl: ""
            }
        },
        methods: {
            async getUrl() {
                const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                    method: "POST",
                    headers: {
                        Authorization : `Bearer ${this.token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        long_url: this.urlInput,
                        domain: "bit.ly",
                        group_guid: "Bm4sa8amPqz"
                    })
                })
                const data = await response.json()
                console.log(data);
                this.displayUrl = data.link
            }
        }
})
linkShortener.mount("#app")